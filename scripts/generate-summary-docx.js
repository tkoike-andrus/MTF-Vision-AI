const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  LevelFormat, Header, Footer, PageNumber,
} = require("docx");

// ── Helpers ──
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "1A1A2E", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, font: "Meiryo", size: 18, color: "FFFFFF" })] })],
  });
}

function bodyCell(text, width, opts = {}) {
  const runs = [];
  // Support code-style backtick segments
  const parts = text.split(/(`[^`]+`)/);
  for (const part of parts) {
    if (part.startsWith("`") && part.endsWith("`")) {
      runs.push(new TextRun({ text: part.slice(1, -1), font: "Consolas", size: 17, color: "D63384", bold: true }));
    } else {
      runs.push(new TextRun({ text: part, font: "Meiryo", size: 17, color: opts.color || "333333" }));
    }
  }
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({ children: runs })],
  });
}

function makeTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      new TableRow({ children: headers.map((h, i) => headerCell(h, colWidths[i])) }),
      ...rows.map((row, ri) =>
        new TableRow({
          children: row.map((cell, ci) =>
            bodyCell(cell, colWidths[ci], { shading: ri % 2 === 0 ? "F8F9FA" : undefined })
          ),
        })
      ),
    ],
  });
}

function sectionHeading(num, title) {
  return new Paragraph({
    spacing: { before: 360, after: 200 },
    children: [
      new TextRun({ text: `${num}. `, font: "Meiryo", size: 28, bold: true, color: "1A1A2E" }),
      new TextRun({ text: title, font: "Meiryo", size: 28, bold: true, color: "1A1A2E" }),
    ],
  });
}

function bodyText(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: "Meiryo", size: 20, color: "333333" })],
  });
}

function bulletItem(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Meiryo", size: 20, color: "333333" })],
  });
}

function codeBlock(text) {
  return new Paragraph({
    spacing: { before: 80, after: 120 },
    indent: { left: 360 },
    children: [new TextRun({ text, font: "Consolas", size: 18, color: "D63384" })],
  });
}

// ── Document ──
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Meiryo", size: 20 } },
    },
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }, // 2cm
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "AATM v2.1 Technical Report", font: "Meiryo", size: 16, color: "999999", italics: true })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Page ", font: "Meiryo", size: 16, color: "999999" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Meiryo", size: 16, color: "999999" }),
          ],
        })],
      }),
    },
    children: [
      // ── Title ──
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: "AATM v2.1", font: "Meiryo", size: 44, bold: true, color: "1A1A2E" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Autonomous AI Trading Manager", font: "Meiryo", size: 24, color: "666666" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A1A2E", space: 12 } },
        children: [new TextRun({ text: "2026/03/20", font: "Meiryo", size: 28, bold: true, color: "1A1A2E" })],
      }),

      // ══ Section 1: GMO FX API ══
      sectionHeading("1", "GMO FX API\u4FEE\u6B63"),

      makeTable(
        ["\u9805\u76EE", "\u4FEE\u6B63\u524D", "\u4FEE\u6B63\u5F8C"],
        [
          ["\u9006\u6307\u5024\u6CE8\u6587", "`executionType: STOP` + `price` \u2192 ERR-5211", "`stopPrice` \u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u5909\u66F4"],
          ["\u6CE8\u6587\u30EC\u30B9\u30DD\u30F3\u30B9", "`data` \u3092\u6587\u5B57\u5217\u3068\u3057\u3066\u51E6\u7406", "`data` \u3092\u914D\u5217\u3068\u3057\u3066\u51E6\u7406 `data[0].orderId`"],
          ["SL\u4FA1\u683C", "\u30A8\u30F3\u30C8\u30EA\u30FC\u304B\u3089\u56FA\u5B9A50pips", "Gemini AI\u5206\u6790\u306E `stop_loss` \u63A8\u5968\u5024\u3092\u63A1\u7528\uFF08\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF: 50pips\uFF09"],
          ["\u7D04\u5B9A\u60C5\u5831\u53D6\u5F97", "symbol\u672A\u6307\u5B9A\u3067\u5931\u6557", "`/v1/latestExecutions` \u306Bsymbol\u6307\u5B9A\u3067\u53D6\u5F97"],
        ],
        [2000, 3500, 3500]
      ),

      // ══ Section 2: Position Detection ══
      sectionHeading("2", "\u30DD\u30B8\u30B7\u30E7\u30F3\u6D88\u5931\u691C\u77E5\u306E\u5F37\u5316"),

      bodyText("\u4FEE\u6B63\u524D: \u30DD\u30B8\u30B7\u30E7\u30F3\u304CGMO\u4E0A\u3067\u6D88\u3048\u305F\u5834\u5408\u3001\u72B6\u614B\u30EA\u30BB\u30C3\u30C8\u306E\u307F\uFF08P&L\u4E0D\u660E\u3001trades\u672A\u8A18\u9332\uFF09"),
      bodyText("\u4FEE\u6B63\u5F8C\u306E\u30D5\u30ED\u30FC:"),
      codeBlock("\u30DD\u30B8\u30B7\u30E7\u30F3\u672A\u691C\u51FA \u2192 latestExecutions\u53D6\u5F97 \u2192 trades\u8A18\u9332 \u2192 \u9023\u6557\u6570/\u65E5\u6B21P&L\u66F4\u65B0 \u2192 \u72B6\u614B\u30EA\u30BB\u30C3\u30C8"),
      bulletItem("\u6C7A\u6E08\u660E\u7D30\u304B\u3089P&L\u30FB\u6C7A\u6E08\u4FA1\u683C\u3092\u81EA\u52D5\u53D6\u5F97"),
      bulletItem("trades\u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\uFF08\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u53CD\u6620\uFF09"),
      bulletItem("bot_states\u306E\u9023\u6557\u30AB\u30A6\u30F3\u30C8\u30FB\u65E5\u6B21\u640D\u76CA\u3082\u66F4\u65B0"),

      // ══ Section 3: X (Twitter) ══
      sectionHeading("3", "X (Twitter) \u6295\u7A3F\u6539\u5584"),

      makeTable(
        ["\u9805\u76EE", "\u5185\u5BB9"],
        [
          ["Bot\u8D77\u52D5/\u505C\u6B62\u6295\u7A3F", "\u5EC3\u6B62\uFF08\u7121\u99C4\u306A\u6295\u7A3F\u3068\u3057\u3066\u524A\u9664\uFF09"],
          ["HOLD\u6642Discord\u901A\u77E5", "\u5EC3\u6B62\uFF08BUY/SELL/EXIT\u306E\u307F\u901A\u77E5\uFF09"],
        ],
        [3500, 5500]
      ),

      // ══ Section 4: Strategy Prompt ══
      sectionHeading("4", "\u6226\u7565\u30D7\u30ED\u30F3\u30D7\u30C8\u6A5F\u80FD\u5F37\u5316"),

      makeTable(
        ["\u9805\u76EE", "\u5185\u5BB9"],
        [
          ["`{current_price}` \u5909\u6570\u8FFD\u52A0", "BUY\u4FDD\u6709\u6642=BID\u3001SELL\u4FDD\u6709\u6642=ASK\u3001\u30CE\u30FC\u30DD\u30B8=ASK"],
          ["\u5909\u6570\u4E00\u89A7\u30C6\u30FC\u30D6\u30EB", "\u6226\u7565\u30BF\u30D6\u306B\u6298\u308A\u305F\u305F\u307F\u5F0F\u3067 `{symbol}`, `{current_price}`, `{current_dt_str}`, `{position_status}`, `{economic_info}`, `{ai_summary}` \u3092\u8868\u793A"],
          ["\u524A\u9664UI\u6539\u5584", "\u30D6\u30E9\u30A6\u30B6\u306E `confirm()` \u5EC3\u6B62 \u2192 \u30A4\u30F3\u30E9\u30A4\u30F3\u78BA\u8A8D\u30DC\u30BF\u30F3\uFF08\u2713/\u2715\uFF09\u306B\u5909\u66F4"],
          ["\u8AD6\u7406\u524A\u9664\u306E\u53CD\u6620", "\u30D3\u30EB\u30C8\u30A4\u30F3\u6226\u7565\u3092\u524A\u9664\u5F8C\u3001\u30EA\u30ED\u30FC\u30C9\u3067\u5FA9\u6D3B\u3059\u308B\u30D0\u30B0\u3092\u4FEE\u6B63\uFF08`is_active=false` \u3092GET\u304B\u3089\u9664\u5916\uFF09"],
        ],
        [3500, 5500]
      ),

      // ══ Section 5: MQL5 ══
      sectionHeading("5", "MQL5\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u6539\u4FEE\uFF08Auto_SR_Lines v13.10\uFF09"),

      makeTable(
        ["\u9805\u76EE", "\u4FEE\u6B63\u524D", "\u4FEE\u6B63\u5F8C"],
        [
          ["MA\u65B9\u5411\u30D5\u30A3\u30EB\u30BF\u30FC", "\u306A\u3057\uFF08\u5E38\u306B\u4E0A\u4E0B\u4E21\u65B9\u63CF\u753B\uFF09", "\u4FA1\u683C>MA \u2192 \u62BC\u3057\u76EE\u8CB7\u3044\u306E\u307F / \u4FA1\u683C<MA \u2192 \u623B\u308A\u58F2\u308A\u306E\u307F"],
          ["\u63CF\u753B\u672C\u6570", "\u4E0A\u4E0B\u5404\u6700\u59273\u672C", "\u73FE\u5728\u4FA1\u683C\u306B\u6700\u3082\u8FD1\u30441\u672C\u306E\u307F"],
          ["\u518D\u8A08\u7B97\u30BF\u30A4\u30DF\u30F3\u30B0", "\u6BCE\u30C6\u30A3\u30C3\u30AF", "H1\u8DB3\u78BA\u5B9A\u6642\u306E\u307F"],
          ["\u30BE\u30FC\u30F3\u5E45", "\u30D2\u30B2\u5168\u4F53\uFF08\u5B9F\u4F53\uFF5E\u5148\u7AEF\uFF09", "\u30D2\u30B2\u5148\u7AEF\u304B\u3089\u6700\u59275pips\uFF08\u5B9F\u4F53\u306B\u304B\u3076\u3089\u306A\u3044\uFF09"],
          ["\u8272", "\u58F2\u308A=\u30AA\u30EC\u30F3\u30B8 / \u8CB7\u3044=\u9752", "\u30AA\u30EC\u30F3\u30B81\u8272\u306B\u7D71\u4E00"],
        ],
        [2000, 3500, 3500]
      ),

      // ── Footer note ──
      new Paragraph({ spacing: { before: 600 } }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Generated by AATM v2.1 / Claude Code", font: "Meiryo", size: 16, color: "999999", italics: true })],
      }),
    ],
  }],
});

// ── Output ──
Packer.toBuffer(doc).then((buffer) => {
  const outPath = "C:/Project/edge-finder/docs/AATM_v2.1_技術改善サマリー_20260320.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Generated: " + outPath);
});

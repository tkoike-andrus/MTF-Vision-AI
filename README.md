
```
edge-finder
├─ .env
├─ backend
│  ├─ analyzer.py
│  ├─ backfill_market_data.py
│  ├─ csv
│  │  ├─ 20260307_204028_SBI FXトレード.csv
│  │  ├─ 20260307_204152_SBI FXトレード.csv
│  │  ├─ 20260307_204242_SBI FXトレード.csv
│  │  ├─ DMMFX-TradeRecordList.csv
│  │  ├─ GMOクリック証券-TradeRecordList.csv
│  │  └─ SBI FXトレード.csv
│  ├─ csv-parse.py
│  ├─ fetch_chart.py
│  ├─ main.py
│  └─ parsers
│     ├─ base.py
│     ├─ sbi_parser.py
│     └─ __pycache__
│        ├─ base.cpython-313.pyc
│        └─ sbi_parser.cpython-313.pyc
├─ dummy_dmm.csv
├─ frontend
│  ├─ .next
│  │  └─ dev
│  │     ├─ build
│  │     │  ├─ chunks
│  │     │  │  ├─ 9e883_174fdf60._.js
│  │     │  │  ├─ 9e883_174fdf60._.js.map
│  │     │  │  ├─ [root-of-the-server]__188e9cb8._.js
│  │     │  │  ├─ [root-of-the-server]__188e9cb8._.js.map
│  │     │  │  ├─ [root-of-the-server]__3b54a99d._.js
│  │     │  │  ├─ [root-of-the-server]__3b54a99d._.js.map
│  │     │  │  ├─ [root-of-the-server]__6e020478._.js
│  │     │  │  ├─ [root-of-the-server]__6e020478._.js.map
│  │     │  │  ├─ [root-of-the-server]__c7ae8543._.js
│  │     │  │  ├─ [root-of-the-server]__c7ae8543._.js.map
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_c22fd416._.js
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_c22fd416._.js.map
│  │     │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_1efa112f._.js
│  │     │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_1efa112f._.js.map
│  │     │  │  ├─ [turbopack]_runtime.js
│  │     │  │  └─ [turbopack]_runtime.js.map
│  │     │  ├─ package.json
│  │     │  ├─ postcss.js
│  │     │  ├─ postcss.js.map
│  │     │  ├─ webpack-loaders.js
│  │     │  └─ webpack-loaders.js.map
│  │     ├─ build-manifest.json
│  │     ├─ cache
│  │     │  ├─ .rscinfo
│  │     │  ├─ chrome-devtools-workspace-uuid
│  │     │  ├─ next-devtools-config.json
│  │     │  └─ turbopack
│  │     │     └─ 23c46498
│  │     │        ├─ 00000001.sst
│  │     │        ├─ 00000002.sst
│  │     │        ├─ 00000003.sst
│  │     │        ├─ 00000004.sst
│  │     │        ├─ 00000005.sst
│  │     │        ├─ 00000006.meta
│  │     │        ├─ 00000007.meta
│  │     │        ├─ 00000008.meta
│  │     │        ├─ 00000009.meta
│  │     │        ├─ 00000010.meta
│  │     │        ├─ 00000011.sst
│  │     │        ├─ 00000012.sst
│  │     │        ├─ 00000013.sst
│  │     │        ├─ 00000014.sst
│  │     │        ├─ 00000015.sst
│  │     │        ├─ 00000016.sst
│  │     │        ├─ 00000017.sst
│  │     │        ├─ 00000018.sst
│  │     │        ├─ 00000019.meta
│  │     │        ├─ 00000020.meta
│  │     │        ├─ 00000021.meta
│  │     │        ├─ 00000022.meta
│  │     │        ├─ 00000023.meta
│  │     │        ├─ 00000024.sst
│  │     │        ├─ 00000025.sst
│  │     │        ├─ 00000026.sst
│  │     │        ├─ 00000027.meta
│  │     │        ├─ 00000028.meta
│  │     │        ├─ 00000029.meta
│  │     │        ├─ 00000030.sst
│  │     │        ├─ 00000031.sst
│  │     │        ├─ 00000032.sst
│  │     │        ├─ 00000033.meta
│  │     │        ├─ 00000034.meta
│  │     │        ├─ 00000035.meta
│  │     │        ├─ 00000036.sst
│  │     │        ├─ 00000037.sst
│  │     │        ├─ 00000038.sst
│  │     │        ├─ 00000039.sst
│  │     │        ├─ 00000040.sst
│  │     │        ├─ 00000041.meta
│  │     │        ├─ 00000042.meta
│  │     │        ├─ 00000043.meta
│  │     │        ├─ 00000044.meta
│  │     │        ├─ 00000045.meta
│  │     │        ├─ 00000046.sst
│  │     │        ├─ 00000047.sst
│  │     │        ├─ 00000048.sst
│  │     │        ├─ 00000049.meta
│  │     │        ├─ 00000050.meta
│  │     │        ├─ 00000051.meta
│  │     │        ├─ 00000052.sst
│  │     │        ├─ 00000053.sst
│  │     │        ├─ 00000054.sst
│  │     │        ├─ 00000055.meta
│  │     │        ├─ 00000056.meta
│  │     │        ├─ 00000057.meta
│  │     │        ├─ 00000058.sst
│  │     │        ├─ 00000059.sst
│  │     │        ├─ 00000060.sst
│  │     │        ├─ 00000061.meta
│  │     │        ├─ 00000062.meta
│  │     │        ├─ 00000063.meta
│  │     │        ├─ 00000064.sst
│  │     │        ├─ 00000065.sst
│  │     │        ├─ 00000066.sst
│  │     │        ├─ 00000067.meta
│  │     │        ├─ 00000068.meta
│  │     │        ├─ 00000069.meta
│  │     │        ├─ 00000070.sst
│  │     │        ├─ 00000071.sst
│  │     │        ├─ 00000072.sst
│  │     │        ├─ 00000073.meta
│  │     │        ├─ 00000074.meta
│  │     │        ├─ 00000075.meta
│  │     │        ├─ 00000076.sst
│  │     │        ├─ 00000077.sst
│  │     │        ├─ 00000078.sst
│  │     │        ├─ 00000079.meta
│  │     │        ├─ 00000080.meta
│  │     │        ├─ 00000081.meta
│  │     │        ├─ 00000082.sst
│  │     │        ├─ 00000083.sst
│  │     │        ├─ 00000084.sst
│  │     │        ├─ 00000085.meta
│  │     │        ├─ 00000086.meta
│  │     │        ├─ 00000087.meta
│  │     │        ├─ 00000088.sst
│  │     │        ├─ 00000089.sst
│  │     │        ├─ 00000090.sst
│  │     │        ├─ 00000091.meta
│  │     │        ├─ 00000092.meta
│  │     │        ├─ 00000093.meta
│  │     │        ├─ 00000094.sst
│  │     │        ├─ 00000095.sst
│  │     │        ├─ 00000096.sst
│  │     │        ├─ 00000097.meta
│  │     │        ├─ 00000098.meta
│  │     │        ├─ 00000099.meta
│  │     │        ├─ 00000100.sst
│  │     │        ├─ 00000101.sst
│  │     │        ├─ 00000102.sst
│  │     │        ├─ 00000103.meta
│  │     │        ├─ 00000104.meta
│  │     │        ├─ 00000105.meta
│  │     │        ├─ 00000106.sst
│  │     │        ├─ 00000107.sst
│  │     │        ├─ 00000108.sst
│  │     │        ├─ 00000109.meta
│  │     │        ├─ 00000110.meta
│  │     │        ├─ 00000111.meta
│  │     │        ├─ 00000112.sst
│  │     │        ├─ 00000113.sst
│  │     │        ├─ 00000114.sst
│  │     │        ├─ 00000115.meta
│  │     │        ├─ 00000116.meta
│  │     │        ├─ 00000117.meta
│  │     │        ├─ 00000118.sst
│  │     │        ├─ 00000119.sst
│  │     │        ├─ 00000120.sst
│  │     │        ├─ 00000121.meta
│  │     │        ├─ 00000122.meta
│  │     │        ├─ 00000123.meta
│  │     │        ├─ 00000124.sst
│  │     │        ├─ 00000125.sst
│  │     │        ├─ 00000126.sst
│  │     │        ├─ 00000127.meta
│  │     │        ├─ 00000128.meta
│  │     │        ├─ 00000129.meta
│  │     │        ├─ 00000130.sst
│  │     │        ├─ 00000131.sst
│  │     │        ├─ 00000132.sst
│  │     │        ├─ 00000133.meta
│  │     │        ├─ 00000134.meta
│  │     │        ├─ 00000135.meta
│  │     │        ├─ 00000136.sst
│  │     │        ├─ 00000137.sst
│  │     │        ├─ 00000138.sst
│  │     │        ├─ 00000139.meta
│  │     │        ├─ 00000140.meta
│  │     │        ├─ 00000141.meta
│  │     │        ├─ 00000142.sst
│  │     │        ├─ 00000143.sst
│  │     │        ├─ 00000144.sst
│  │     │        ├─ 00000145.meta
│  │     │        ├─ 00000146.meta
│  │     │        ├─ 00000147.meta
│  │     │        ├─ 00000148.sst
│  │     │        ├─ 00000149.sst
│  │     │        ├─ 00000150.sst
│  │     │        ├─ 00000151.meta
│  │     │        ├─ 00000152.meta
│  │     │        ├─ 00000153.meta
│  │     │        ├─ 00000154.sst
│  │     │        ├─ 00000155.sst
│  │     │        ├─ 00000156.sst
│  │     │        ├─ 00000157.meta
│  │     │        ├─ 00000158.meta
│  │     │        ├─ 00000159.meta
│  │     │        ├─ 00000160.sst
│  │     │        ├─ 00000161.sst
│  │     │        ├─ 00000162.sst
│  │     │        ├─ 00000163.meta
│  │     │        ├─ 00000164.meta
│  │     │        ├─ 00000165.meta
│  │     │        ├─ 00000166.sst
│  │     │        ├─ 00000167.sst
│  │     │        ├─ 00000168.sst
│  │     │        ├─ 00000169.meta
│  │     │        ├─ 00000170.meta
│  │     │        ├─ 00000171.meta
│  │     │        ├─ 00000172.sst
│  │     │        ├─ 00000173.sst
│  │     │        ├─ 00000174.sst
│  │     │        ├─ 00000175.meta
│  │     │        ├─ 00000176.meta
│  │     │        ├─ 00000177.meta
│  │     │        ├─ 00000178.sst
│  │     │        ├─ 00000179.sst
│  │     │        ├─ 00000180.sst
│  │     │        ├─ 00000181.meta
│  │     │        ├─ 00000182.meta
│  │     │        ├─ 00000183.meta
│  │     │        ├─ 00000184.sst
│  │     │        ├─ 00000185.sst
│  │     │        ├─ 00000186.sst
│  │     │        ├─ 00000187.meta
│  │     │        ├─ 00000188.meta
│  │     │        ├─ 00000189.meta
│  │     │        ├─ 00000190.sst
│  │     │        ├─ 00000191.sst
│  │     │        ├─ 00000192.sst
│  │     │        ├─ 00000193.meta
│  │     │        ├─ 00000194.meta
│  │     │        ├─ 00000195.meta
│  │     │        ├─ 00000196.sst
│  │     │        ├─ 00000197.sst
│  │     │        ├─ 00000198.sst
│  │     │        ├─ 00000199.meta
│  │     │        ├─ 00000200.meta
│  │     │        ├─ 00000201.meta
│  │     │        ├─ 00000202.sst
│  │     │        ├─ 00000203.sst
│  │     │        ├─ 00000204.sst
│  │     │        ├─ 00000205.sst
│  │     │        ├─ 00000206.sst
│  │     │        ├─ 00000207.meta
│  │     │        ├─ 00000208.meta
│  │     │        ├─ 00000209.meta
│  │     │        ├─ 00000210.meta
│  │     │        ├─ 00000211.meta
│  │     │        ├─ 00000212.sst
│  │     │        ├─ 00000213.sst
│  │     │        ├─ 00000214.sst
│  │     │        ├─ 00000215.meta
│  │     │        ├─ 00000216.meta
│  │     │        ├─ 00000217.meta
│  │     │        ├─ 00000218.sst
│  │     │        ├─ 00000219.sst
│  │     │        ├─ 00000220.sst
│  │     │        ├─ 00000221.meta
│  │     │        ├─ 00000222.meta
│  │     │        ├─ 00000223.meta
│  │     │        ├─ 00000224.sst
│  │     │        ├─ 00000225.sst
│  │     │        ├─ 00000226.sst
│  │     │        ├─ 00000227.meta
│  │     │        ├─ 00000228.meta
│  │     │        ├─ 00000229.meta
│  │     │        ├─ 00000230.sst
│  │     │        ├─ 00000231.sst
│  │     │        ├─ 00000232.sst
│  │     │        ├─ 00000233.meta
│  │     │        ├─ 00000234.meta
│  │     │        ├─ 00000235.meta
│  │     │        ├─ 00000236.sst
│  │     │        ├─ 00000237.sst
│  │     │        ├─ 00000238.sst
│  │     │        ├─ 00000239.meta
│  │     │        ├─ 00000240.meta
│  │     │        ├─ 00000241.meta
│  │     │        ├─ 00000242.sst
│  │     │        ├─ 00000243.sst
│  │     │        ├─ 00000244.sst
│  │     │        ├─ 00000245.meta
│  │     │        ├─ 00000246.meta
│  │     │        ├─ 00000247.meta
│  │     │        ├─ 00000248.sst
│  │     │        ├─ 00000249.sst
│  │     │        ├─ 00000250.sst
│  │     │        ├─ 00000251.meta
│  │     │        ├─ 00000252.meta
│  │     │        ├─ 00000253.meta
│  │     │        ├─ 00000254.sst
│  │     │        ├─ 00000255.sst
│  │     │        ├─ 00000256.sst
│  │     │        ├─ 00000257.meta
│  │     │        ├─ 00000258.meta
│  │     │        ├─ 00000259.meta
│  │     │        ├─ 00000260.sst
│  │     │        ├─ 00000261.sst
│  │     │        ├─ 00000262.sst
│  │     │        ├─ 00000263.meta
│  │     │        ├─ 00000264.meta
│  │     │        ├─ 00000265.meta
│  │     │        ├─ 00000266.sst
│  │     │        ├─ 00000267.sst
│  │     │        ├─ 00000268.sst
│  │     │        ├─ 00000269.meta
│  │     │        ├─ 00000270.meta
│  │     │        ├─ 00000271.meta
│  │     │        ├─ 00000272.sst
│  │     │        ├─ 00000273.sst
│  │     │        ├─ 00000274.sst
│  │     │        ├─ 00000275.meta
│  │     │        ├─ 00000276.meta
│  │     │        ├─ 00000277.meta
│  │     │        ├─ 00000278.sst
│  │     │        ├─ 00000279.sst
│  │     │        ├─ 00000280.sst
│  │     │        ├─ 00000281.meta
│  │     │        ├─ 00000282.meta
│  │     │        ├─ 00000283.meta
│  │     │        ├─ 00000284.sst
│  │     │        ├─ 00000285.sst
│  │     │        ├─ 00000286.sst
│  │     │        ├─ 00000287.meta
│  │     │        ├─ 00000288.meta
│  │     │        ├─ 00000289.meta
│  │     │        ├─ 00000290.sst
│  │     │        ├─ 00000291.sst
│  │     │        ├─ 00000292.sst
│  │     │        ├─ 00000293.meta
│  │     │        ├─ 00000294.meta
│  │     │        ├─ 00000295.meta
│  │     │        ├─ 00000296.sst
│  │     │        ├─ 00000297.sst
│  │     │        ├─ 00000298.sst
│  │     │        ├─ 00000299.meta
│  │     │        ├─ 00000300.meta
│  │     │        ├─ 00000301.meta
│  │     │        ├─ 00000302.sst
│  │     │        ├─ 00000303.sst
│  │     │        ├─ 00000304.sst
│  │     │        ├─ 00000305.meta
│  │     │        ├─ 00000306.meta
│  │     │        ├─ 00000307.meta
│  │     │        ├─ 00000308.sst
│  │     │        ├─ 00000309.sst
│  │     │        ├─ 00000310.sst
│  │     │        ├─ 00000311.meta
│  │     │        ├─ 00000312.meta
│  │     │        ├─ 00000313.meta
│  │     │        ├─ 00000314.sst
│  │     │        ├─ 00000315.sst
│  │     │        ├─ 00000316.sst
│  │     │        ├─ 00000317.meta
│  │     │        ├─ 00000318.meta
│  │     │        ├─ 00000319.meta
│  │     │        ├─ 00000320.sst
│  │     │        ├─ 00000321.sst
│  │     │        ├─ 00000322.sst
│  │     │        ├─ 00000323.meta
│  │     │        ├─ 00000324.meta
│  │     │        ├─ 00000325.meta
│  │     │        ├─ 00000326.sst
│  │     │        ├─ 00000327.sst
│  │     │        ├─ 00000328.sst
│  │     │        ├─ 00000329.meta
│  │     │        ├─ 00000330.meta
│  │     │        ├─ 00000331.meta
│  │     │        ├─ 00000332.sst
│  │     │        ├─ 00000333.sst
│  │     │        ├─ 00000334.sst
│  │     │        ├─ 00000335.meta
│  │     │        ├─ 00000336.meta
│  │     │        ├─ 00000337.meta
│  │     │        ├─ 00000338.sst
│  │     │        ├─ 00000339.sst
│  │     │        ├─ 00000340.sst
│  │     │        ├─ 00000341.meta
│  │     │        ├─ 00000342.meta
│  │     │        ├─ 00000343.meta
│  │     │        ├─ 00000344.sst
│  │     │        ├─ 00000345.sst
│  │     │        ├─ 00000346.sst
│  │     │        ├─ 00000347.meta
│  │     │        ├─ 00000348.meta
│  │     │        ├─ 00000349.meta
│  │     │        ├─ 00000350.sst
│  │     │        ├─ 00000351.sst
│  │     │        ├─ 00000352.sst
│  │     │        ├─ 00000353.meta
│  │     │        ├─ 00000354.meta
│  │     │        ├─ 00000355.meta
│  │     │        ├─ 00000356.sst
│  │     │        ├─ 00000357.sst
│  │     │        ├─ 00000358.sst
│  │     │        ├─ 00000359.meta
│  │     │        ├─ 00000360.meta
│  │     │        ├─ 00000361.meta
│  │     │        ├─ 00000362.sst
│  │     │        ├─ 00000363.sst
│  │     │        ├─ 00000364.sst
│  │     │        ├─ 00000365.meta
│  │     │        ├─ 00000366.meta
│  │     │        ├─ 00000367.meta
│  │     │        ├─ 00000368.sst
│  │     │        ├─ 00000369.sst
│  │     │        ├─ 00000370.sst
│  │     │        ├─ 00000371.meta
│  │     │        ├─ 00000372.meta
│  │     │        ├─ 00000373.meta
│  │     │        ├─ 00000374.sst
│  │     │        ├─ 00000375.sst
│  │     │        ├─ 00000376.sst
│  │     │        ├─ 00000377.meta
│  │     │        ├─ 00000378.meta
│  │     │        ├─ 00000379.meta
│  │     │        ├─ 00000380.sst
│  │     │        ├─ 00000381.sst
│  │     │        ├─ 00000382.sst
│  │     │        ├─ 00000383.meta
│  │     │        ├─ 00000384.meta
│  │     │        ├─ 00000385.meta
│  │     │        ├─ 00000386.sst
│  │     │        ├─ 00000387.sst
│  │     │        ├─ 00000388.sst
│  │     │        ├─ 00000389.meta
│  │     │        ├─ 00000390.meta
│  │     │        ├─ 00000391.meta
│  │     │        ├─ 00000392.sst
│  │     │        ├─ 00000393.sst
│  │     │        ├─ 00000394.sst
│  │     │        ├─ 00000395.meta
│  │     │        ├─ 00000396.meta
│  │     │        ├─ 00000397.meta
│  │     │        ├─ 00000398.sst
│  │     │        ├─ 00000399.sst
│  │     │        ├─ 00000400.sst
│  │     │        ├─ 00000401.meta
│  │     │        ├─ 00000402.meta
│  │     │        ├─ 00000403.meta
│  │     │        ├─ 00000404.sst
│  │     │        ├─ 00000405.sst
│  │     │        ├─ 00000406.sst
│  │     │        ├─ 00000407.meta
│  │     │        ├─ 00000408.meta
│  │     │        ├─ 00000409.meta
│  │     │        ├─ 00000410.sst
│  │     │        ├─ 00000411.sst
│  │     │        ├─ 00000412.sst
│  │     │        ├─ 00000413.meta
│  │     │        ├─ 00000414.meta
│  │     │        ├─ 00000415.meta
│  │     │        ├─ CURRENT
│  │     │        └─ LOG
│  │     ├─ fallback-build-manifest.json
│  │     ├─ logs
│  │     │  └─ next-development.log
│  │     ├─ package.json
│  │     ├─ prerender-manifest.json
│  │     ├─ routes-manifest.json
│  │     ├─ server
│  │     │  ├─ app
│  │     │  │  ├─ page
│  │     │  │  │  ├─ app-paths-manifest.json
│  │     │  │  │  ├─ build-manifest.json
│  │     │  │  │  ├─ next-font-manifest.json
│  │     │  │  │  ├─ react-loadable-manifest.json
│  │     │  │  │  └─ server-reference-manifest.json
│  │     │  │  ├─ page.js
│  │     │  │  ├─ page.js.map
│  │     │  │  └─ page_client-reference-manifest.js
│  │     │  ├─ app-paths-manifest.json
│  │     │  ├─ chunks
│  │     │  │  └─ ssr
│  │     │  │     ├─ 9e883_5deccbdc._.js
│  │     │  │     ├─ 9e883_5deccbdc._.js.map
│  │     │  │     ├─ 9e883_next_dist_568f344c._.js
│  │     │  │     ├─ 9e883_next_dist_568f344c._.js.map
│  │     │  │     ├─ 9e883_next_dist_c587e5ed._.js
│  │     │  │     ├─ 9e883_next_dist_c587e5ed._.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_34a976ba._.js
│  │     │  │     ├─ 9e883_next_dist_client_components_34a976ba._.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_forbidden_520cb951.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_forbidden_520cb951.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_global-error_c00881b3.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_global-error_c00881b3.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_unauthorized_62f331ea.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_unauthorized_62f331ea.js.map
│  │     │  │     ├─ frontend_77954a87._.js
│  │     │  │     ├─ frontend_77954a87._.js.map
│  │     │  │     ├─ frontend_src_app_b2335e1a._.js
│  │     │  │     ├─ frontend_src_app_b2335e1a._.js.map
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_dbbe3cd3.js
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_dbbe3cd3.js.map
│  │     │  │     ├─ [externals]_next_dist_c80f7c8f._.js
│  │     │  │     ├─ [externals]_next_dist_c80f7c8f._.js.map
│  │     │  │     ├─ [externals]__e8a2741f._.js
│  │     │  │     ├─ [externals]__e8a2741f._.js.map
│  │     │  │     ├─ [root-of-the-server]__a43d79ef._.js
│  │     │  │     ├─ [root-of-the-server]__a43d79ef._.js.map
│  │     │  │     ├─ [root-of-the-server]__ca5e358b._.js
│  │     │  │     ├─ [root-of-the-server]__ca5e358b._.js.map
│  │     │  │     ├─ [root-of-the-server]__e1699a90._.js
│  │     │  │     ├─ [root-of-the-server]__e1699a90._.js.map
│  │     │  │     ├─ [root-of-the-server]__fbc3344c._.js
│  │     │  │     ├─ [root-of-the-server]__fbc3344c._.js.map
│  │     │  │     ├─ [turbopack]_runtime.js
│  │     │  │     └─ [turbopack]_runtime.js.map
│  │     │  ├─ interception-route-rewrite-manifest.js
│  │     │  ├─ middleware-build-manifest.js
│  │     │  ├─ middleware-manifest.json
│  │     │  ├─ next-font-manifest.js
│  │     │  ├─ next-font-manifest.json
│  │     │  ├─ pages-manifest.json
│  │     │  ├─ server-reference-manifest.js
│  │     │  └─ server-reference-manifest.json
│  │     ├─ static
│  │     │  ├─ chunks
│  │     │  │  ├─ 9e883_@swc_helpers_cjs_c26b7a0e._.js
│  │     │  │  ├─ 9e883_@swc_helpers_cjs_c26b7a0e._.js.map
│  │     │  │  ├─ 9e883_next_dist_72742c92._.js
│  │     │  │  ├─ 9e883_next_dist_72742c92._.js.map
│  │     │  │  ├─ 9e883_next_dist_build_polyfills_polyfill-nomodule.js
│  │     │  │  ├─ 9e883_next_dist_build_polyfills_polyfill-nomodule.js.map
│  │     │  │  ├─ 9e883_next_dist_client_21c89b8d._.js
│  │     │  │  ├─ 9e883_next_dist_client_21c89b8d._.js.map
│  │     │  │  ├─ 9e883_next_dist_client_3dfe3bee._.js
│  │     │  │  ├─ 9e883_next_dist_client_3dfe3bee._.js.map
│  │     │  │  ├─ 9e883_next_dist_client_components_builtin_global-error_25e16fbd.js
│  │     │  │  ├─ 9e883_next_dist_compiled_8f5ebc08._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_8f5ebc08._.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_next-devtools_index_6915c2bc.js
│  │     │  │  ├─ 9e883_next_dist_compiled_next-devtools_index_6915c2bc.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_react-dom_33d456f8._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_react-dom_33d456f8._.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_react-server-dom-turbopack_6723cebf._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_react-server-dom-turbopack_6723cebf._.js.map
│  │     │  │  ├─ 9e883_next_dist_e24ad472._.js
│  │     │  │  ├─ 9e883_next_dist_e24ad472._.js.map
│  │     │  │  ├─ frontend_66384c3f._.js.map
│  │     │  │  ├─ frontend_a0ff3932._.js
│  │     │  │  ├─ frontend_d7d55ff2._.js
│  │     │  │  ├─ frontend_d7d55ff2._.js.map
│  │     │  │  ├─ frontend_src_app_favicon_ico_mjs_dbd6f8a8._.js
│  │     │  │  ├─ frontend_src_app_globals_css_bad6b30c._.single.css
│  │     │  │  ├─ frontend_src_app_globals_css_bad6b30c._.single.css.map
│  │     │  │  ├─ frontend_src_app_layout_tsx_25e16fbd._.js
│  │     │  │  ├─ frontend_src_app_page_tsx_c864ef87._.js
│  │     │  │  ├─ turbopack-frontend_66384c3f._.js
│  │     │  │  ├─ [next]_internal_font_google_inter_5972bc34_module_css_bad6b30c._.single.css
│  │     │  │  ├─ [next]_internal_font_google_inter_5972bc34_module_css_bad6b30c._.single.css.map
│  │     │  │  ├─ [root-of-the-server]__ec717b67._.css
│  │     │  │  ├─ [root-of-the-server]__ec717b67._.css.map
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_3e6423ca._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js.map
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d169e285._.js
│  │     │  │  └─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d169e285._.js.map
│  │     │  ├─ development
│  │     │  │  ├─ _buildManifest.js
│  │     │  │  ├─ _clientMiddlewareManifest.json
│  │     │  │  └─ _ssgManifest.js
│  │     │  └─ media
│  │     │     ├─ 1bffadaabf893a1e-s.7cd81963.woff2
│  │     │     ├─ 2bbe8d2671613f1f-s.76dcb0b2.woff2
│  │     │     ├─ 2c55a0e60120577a-s.2a48534a.woff2
│  │     │     ├─ 5476f68d60460930-s.c995e352.woff2
│  │     │     ├─ 83afe278b6a6bb3c-s.p.3a6ba036.woff2
│  │     │     ├─ 9c72aa0f40e4eef8-s.18a48cbc.woff2
│  │     │     ├─ ad66f9afd8947f86-s.7a40eb73.woff2
│  │     │     └─ favicon.0b3bf435.ico
│  │     ├─ trace
│  │     └─ types
│  │        ├─ cache-life.d.ts
│  │        ├─ routes.d.ts
│  │        └─ validator.ts
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ components
│  │     └─ TradeChart.tsx
│  └─ tsconfig.json
├─ package-lock.json
├─ package.json
├─ temp_upload.csv
└─ venv
   ├─ Include
   ├─ Lib
   │  └─ site-packages
   │     ├─ annotated_doc
   │     │  ├─ main.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ main.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ annotated_doc-0.0.4.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ annotated_types
   │     │  ├─ py.typed
   │     │  ├─ test_cases.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ test_cases.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ annotated_types-0.7.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ anyio
   │     │  ├─ abc
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ from_thread.py
   │     │  ├─ functools.py
   │     │  ├─ lowlevel.py
   │     │  ├─ py.typed
   │     │  ├─ pytest_plugin.py
   │     │  ├─ streams
   │     │  │  ├─ buffered.py
   │     │  │  ├─ file.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ stapled.py
   │     │  │  ├─ text.py
   │     │  │  ├─ tls.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ buffered.cpython-313.pyc
   │     │  │     ├─ file.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ stapled.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ tls.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ to_interpreter.py
   │     │  ├─ to_process.py
   │     │  ├─ to_thread.py
   │     │  ├─ _backends
   │     │  │  ├─ _asyncio.py
   │     │  │  ├─ _trio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio.cpython-313.pyc
   │     │  │     ├─ _trio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _core
   │     │  │  ├─ _asyncio_selector_thread.py
   │     │  │  ├─ _contextmanagers.py
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _fileio.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _signals.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _synchronization.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _tempfile.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ _typedattr.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
   │     │  │     ├─ _contextmanagers.cpython-313.pyc
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _fileio.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _signals.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _synchronization.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _tempfile.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     ├─ _typedattr.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ from_thread.cpython-313.pyc
   │     │     ├─ functools.cpython-313.pyc
   │     │     ├─ lowlevel.cpython-313.pyc
   │     │     ├─ pytest_plugin.cpython-313.pyc
   │     │     ├─ to_interpreter.cpython-313.pyc
   │     │     ├─ to_process.cpython-313.pyc
   │     │     ├─ to_thread.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ anyio-4.12.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ cachetools
   │     │  ├─ func.py
   │     │  ├─ keys.py
   │     │  ├─ _cached.py
   │     │  ├─ _cachedmethod.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ func.cpython-313.pyc
   │     │     ├─ keys.cpython-313.pyc
   │     │     ├─ _cached.cpython-313.pyc
   │     │     ├─ _cachedmethod.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cachetools-6.2.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ certifi
   │     │  ├─ cacert.pem
   │     │  ├─ core.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ certifi-2026.2.25.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ cffi
   │     │  ├─ api.py
   │     │  ├─ backend_ctypes.py
   │     │  ├─ cffi_opcode.py
   │     │  ├─ commontypes.py
   │     │  ├─ cparser.py
   │     │  ├─ error.py
   │     │  ├─ ffiplatform.py
   │     │  ├─ lock.py
   │     │  ├─ model.py
   │     │  ├─ parse_c_type.h
   │     │  ├─ pkgconfig.py
   │     │  ├─ recompiler.py
   │     │  ├─ setuptools_ext.py
   │     │  ├─ vengine_cpy.py
   │     │  ├─ vengine_gen.py
   │     │  ├─ verifier.py
   │     │  ├─ _cffi_errors.h
   │     │  ├─ _cffi_include.h
   │     │  ├─ _embedding.h
   │     │  ├─ _imp_emulation.py
   │     │  ├─ _shimmed_dist_utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ backend_ctypes.cpython-313.pyc
   │     │     ├─ cffi_opcode.cpython-313.pyc
   │     │     ├─ commontypes.cpython-313.pyc
   │     │     ├─ cparser.cpython-313.pyc
   │     │     ├─ error.cpython-313.pyc
   │     │     ├─ ffiplatform.cpython-313.pyc
   │     │     ├─ lock.cpython-313.pyc
   │     │     ├─ model.cpython-313.pyc
   │     │     ├─ pkgconfig.cpython-313.pyc
   │     │     ├─ recompiler.cpython-313.pyc
   │     │     ├─ setuptools_ext.cpython-313.pyc
   │     │     ├─ vengine_cpy.cpython-313.pyc
   │     │     ├─ vengine_gen.cpython-313.pyc
   │     │     ├─ verifier.cpython-313.pyc
   │     │     ├─ _imp_emulation.cpython-313.pyc
   │     │     ├─ _shimmed_dist_utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cffi-2.0.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ charset_normalizer
   │     │  ├─ api.py
   │     │  ├─ cd.py
   │     │  ├─ cli
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ constant.py
   │     │  ├─ legacy.py
   │     │  ├─ md.cp313-win_amd64.pyd
   │     │  ├─ md.py
   │     │  ├─ md__mypyc.cp313-win_amd64.pyd
   │     │  ├─ models.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ cd.cpython-313.pyc
   │     │     ├─ constant.cpython-313.pyc
   │     │     ├─ legacy.cpython-313.pyc
   │     │     ├─ md.cpython-313.pyc
   │     │     ├─ models.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ charset_normalizer-3.4.4.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ click
   │     │  ├─ core.py
   │     │  ├─ decorators.py
   │     │  ├─ exceptions.py
   │     │  ├─ formatting.py
   │     │  ├─ globals.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ shell_completion.py
   │     │  ├─ termui.py
   │     │  ├─ testing.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _termui_impl.py
   │     │  ├─ _textwrap.py
   │     │  ├─ _utils.py
   │     │  ├─ _winconsole.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ decorators.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formatting.cpython-313.pyc
   │     │     ├─ globals.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ shell_completion.cpython-313.pyc
   │     │     ├─ termui.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _termui_impl.cpython-313.pyc
   │     │     ├─ _textwrap.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     ├─ _winconsole.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ click-8.3.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ colorama
   │     │  ├─ ansi.py
   │     │  ├─ ansitowin32.py
   │     │  ├─ initialise.py
   │     │  ├─ tests
   │     │  │  ├─ ansitowin32_test.py
   │     │  │  ├─ ansi_test.py
   │     │  │  ├─ initialise_test.py
   │     │  │  ├─ isatty_test.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ winterm_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ansitowin32_test.cpython-313.pyc
   │     │  │     ├─ ansi_test.cpython-313.pyc
   │     │  │     ├─ initialise_test.cpython-313.pyc
   │     │  │     ├─ isatty_test.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ winterm_test.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ win32.py
   │     │  ├─ winterm.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ansi.cpython-313.pyc
   │     │     ├─ ansitowin32.cpython-313.pyc
   │     │     ├─ initialise.cpython-313.pyc
   │     │     ├─ win32.cpython-313.pyc
   │     │     ├─ winterm.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ colorama-0.4.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ cryptography
   │     │  ├─ exceptions.py
   │     │  ├─ fernet.py
   │     │  ├─ hazmat
   │     │  │  ├─ asn1
   │     │  │  │  ├─ asn1.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ asn1.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ backends
   │     │  │  │  ├─ openssl
   │     │  │  │  │  ├─ backend.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ backend.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ bindings
   │     │  │  │  ├─ openssl
   │     │  │  │  │  ├─ binding.py
   │     │  │  │  │  ├─ _conditional.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ binding.cpython-313.pyc
   │     │  │  │  │     ├─ _conditional.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _rust
   │     │  │  │  │  ├─ asn1.pyi
   │     │  │  │  │  ├─ declarative_asn1.pyi
   │     │  │  │  │  ├─ exceptions.pyi
   │     │  │  │  │  ├─ ocsp.pyi
   │     │  │  │  │  ├─ openssl
   │     │  │  │  │  │  ├─ aead.pyi
   │     │  │  │  │  │  ├─ ciphers.pyi
   │     │  │  │  │  │  ├─ cmac.pyi
   │     │  │  │  │  │  ├─ dh.pyi
   │     │  │  │  │  │  ├─ dsa.pyi
   │     │  │  │  │  │  ├─ ec.pyi
   │     │  │  │  │  │  ├─ ed25519.pyi
   │     │  │  │  │  │  ├─ ed448.pyi
   │     │  │  │  │  │  ├─ hashes.pyi
   │     │  │  │  │  │  ├─ hmac.pyi
   │     │  │  │  │  │  ├─ kdf.pyi
   │     │  │  │  │  │  ├─ keys.pyi
   │     │  │  │  │  │  ├─ poly1305.pyi
   │     │  │  │  │  │  ├─ rsa.pyi
   │     │  │  │  │  │  ├─ x25519.pyi
   │     │  │  │  │  │  ├─ x448.pyi
   │     │  │  │  │  │  └─ __init__.pyi
   │     │  │  │  │  ├─ pkcs12.pyi
   │     │  │  │  │  ├─ pkcs7.pyi
   │     │  │  │  │  ├─ test_support.pyi
   │     │  │  │  │  ├─ x509.pyi
   │     │  │  │  │  ├─ _openssl.pyi
   │     │  │  │  │  └─ __init__.pyi
   │     │  │  │  ├─ _rust.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ decrepit
   │     │  │  │  ├─ ciphers
   │     │  │  │  │  ├─ algorithms.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ algorithms.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ primitives
   │     │  │  │  ├─ asymmetric
   │     │  │  │  │  ├─ dh.py
   │     │  │  │  │  ├─ dsa.py
   │     │  │  │  │  ├─ ec.py
   │     │  │  │  │  ├─ ed25519.py
   │     │  │  │  │  ├─ ed448.py
   │     │  │  │  │  ├─ padding.py
   │     │  │  │  │  ├─ rsa.py
   │     │  │  │  │  ├─ types.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ x25519.py
   │     │  │  │  │  ├─ x448.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ dh.cpython-313.pyc
   │     │  │  │  │     ├─ dsa.cpython-313.pyc
   │     │  │  │  │     ├─ ec.cpython-313.pyc
   │     │  │  │  │     ├─ ed25519.cpython-313.pyc
   │     │  │  │  │     ├─ ed448.cpython-313.pyc
   │     │  │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │  │     ├─ rsa.cpython-313.pyc
   │     │  │  │  │     ├─ types.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     ├─ x25519.cpython-313.pyc
   │     │  │  │  │     ├─ x448.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ ciphers
   │     │  │  │  │  ├─ aead.py
   │     │  │  │  │  ├─ algorithms.py
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ modes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ aead.cpython-313.pyc
   │     │  │  │  │     ├─ algorithms.cpython-313.pyc
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ modes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ cmac.py
   │     │  │  │  ├─ constant_time.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ hmac.py
   │     │  │  │  ├─ kdf
   │     │  │  │  │  ├─ argon2.py
   │     │  │  │  │  ├─ concatkdf.py
   │     │  │  │  │  ├─ hkdf.py
   │     │  │  │  │  ├─ kbkdf.py
   │     │  │  │  │  ├─ pbkdf2.py
   │     │  │  │  │  ├─ scrypt.py
   │     │  │  │  │  ├─ x963kdf.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ argon2.cpython-313.pyc
   │     │  │  │  │     ├─ concatkdf.cpython-313.pyc
   │     │  │  │  │     ├─ hkdf.cpython-313.pyc
   │     │  │  │  │     ├─ kbkdf.cpython-313.pyc
   │     │  │  │  │     ├─ pbkdf2.cpython-313.pyc
   │     │  │  │  │     ├─ scrypt.cpython-313.pyc
   │     │  │  │  │     ├─ x963kdf.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ keywrap.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ poly1305.py
   │     │  │  │  ├─ serialization
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ pkcs12.py
   │     │  │  │  │  ├─ pkcs7.py
   │     │  │  │  │  ├─ ssh.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ pkcs12.cpython-313.pyc
   │     │  │  │  │     ├─ pkcs7.cpython-313.pyc
   │     │  │  │  │     ├─ ssh.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ twofactor
   │     │  │  │  │  ├─ hotp.py
   │     │  │  │  │  ├─ totp.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ hotp.cpython-313.pyc
   │     │  │  │  │     ├─ totp.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _asymmetric.py
   │     │  │  │  ├─ _cipheralgorithm.py
   │     │  │  │  ├─ _serialization.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cmac.cpython-313.pyc
   │     │  │  │     ├─ constant_time.cpython-313.pyc
   │     │  │  │     ├─ hashes.cpython-313.pyc
   │     │  │  │     ├─ hmac.cpython-313.pyc
   │     │  │  │     ├─ keywrap.cpython-313.pyc
   │     │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │     ├─ poly1305.cpython-313.pyc
   │     │  │  │     ├─ _asymmetric.cpython-313.pyc
   │     │  │  │     ├─ _cipheralgorithm.cpython-313.pyc
   │     │  │  │     ├─ _serialization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _oid.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _oid.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ x509
   │     │  │  ├─ base.py
   │     │  │  ├─ certificate_transparency.py
   │     │  │  ├─ extensions.py
   │     │  │  ├─ general_name.py
   │     │  │  ├─ name.py
   │     │  │  ├─ ocsp.py
   │     │  │  ├─ oid.py
   │     │  │  ├─ verification.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ certificate_transparency.cpython-313.pyc
   │     │  │     ├─ extensions.cpython-313.pyc
   │     │  │     ├─ general_name.cpython-313.pyc
   │     │  │     ├─ name.cpython-313.pyc
   │     │  │     ├─ ocsp.cpython-313.pyc
   │     │  │     ├─ oid.cpython-313.pyc
   │     │  │     ├─ verification.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __about__.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fernet.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ __about__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cryptography-46.0.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  ├─ LICENSE.APACHE
   │     │  │  └─ LICENSE.BSD
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ dateutil
   │     │  ├─ easter.py
   │     │  ├─ parser
   │     │  │  ├─ isoparser.py
   │     │  │  ├─ _parser.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ isoparser.cpython-313.pyc
   │     │  │     ├─ _parser.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ relativedelta.py
   │     │  ├─ rrule.py
   │     │  ├─ tz
   │     │  │  ├─ tz.py
   │     │  │  ├─ win.py
   │     │  │  ├─ _common.py
   │     │  │  ├─ _factories.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ tz.cpython-313.pyc
   │     │  │     ├─ win.cpython-313.pyc
   │     │  │     ├─ _common.cpython-313.pyc
   │     │  │     ├─ _factories.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tzwin.py
   │     │  ├─ utils.py
   │     │  ├─ zoneinfo
   │     │  │  ├─ dateutil-zoneinfo.tar.gz
   │     │  │  ├─ rebuild.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ rebuild.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _common.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ easter.cpython-313.pyc
   │     │     ├─ relativedelta.cpython-313.pyc
   │     │     ├─ rrule.cpython-313.pyc
   │     │     ├─ tzwin.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _common.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ deprecation-2.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ deprecation.py
   │     ├─ dotenv
   │     │  ├─ cli.py
   │     │  ├─ ipython.py
   │     │  ├─ main.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ variables.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ ipython.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ variables.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fastapi
   │     │  ├─ .agents
   │     │  │  └─ skills
   │     │  │     └─ fastapi
   │     │  │        ├─ references
   │     │  │        │  ├─ dependencies.md
   │     │  │        │  ├─ other-tools.md
   │     │  │        │  └─ streaming.md
   │     │  │        └─ SKILL.md
   │     │  ├─ applications.py
   │     │  ├─ background.py
   │     │  ├─ cli.py
   │     │  ├─ concurrency.py
   │     │  ├─ datastructures.py
   │     │  ├─ dependencies
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ encoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ exception_handlers.py
   │     │  ├─ logger.py
   │     │  ├─ middleware
   │     │  │  ├─ asyncexitstack.py
   │     │  │  ├─ cors.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncexitstack.cpython-313.pyc
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ openapi
   │     │  │  ├─ constants.py
   │     │  │  ├─ docs.py
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ constants.cpython-313.pyc
   │     │  │     ├─ docs.cpython-313.pyc
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ params.py
   │     │  ├─ param_functions.py
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ security
   │     │  │  ├─ api_key.py
   │     │  │  ├─ base.py
   │     │  │  ├─ http.py
   │     │  │  ├─ oauth2.py
   │     │  │  ├─ open_id_connect_url.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api_key.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ oauth2.cpython-313.pyc
   │     │  │     ├─ open_id_connect_url.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ sse.py
   │     │  ├─ staticfiles.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ websockets.py
   │     │  ├─ _compat
   │     │  │  ├─ shared.py
   │     │  │  ├─ v2.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ shared.cpython-313.pyc
   │     │  │     ├─ v2.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ encoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ exception_handlers.cpython-313.pyc
   │     │     ├─ logger.cpython-313.pyc
   │     │     ├─ params.cpython-313.pyc
   │     │     ├─ param_functions.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ sse.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fastapi-0.135.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ fb303
   │     │  ├─ constants.py
   │     │  ├─ FacebookService.py
   │     │  ├─ ttypes.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ FacebookService.cpython-313.pyc
   │     │     ├─ ttypes.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ fsspec
   │     │  ├─ archive.py
   │     │  ├─ asyn.py
   │     │  ├─ caching.py
   │     │  ├─ callbacks.py
   │     │  ├─ compression.py
   │     │  ├─ config.py
   │     │  ├─ conftest.py
   │     │  ├─ core.py
   │     │  ├─ dircache.py
   │     │  ├─ exceptions.py
   │     │  ├─ fuse.py
   │     │  ├─ generic.py
   │     │  ├─ gui.py
   │     │  ├─ implementations
   │     │  │  ├─ arrow.py
   │     │  │  ├─ asyn_wrapper.py
   │     │  │  ├─ cached.py
   │     │  │  ├─ cache_mapper.py
   │     │  │  ├─ cache_metadata.py
   │     │  │  ├─ chained.py
   │     │  │  ├─ dask.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dbfs.py
   │     │  │  ├─ dirfs.py
   │     │  │  ├─ ftp.py
   │     │  │  ├─ gist.py
   │     │  │  ├─ git.py
   │     │  │  ├─ github.py
   │     │  │  ├─ http.py
   │     │  │  ├─ http_sync.py
   │     │  │  ├─ jupyter.py
   │     │  │  ├─ libarchive.py
   │     │  │  ├─ local.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ reference.py
   │     │  │  ├─ sftp.py
   │     │  │  ├─ smb.py
   │     │  │  ├─ tar.py
   │     │  │  ├─ webhdfs.py
   │     │  │  ├─ zip.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ asyn_wrapper.cpython-313.pyc
   │     │  │     ├─ cached.cpython-313.pyc
   │     │  │     ├─ cache_mapper.cpython-313.pyc
   │     │  │     ├─ cache_metadata.cpython-313.pyc
   │     │  │     ├─ chained.cpython-313.pyc
   │     │  │     ├─ dask.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dbfs.cpython-313.pyc
   │     │  │     ├─ dirfs.cpython-313.pyc
   │     │  │     ├─ ftp.cpython-313.pyc
   │     │  │     ├─ gist.cpython-313.pyc
   │     │  │     ├─ git.cpython-313.pyc
   │     │  │     ├─ github.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ http_sync.cpython-313.pyc
   │     │  │     ├─ jupyter.cpython-313.pyc
   │     │  │     ├─ libarchive.cpython-313.pyc
   │     │  │     ├─ local.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ reference.cpython-313.pyc
   │     │  │     ├─ sftp.cpython-313.pyc
   │     │  │     ├─ smb.cpython-313.pyc
   │     │  │     ├─ tar.cpython-313.pyc
   │     │  │     ├─ webhdfs.cpython-313.pyc
   │     │  │     ├─ zip.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ json.py
   │     │  ├─ mapping.py
   │     │  ├─ parquet.py
   │     │  ├─ registry.py
   │     │  ├─ spec.py
   │     │  ├─ tests
   │     │  │  └─ abstract
   │     │  │     ├─ common.py
   │     │  │     ├─ copy.py
   │     │  │     ├─ get.py
   │     │  │     ├─ mv.py
   │     │  │     ├─ open.py
   │     │  │     ├─ pipe.py
   │     │  │     ├─ put.py
   │     │  │     ├─ __init__.py
   │     │  │     └─ __pycache__
   │     │  │        ├─ common.cpython-313.pyc
   │     │  │        ├─ copy.cpython-313.pyc
   │     │  │        ├─ get.cpython-313.pyc
   │     │  │        ├─ mv.cpython-313.pyc
   │     │  │        ├─ open.cpython-313.pyc
   │     │  │        ├─ pipe.cpython-313.pyc
   │     │  │        ├─ put.cpython-313.pyc
   │     │  │        └─ __init__.cpython-313.pyc
   │     │  ├─ transaction.py
   │     │  ├─ utils.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ archive.cpython-313.pyc
   │     │     ├─ asyn.cpython-313.pyc
   │     │     ├─ caching.cpython-313.pyc
   │     │     ├─ callbacks.cpython-313.pyc
   │     │     ├─ compression.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ dircache.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fuse.cpython-313.pyc
   │     │     ├─ generic.cpython-313.pyc
   │     │     ├─ gui.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ mapping.cpython-313.pyc
   │     │     ├─ parquet.cpython-313.pyc
   │     │     ├─ registry.cpython-313.pyc
   │     │     ├─ spec.cpython-313.pyc
   │     │     ├─ transaction.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ fsspec-2026.2.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ h11
   │     │  ├─ py.typed
   │     │  ├─ _abnf.py
   │     │  ├─ _connection.py
   │     │  ├─ _events.py
   │     │  ├─ _headers.py
   │     │  ├─ _readers.py
   │     │  ├─ _receivebuffer.py
   │     │  ├─ _state.py
   │     │  ├─ _util.py
   │     │  ├─ _version.py
   │     │  ├─ _writers.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _abnf.cpython-313.pyc
   │     │     ├─ _connection.cpython-313.pyc
   │     │     ├─ _events.cpython-313.pyc
   │     │     ├─ _headers.cpython-313.pyc
   │     │     ├─ _readers.cpython-313.pyc
   │     │     ├─ _receivebuffer.cpython-313.pyc
   │     │     ├─ _state.cpython-313.pyc
   │     │     ├─ _util.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _writers.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ h11-0.16.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ h2
   │     │  ├─ config.py
   │     │  ├─ connection.py
   │     │  ├─ errors.py
   │     │  ├─ events.py
   │     │  ├─ exceptions.py
   │     │  ├─ frame_buffer.py
   │     │  ├─ py.typed
   │     │  ├─ settings.py
   │     │  ├─ stream.py
   │     │  ├─ utilities.py
   │     │  ├─ windows.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ events.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ frame_buffer.cpython-313.pyc
   │     │     ├─ settings.cpython-313.pyc
   │     │     ├─ stream.cpython-313.pyc
   │     │     ├─ utilities.cpython-313.pyc
   │     │     ├─ windows.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ h2-4.3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ hive_metastore
   │     │  ├─ constants.py
   │     │  ├─ ThriftHiveMetastore.py
   │     │  ├─ ttypes.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ ThriftHiveMetastore.cpython-313.pyc
   │     │     ├─ ttypes.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hpack
   │     │  ├─ exceptions.py
   │     │  ├─ hpack.py
   │     │  ├─ huffman.py
   │     │  ├─ huffman_constants.py
   │     │  ├─ huffman_table.py
   │     │  ├─ py.typed
   │     │  ├─ struct.py
   │     │  ├─ table.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ hpack.cpython-313.pyc
   │     │     ├─ huffman.cpython-313.pyc
   │     │     ├─ huffman_constants.cpython-313.pyc
   │     │     ├─ huffman_table.cpython-313.pyc
   │     │     ├─ struct.cpython-313.pyc
   │     │     ├─ table.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hpack-4.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ httpcore
   │     │  ├─ py.typed
   │     │  ├─ _api.py
   │     │  ├─ _async
   │     │  │  ├─ connection.py
   │     │  │  ├─ connection_pool.py
   │     │  │  ├─ http11.py
   │     │  │  ├─ http2.py
   │     │  │  ├─ http_proxy.py
   │     │  │  ├─ interfaces.py
   │     │  │  ├─ socks_proxy.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ connection_pool.cpython-313.pyc
   │     │  │     ├─ http11.cpython-313.pyc
   │     │  │     ├─ http2.cpython-313.pyc
   │     │  │     ├─ http_proxy.cpython-313.pyc
   │     │  │     ├─ interfaces.cpython-313.pyc
   │     │  │     ├─ socks_proxy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _backends
   │     │  │  ├─ anyio.py
   │     │  │  ├─ auto.py
   │     │  │  ├─ base.py
   │     │  │  ├─ mock.py
   │     │  │  ├─ sync.py
   │     │  │  ├─ trio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anyio.cpython-313.pyc
   │     │  │     ├─ auto.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ mock.cpython-313.pyc
   │     │  │     ├─ sync.cpython-313.pyc
   │     │  │     ├─ trio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _exceptions.py
   │     │  ├─ _models.py
   │     │  ├─ _ssl.py
   │     │  ├─ _sync
   │     │  │  ├─ connection.py
   │     │  │  ├─ connection_pool.py
   │     │  │  ├─ http11.py
   │     │  │  ├─ http2.py
   │     │  │  ├─ http_proxy.py
   │     │  │  ├─ interfaces.py
   │     │  │  ├─ socks_proxy.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ connection_pool.cpython-313.pyc
   │     │  │     ├─ http11.cpython-313.pyc
   │     │  │     ├─ http2.cpython-313.pyc
   │     │  │     ├─ http_proxy.cpython-313.pyc
   │     │  │     ├─ interfaces.cpython-313.pyc
   │     │  │     ├─ socks_proxy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _synchronization.py
   │     │  ├─ _trace.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _api.cpython-313.pyc
   │     │     ├─ _exceptions.cpython-313.pyc
   │     │     ├─ _models.cpython-313.pyc
   │     │     ├─ _ssl.cpython-313.pyc
   │     │     ├─ _synchronization.cpython-313.pyc
   │     │     ├─ _trace.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ httpcore-1.0.9.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ httpx
   │     │  ├─ py.typed
   │     │  ├─ _api.py
   │     │  ├─ _auth.py
   │     │  ├─ _client.py
   │     │  ├─ _config.py
   │     │  ├─ _content.py
   │     │  ├─ _decoders.py
   │     │  ├─ _exceptions.py
   │     │  ├─ _main.py
   │     │  ├─ _models.py
   │     │  ├─ _multipart.py
   │     │  ├─ _status_codes.py
   │     │  ├─ _transports
   │     │  │  ├─ asgi.py
   │     │  │  ├─ base.py
   │     │  │  ├─ default.py
   │     │  │  ├─ mock.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asgi.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ mock.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _types.py
   │     │  ├─ _urlparse.py
   │     │  ├─ _urls.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ _api.cpython-313.pyc
   │     │  │  ├─ _auth.cpython-313.pyc
   │     │  │  ├─ _client.cpython-313.pyc
   │     │  │  ├─ _config.cpython-313.pyc
   │     │  │  ├─ _content.cpython-313.pyc
   │     │  │  ├─ _decoders.cpython-313.pyc
   │     │  │  ├─ _exceptions.cpython-313.pyc
   │     │  │  ├─ _main.cpython-313.pyc
   │     │  │  ├─ _models.cpython-313.pyc
   │     │  │  ├─ _multipart.cpython-313.pyc
   │     │  │  ├─ _status_codes.cpython-313.pyc
   │     │  │  ├─ _types.cpython-313.pyc
   │     │  │  ├─ _urlparse.cpython-313.pyc
   │     │  │  ├─ _urls.cpython-313.pyc
   │     │  │  ├─ _utils.cpython-313.pyc
   │     │  │  ├─ __init__.cpython-313.pyc
   │     │  │  └─ __version__.cpython-313.pyc
   │     │  └─ __version__.py
   │     ├─ httpx-0.28.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ hyperframe
   │     │  ├─ exceptions.py
   │     │  ├─ flags.py
   │     │  ├─ frame.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ flags.cpython-313.pyc
   │     │     ├─ frame.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hyperframe-6.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ idna
   │     │  ├─ codec.py
   │     │  ├─ compat.py
   │     │  ├─ core.py
   │     │  ├─ idnadata.py
   │     │  ├─ intranges.py
   │     │  ├─ package_data.py
   │     │  ├─ py.typed
   │     │  ├─ uts46data.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ codec.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ idnadata.cpython-313.pyc
   │     │     ├─ intranges.cpython-313.pyc
   │     │     ├─ package_data.cpython-313.pyc
   │     │     ├─ uts46data.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ idna-3.11.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ jwt
   │     │  ├─ algorithms.py
   │     │  ├─ api_jwk.py
   │     │  ├─ api_jws.py
   │     │  ├─ api_jwt.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ jwks_client.py
   │     │  ├─ jwk_set_cache.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ warnings.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ algorithms.cpython-313.pyc
   │     │     ├─ api_jwk.cpython-313.pyc
   │     │     ├─ api_jws.cpython-313.pyc
   │     │     ├─ api_jwt.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ help.cpython-313.pyc
   │     │     ├─ jwks_client.cpython-313.pyc
   │     │     ├─ jwk_set_cache.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ markdown_it
   │     │  ├─ cli
   │     │  │  ├─ parse.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ common
   │     │  │  ├─ entities.py
   │     │  │  ├─ html_blocks.py
   │     │  │  ├─ html_re.py
   │     │  │  ├─ normalize_url.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ entities.cpython-313.pyc
   │     │  │     ├─ html_blocks.cpython-313.pyc
   │     │  │     ├─ html_re.cpython-313.pyc
   │     │  │     ├─ normalize_url.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ helpers
   │     │  │  ├─ parse_link_destination.py
   │     │  │  ├─ parse_link_label.py
   │     │  │  ├─ parse_link_title.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ parse_link_destination.cpython-313.pyc
   │     │  │     ├─ parse_link_label.cpython-313.pyc
   │     │  │     ├─ parse_link_title.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ main.py
   │     │  ├─ parser_block.py
   │     │  ├─ parser_core.py
   │     │  ├─ parser_inline.py
   │     │  ├─ port.yaml
   │     │  ├─ presets
   │     │  │  ├─ commonmark.py
   │     │  │  ├─ default.py
   │     │  │  ├─ zero.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ commonmark.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ zero.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ renderer.py
   │     │  ├─ ruler.py
   │     │  ├─ rules_block
   │     │  │  ├─ blockquote.py
   │     │  │  ├─ code.py
   │     │  │  ├─ fence.py
   │     │  │  ├─ heading.py
   │     │  │  ├─ hr.py
   │     │  │  ├─ html_block.py
   │     │  │  ├─ lheading.py
   │     │  │  ├─ list.py
   │     │  │  ├─ paragraph.py
   │     │  │  ├─ reference.py
   │     │  │  ├─ state_block.py
   │     │  │  ├─ table.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ blockquote.cpython-313.pyc
   │     │  │     ├─ code.cpython-313.pyc
   │     │  │     ├─ fence.cpython-313.pyc
   │     │  │     ├─ heading.cpython-313.pyc
   │     │  │     ├─ hr.cpython-313.pyc
   │     │  │     ├─ html_block.cpython-313.pyc
   │     │  │     ├─ lheading.cpython-313.pyc
   │     │  │     ├─ list.cpython-313.pyc
   │     │  │     ├─ paragraph.cpython-313.pyc
   │     │  │     ├─ reference.cpython-313.pyc
   │     │  │     ├─ state_block.cpython-313.pyc
   │     │  │     ├─ table.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rules_core
   │     │  │  ├─ block.py
   │     │  │  ├─ inline.py
   │     │  │  ├─ linkify.py
   │     │  │  ├─ normalize.py
   │     │  │  ├─ replacements.py
   │     │  │  ├─ smartquotes.py
   │     │  │  ├─ state_core.py
   │     │  │  ├─ text_join.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ block.cpython-313.pyc
   │     │  │     ├─ inline.cpython-313.pyc
   │     │  │     ├─ linkify.cpython-313.pyc
   │     │  │     ├─ normalize.cpython-313.pyc
   │     │  │     ├─ replacements.cpython-313.pyc
   │     │  │     ├─ smartquotes.cpython-313.pyc
   │     │  │     ├─ state_core.cpython-313.pyc
   │     │  │     ├─ text_join.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rules_inline
   │     │  │  ├─ autolink.py
   │     │  │  ├─ backticks.py
   │     │  │  ├─ balance_pairs.py
   │     │  │  ├─ emphasis.py
   │     │  │  ├─ entity.py
   │     │  │  ├─ escape.py
   │     │  │  ├─ fragments_join.py
   │     │  │  ├─ html_inline.py
   │     │  │  ├─ image.py
   │     │  │  ├─ link.py
   │     │  │  ├─ linkify.py
   │     │  │  ├─ newline.py
   │     │  │  ├─ state_inline.py
   │     │  │  ├─ strikethrough.py
   │     │  │  ├─ text.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ autolink.cpython-313.pyc
   │     │  │     ├─ backticks.cpython-313.pyc
   │     │  │     ├─ balance_pairs.cpython-313.pyc
   │     │  │     ├─ emphasis.cpython-313.pyc
   │     │  │     ├─ entity.cpython-313.pyc
   │     │  │     ├─ escape.cpython-313.pyc
   │     │  │     ├─ fragments_join.cpython-313.pyc
   │     │  │     ├─ html_inline.cpython-313.pyc
   │     │  │     ├─ image.cpython-313.pyc
   │     │  │     ├─ link.cpython-313.pyc
   │     │  │     ├─ linkify.cpython-313.pyc
   │     │  │     ├─ newline.cpython-313.pyc
   │     │  │     ├─ state_inline.cpython-313.pyc
   │     │  │     ├─ strikethrough.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ token.py
   │     │  ├─ tree.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _punycode.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ parser_block.cpython-313.pyc
   │     │     ├─ parser_core.cpython-313.pyc
   │     │     ├─ parser_inline.cpython-313.pyc
   │     │     ├─ renderer.cpython-313.pyc
   │     │     ├─ ruler.cpython-313.pyc
   │     │     ├─ token.cpython-313.pyc
   │     │     ├─ tree.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _punycode.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ markdown_it_py-4.0.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ LICENSE.markdown-it
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ mdurl
   │     │  ├─ py.typed
   │     │  ├─ _decode.py
   │     │  ├─ _encode.py
   │     │  ├─ _format.py
   │     │  ├─ _parse.py
   │     │  ├─ _url.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _decode.cpython-313.pyc
   │     │     ├─ _encode.cpython-313.pyc
   │     │     ├─ _format.cpython-313.pyc
   │     │     ├─ _parse.cpython-313.pyc
   │     │     ├─ _url.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ mdurl-0.1.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ mmh3
   │     │  ├─ hashlib.h
   │     │  ├─ mmh3module.c
   │     │  ├─ murmurhash3.c
   │     │  ├─ murmurhash3.h
   │     │  ├─ py.typed
   │     │  └─ __init__.pyi
   │     ├─ mmh3-5.2.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ mmh3.cp313-win_amd64.pyd
   │     ├─ multidict
   │     │  ├─ py.typed
   │     │  ├─ _abc.py
   │     │  ├─ _compat.py
   │     │  ├─ _multidict.cp313-win_amd64.pyd
   │     │  ├─ _multidict_py.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _abc.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _multidict_py.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ multidict-6.7.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ multipart
   │     │  ├─ decoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ multipart.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ decoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ multipart.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ numpy
   │     │  ├─ char
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ function_base.py
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ umath.py
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _multiarray_umath.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _multiarray_umath.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ctypeslib
   │     │  │  ├─ _ctypeslib.py
   │     │  │  ├─ _ctypeslib.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _ctypeslib.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ doc
   │     │  │  ├─ ufuncs.py
   │     │  │  └─ __pycache__
   │     │  │     └─ ufuncs.cpython-313.pyc
   │     │  ├─ dtypes.py
   │     │  ├─ dtypes.pyi
   │     │  ├─ exceptions.py
   │     │  ├─ exceptions.pyi
   │     │  ├─ f2py
   │     │  │  ├─ auxfuncs.py
   │     │  │  ├─ auxfuncs.pyi
   │     │  │  ├─ capi_maps.py
   │     │  │  ├─ capi_maps.pyi
   │     │  │  ├─ cb_rules.py
   │     │  │  ├─ cb_rules.pyi
   │     │  │  ├─ cfuncs.py
   │     │  │  ├─ cfuncs.pyi
   │     │  │  ├─ common_rules.py
   │     │  │  ├─ common_rules.pyi
   │     │  │  ├─ crackfortran.py
   │     │  │  ├─ crackfortran.pyi
   │     │  │  ├─ diagnose.py
   │     │  │  ├─ diagnose.pyi
   │     │  │  ├─ f2py2e.py
   │     │  │  ├─ f2py2e.pyi
   │     │  │  ├─ f90mod_rules.py
   │     │  │  ├─ f90mod_rules.pyi
   │     │  │  ├─ func2subr.py
   │     │  │  ├─ func2subr.pyi
   │     │  │  ├─ rules.py
   │     │  │  ├─ rules.pyi
   │     │  │  ├─ setup.cfg
   │     │  │  ├─ src
   │     │  │  │  ├─ fortranobject.c
   │     │  │  │  └─ fortranobject.h
   │     │  │  ├─ symbolic.py
   │     │  │  ├─ symbolic.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ src
   │     │  │  │  │  ├─ abstract_interface
   │     │  │  │  │  │  ├─ foo.f90
   │     │  │  │  │  │  └─ gh18403_mod.f90
   │     │  │  │  │  ├─ array_from_pyobj
   │     │  │  │  │  │  └─ wrapmodule.c
   │     │  │  │  │  ├─ assumed_shape
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  ├─ foo_free.f90
   │     │  │  │  │  │  ├─ foo_mod.f90
   │     │  │  │  │  │  ├─ foo_use.f90
   │     │  │  │  │  │  └─ precision.f90
   │     │  │  │  │  ├─ block_docstring
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ callback
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ gh17797.f90
   │     │  │  │  │  │  ├─ gh18335.f90
   │     │  │  │  │  │  ├─ gh25211.f
   │     │  │  │  │  │  ├─ gh25211.pyf
   │     │  │  │  │  │  └─ gh26681.f90
   │     │  │  │  │  ├─ cli
   │     │  │  │  │  │  ├─ gh_22819.pyf
   │     │  │  │  │  │  ├─ hi77.f
   │     │  │  │  │  │  └─ hiworld.f90
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ block.f
   │     │  │  │  │  │  └─ gh19161.f90
   │     │  │  │  │  ├─ crackfortran
   │     │  │  │  │  │  ├─ accesstype.f90
   │     │  │  │  │  │  ├─ common_with_division.f
   │     │  │  │  │  │  ├─ data_common.f
   │     │  │  │  │  │  ├─ data_multiplier.f
   │     │  │  │  │  │  ├─ data_stmts.f90
   │     │  │  │  │  │  ├─ data_with_comments.f
   │     │  │  │  │  │  ├─ foo_deps.f90
   │     │  │  │  │  │  ├─ gh15035.f
   │     │  │  │  │  │  ├─ gh17859.f
   │     │  │  │  │  │  ├─ gh22648.pyf
   │     │  │  │  │  │  ├─ gh23533.f
   │     │  │  │  │  │  ├─ gh23598.f90
   │     │  │  │  │  │  ├─ gh23598Warn.f90
   │     │  │  │  │  │  ├─ gh23879.f90
   │     │  │  │  │  │  ├─ gh27697.f90
   │     │  │  │  │  │  ├─ gh2848.f90
   │     │  │  │  │  │  ├─ operators.f90
   │     │  │  │  │  │  ├─ privatemod.f90
   │     │  │  │  │  │  ├─ publicmod.f90
   │     │  │  │  │  │  ├─ pubprivmod.f90
   │     │  │  │  │  │  └─ unicode_comment.f90
   │     │  │  │  │  ├─ f2cmap
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  └─ isoFortranEnvMap.f90
   │     │  │  │  │  ├─ isocintrin
   │     │  │  │  │  │  └─ isoCtests.f90
   │     │  │  │  │  ├─ kind
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ mixed
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ foo_fixed.f90
   │     │  │  │  │  │  └─ foo_free.f90
   │     │  │  │  │  ├─ modules
   │     │  │  │  │  │  ├─ gh25337
   │     │  │  │  │  │  │  ├─ data.f90
   │     │  │  │  │  │  │  └─ use_data.f90
   │     │  │  │  │  │  ├─ gh26920
   │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
   │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
   │     │  │  │  │  │  ├─ module_data_docstring.f90
   │     │  │  │  │  │  └─ use_modules.f90
   │     │  │  │  │  ├─ negative_bounds
   │     │  │  │  │  │  └─ issue_20853.f90
   │     │  │  │  │  ├─ parameter
   │     │  │  │  │  │  ├─ constant_array.f90
   │     │  │  │  │  │  ├─ constant_both.f90
   │     │  │  │  │  │  ├─ constant_compound.f90
   │     │  │  │  │  │  ├─ constant_integer.f90
   │     │  │  │  │  │  ├─ constant_non_compound.f90
   │     │  │  │  │  │  └─ constant_real.f90
   │     │  │  │  │  ├─ quoted_character
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ regression
   │     │  │  │  │  │  ├─ AB.inc
   │     │  │  │  │  │  ├─ assignOnlyModule.f90
   │     │  │  │  │  │  ├─ datonly.f90
   │     │  │  │  │  │  ├─ f77comments.f
   │     │  │  │  │  │  ├─ f77fixedform.f95
   │     │  │  │  │  │  ├─ f90continuation.f90
   │     │  │  │  │  │  ├─ incfile.f90
   │     │  │  │  │  │  ├─ inout.f90
   │     │  │  │  │  │  ├─ lower_f2py_fortran.f90
   │     │  │  │  │  │  └─ mod_derived_types.f90
   │     │  │  │  │  ├─ return_character
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_complex
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_integer
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_logical
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_real
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ routines
   │     │  │  │  │  │  ├─ funcfortranname.f
   │     │  │  │  │  │  ├─ funcfortranname.pyf
   │     │  │  │  │  │  ├─ subrout.f
   │     │  │  │  │  │  └─ subrout.pyf
   │     │  │  │  │  ├─ size
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ string
   │     │  │  │  │  │  ├─ char.f90
   │     │  │  │  │  │  ├─ fixed_string.f90
   │     │  │  │  │  │  ├─ gh24008.f
   │     │  │  │  │  │  ├─ gh24662.f90
   │     │  │  │  │  │  ├─ gh25286.f90
   │     │  │  │  │  │  ├─ gh25286.pyf
   │     │  │  │  │  │  ├─ gh25286_bc.pyf
   │     │  │  │  │  │  ├─ scalar_string.f90
   │     │  │  │  │  │  └─ string.f
   │     │  │  │  │  └─ value_attrspec
   │     │  │  │  │     └─ gh21665.f90
   │     │  │  │  ├─ test_abstract_interface.py
   │     │  │  │  ├─ test_array_from_pyobj.py
   │     │  │  │  ├─ test_assumed_shape.py
   │     │  │  │  ├─ test_block_docstring.py
   │     │  │  │  ├─ test_callback.py
   │     │  │  │  ├─ test_character.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_crackfortran.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_docs.py
   │     │  │  │  ├─ test_f2cmap.py
   │     │  │  │  ├─ test_f2py2e.py
   │     │  │  │  ├─ test_isoc.py
   │     │  │  │  ├─ test_kind.py
   │     │  │  │  ├─ test_mixed.py
   │     │  │  │  ├─ test_modules.py
   │     │  │  │  ├─ test_parameter.py
   │     │  │  │  ├─ test_pyf_src.py
   │     │  │  │  ├─ test_quoted_character.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_return_character.py
   │     │  │  │  ├─ test_return_complex.py
   │     │  │  │  ├─ test_return_integer.py
   │     │  │  │  ├─ test_return_logical.py
   │     │  │  │  ├─ test_return_real.py
   │     │  │  │  ├─ test_routines.py
   │     │  │  │  ├─ test_semicolon_split.py
   │     │  │  │  ├─ test_size.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ test_symbolic.py
   │     │  │  │  ├─ test_value_attrspec.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abstract_interface.cpython-313.pyc
   │     │  │  │     ├─ test_array_from_pyobj.cpython-313.pyc
   │     │  │  │     ├─ test_assumed_shape.cpython-313.pyc
   │     │  │  │     ├─ test_block_docstring.cpython-313.pyc
   │     │  │  │     ├─ test_callback.cpython-313.pyc
   │     │  │  │     ├─ test_character.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_crackfortran.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_docs.cpython-313.pyc
   │     │  │  │     ├─ test_f2cmap.cpython-313.pyc
   │     │  │  │     ├─ test_f2py2e.cpython-313.pyc
   │     │  │  │     ├─ test_isoc.cpython-313.pyc
   │     │  │  │     ├─ test_kind.cpython-313.pyc
   │     │  │  │     ├─ test_mixed.cpython-313.pyc
   │     │  │  │     ├─ test_modules.cpython-313.pyc
   │     │  │  │     ├─ test_parameter.cpython-313.pyc
   │     │  │  │     ├─ test_pyf_src.cpython-313.pyc
   │     │  │  │     ├─ test_quoted_character.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_return_character.cpython-313.pyc
   │     │  │  │     ├─ test_return_complex.cpython-313.pyc
   │     │  │  │     ├─ test_return_integer.cpython-313.pyc
   │     │  │  │     ├─ test_return_logical.cpython-313.pyc
   │     │  │  │     ├─ test_return_real.cpython-313.pyc
   │     │  │  │     ├─ test_routines.cpython-313.pyc
   │     │  │  │     ├─ test_semicolon_split.cpython-313.pyc
   │     │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     ├─ test_symbolic.cpython-313.pyc
   │     │  │  │     ├─ test_value_attrspec.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ use_rules.py
   │     │  │  ├─ use_rules.pyi
   │     │  │  ├─ _backends
   │     │  │  │  ├─ meson.build.template
   │     │  │  │  ├─ _backend.py
   │     │  │  │  ├─ _backend.pyi
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _distutils.pyi
   │     │  │  │  ├─ _meson.py
   │     │  │  │  ├─ _meson.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __init__.pyi
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _backend.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _meson.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _isocbind.py
   │     │  │  ├─ _isocbind.pyi
   │     │  │  ├─ _src_pyf.py
   │     │  │  ├─ _src_pyf.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  ├─ __main__.py
   │     │  │  ├─ __pycache__
   │     │  │  │  ├─ auxfuncs.cpython-313.pyc
   │     │  │  │  ├─ capi_maps.cpython-313.pyc
   │     │  │  │  ├─ cb_rules.cpython-313.pyc
   │     │  │  │  ├─ cfuncs.cpython-313.pyc
   │     │  │  │  ├─ common_rules.cpython-313.pyc
   │     │  │  │  ├─ crackfortran.cpython-313.pyc
   │     │  │  │  ├─ diagnose.cpython-313.pyc
   │     │  │  │  ├─ f2py2e.cpython-313.pyc
   │     │  │  │  ├─ f90mod_rules.cpython-313.pyc
   │     │  │  │  ├─ func2subr.cpython-313.pyc
   │     │  │  │  ├─ rules.cpython-313.pyc
   │     │  │  │  ├─ symbolic.cpython-313.pyc
   │     │  │  │  ├─ use_rules.cpython-313.pyc
   │     │  │  │  ├─ _isocbind.cpython-313.pyc
   │     │  │  │  ├─ _src_pyf.cpython-313.pyc
   │     │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __main__.cpython-313.pyc
   │     │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  ├─ __version__.py
   │     │  │  └─ __version__.pyi
   │     │  ├─ fft
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_helper.py
   │     │  │  │  ├─ test_pocketfft.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_helper.cpython-313.pyc
   │     │  │  │     ├─ test_pocketfft.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _helper.py
   │     │  │  ├─ _helper.pyi
   │     │  │  ├─ _pocketfft.py
   │     │  │  ├─ _pocketfft.pyi
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.lib
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _helper.cpython-313.pyc
   │     │  │     ├─ _pocketfft.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ lib
   │     │  │  ├─ array_utils.py
   │     │  │  ├─ array_utils.pyi
   │     │  │  ├─ format.py
   │     │  │  ├─ format.pyi
   │     │  │  ├─ introspect.py
   │     │  │  ├─ introspect.pyi
   │     │  │  ├─ mixins.py
   │     │  │  ├─ mixins.pyi
   │     │  │  ├─ npyio.py
   │     │  │  ├─ npyio.pyi
   │     │  │  ├─ recfunctions.py
   │     │  │  ├─ recfunctions.pyi
   │     │  │  ├─ scimath.py
   │     │  │  ├─ scimath.pyi
   │     │  │  ├─ stride_tricks.py
   │     │  │  ├─ stride_tricks.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ py2-np0-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npz
   │     │  │  │  │  ├─ py3-objarr.npy
   │     │  │  │  │  ├─ py3-objarr.npz
   │     │  │  │  │  ├─ python3.npy
   │     │  │  │  │  └─ win64python2.npy
   │     │  │  │  ├─ test_arraypad.py
   │     │  │  │  ├─ test_arraysetops.py
   │     │  │  │  ├─ test_arrayterator.py
   │     │  │  │  ├─ test_array_utils.py
   │     │  │  │  ├─ test_format.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_histograms.py
   │     │  │  │  ├─ test_index_tricks.py
   │     │  │  │  ├─ test_io.py
   │     │  │  │  ├─ test_loadtxt.py
   │     │  │  │  ├─ test_mixins.py
   │     │  │  │  ├─ test_nanfunctions.py
   │     │  │  │  ├─ test_packbits.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_recfunctions.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_stride_tricks.py
   │     │  │  │  ├─ test_twodim_base.py
   │     │  │  │  ├─ test_type_check.py
   │     │  │  │  ├─ test_ufunclike.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ test__datasource.py
   │     │  │  │  ├─ test__iotools.py
   │     │  │  │  ├─ test__version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arraypad.cpython-313.pyc
   │     │  │  │     ├─ test_arraysetops.cpython-313.pyc
   │     │  │  │     ├─ test_arrayterator.cpython-313.pyc
   │     │  │  │     ├─ test_array_utils.cpython-313.pyc
   │     │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_histograms.cpython-313.pyc
   │     │  │  │     ├─ test_index_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_io.cpython-313.pyc
   │     │  │  │     ├─ test_loadtxt.cpython-313.pyc
   │     │  │  │     ├─ test_mixins.cpython-313.pyc
   │     │  │  │     ├─ test_nanfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_packbits.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_recfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_stride_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_twodim_base.cpython-313.pyc
   │     │  │  │     ├─ test_type_check.cpython-313.pyc
   │     │  │  │     ├─ test_ufunclike.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     ├─ test__datasource.cpython-313.pyc
   │     │  │  │     ├─ test__iotools.cpython-313.pyc
   │     │  │  │     ├─ test__version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ user_array.py
   │     │  │  ├─ user_array.pyi
   │     │  │  ├─ _arraypad_impl.py
   │     │  │  ├─ _arraypad_impl.pyi
   │     │  │  ├─ _arraysetops_impl.py
   │     │  │  ├─ _arraysetops_impl.pyi
   │     │  │  ├─ _arrayterator_impl.py
   │     │  │  ├─ _arrayterator_impl.pyi
   │     │  │  ├─ _array_utils_impl.py
   │     │  │  ├─ _array_utils_impl.pyi
   │     │  │  ├─ _datasource.py
   │     │  │  ├─ _datasource.pyi
   │     │  │  ├─ _format_impl.py
   │     │  │  ├─ _format_impl.pyi
   │     │  │  ├─ _function_base_impl.py
   │     │  │  ├─ _function_base_impl.pyi
   │     │  │  ├─ _histograms_impl.py
   │     │  │  ├─ _histograms_impl.pyi
   │     │  │  ├─ _index_tricks_impl.py
   │     │  │  ├─ _index_tricks_impl.pyi
   │     │  │  ├─ _iotools.py
   │     │  │  ├─ _iotools.pyi
   │     │  │  ├─ _nanfunctions_impl.py
   │     │  │  ├─ _nanfunctions_impl.pyi
   │     │  │  ├─ _npyio_impl.py
   │     │  │  ├─ _npyio_impl.pyi
   │     │  │  ├─ _polynomial_impl.py
   │     │  │  ├─ _polynomial_impl.pyi
   │     │  │  ├─ _scimath_impl.py
   │     │  │  ├─ _scimath_impl.pyi
   │     │  │  ├─ _shape_base_impl.py
   │     │  │  ├─ _shape_base_impl.pyi
   │     │  │  ├─ _stride_tricks_impl.py
   │     │  │  ├─ _stride_tricks_impl.pyi
   │     │  │  ├─ _twodim_base_impl.py
   │     │  │  ├─ _twodim_base_impl.pyi
   │     │  │  ├─ _type_check_impl.py
   │     │  │  ├─ _type_check_impl.pyi
   │     │  │  ├─ _ufunclike_impl.py
   │     │  │  ├─ _ufunclike_impl.pyi
   │     │  │  ├─ _user_array_impl.py
   │     │  │  ├─ _user_array_impl.pyi
   │     │  │  ├─ _utils_impl.py
   │     │  │  ├─ _utils_impl.pyi
   │     │  │  ├─ _version.py
   │     │  │  ├─ _version.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ array_utils.cpython-313.pyc
   │     │  │     ├─ format.cpython-313.pyc
   │     │  │     ├─ introspect.cpython-313.pyc
   │     │  │     ├─ mixins.cpython-313.pyc
   │     │  │     ├─ npyio.cpython-313.pyc
   │     │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │     ├─ scimath.cpython-313.pyc
   │     │  │     ├─ stride_tricks.cpython-313.pyc
   │     │  │     ├─ user_array.cpython-313.pyc
   │     │  │     ├─ _arraypad_impl.cpython-313.pyc
   │     │  │     ├─ _arraysetops_impl.cpython-313.pyc
   │     │  │     ├─ _arrayterator_impl.cpython-313.pyc
   │     │  │     ├─ _array_utils_impl.cpython-313.pyc
   │     │  │     ├─ _datasource.cpython-313.pyc
   │     │  │     ├─ _format_impl.cpython-313.pyc
   │     │  │     ├─ _function_base_impl.cpython-313.pyc
   │     │  │     ├─ _histograms_impl.cpython-313.pyc
   │     │  │     ├─ _index_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _iotools.cpython-313.pyc
   │     │  │     ├─ _nanfunctions_impl.cpython-313.pyc
   │     │  │     ├─ _npyio_impl.cpython-313.pyc
   │     │  │     ├─ _polynomial_impl.cpython-313.pyc
   │     │  │     ├─ _scimath_impl.cpython-313.pyc
   │     │  │     ├─ _shape_base_impl.cpython-313.pyc
   │     │  │     ├─ _stride_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _twodim_base_impl.cpython-313.pyc
   │     │  │     ├─ _type_check_impl.cpython-313.pyc
   │     │  │     ├─ _ufunclike_impl.cpython-313.pyc
   │     │  │     ├─ _user_array_impl.cpython-313.pyc
   │     │  │     ├─ _utils_impl.cpython-313.pyc
   │     │  │     ├─ _version.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ linalg
   │     │  │  ├─ lapack_lite.cp313-win_amd64.lib
   │     │  │  ├─ lapack_lite.cp313-win_amd64.pyd
   │     │  │  ├─ lapack_lite.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_linalg.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _linalg.py
   │     │  │  ├─ _linalg.pyi
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.lib
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.pyd
   │     │  │  ├─ _umath_linalg.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _linalg.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ma
   │     │  │  ├─ API_CHANGES.txt
   │     │  │  ├─ core.py
   │     │  │  ├─ core.pyi
   │     │  │  ├─ extras.py
   │     │  │  ├─ extras.pyi
   │     │  │  ├─ LICENSE
   │     │  │  ├─ mrecords.py
   │     │  │  ├─ mrecords.pyi
   │     │  │  ├─ README.rst
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_core.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_extras.py
   │     │  │  │  ├─ test_mrecords.py
   │     │  │  │  ├─ test_old_ma.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_subclassing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_core.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_extras.cpython-313.pyc
   │     │  │  │     ├─ test_mrecords.cpython-313.pyc
   │     │  │  │     ├─ test_old_ma.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_subclassing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ testutils.py
   │     │  │  ├─ testutils.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ extras.cpython-313.pyc
   │     │  │     ├─ mrecords.cpython-313.pyc
   │     │  │     ├─ testutils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ matlib.py
   │     │  ├─ matlib.pyi
   │     │  ├─ matrixlib
   │     │  │  ├─ defmatrix.py
   │     │  │  ├─ defmatrix.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_defmatrix.py
   │     │  │  │  ├─ test_interaction.py
   │     │  │  │  ├─ test_masked_matrix.py
   │     │  │  │  ├─ test_matrix_linalg.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_defmatrix.cpython-313.pyc
   │     │  │  │     ├─ test_interaction.cpython-313.pyc
   │     │  │  │     ├─ test_masked_matrix.cpython-313.pyc
   │     │  │  │     ├─ test_matrix_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ defmatrix.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ polynomial
   │     │  │  ├─ chebyshev.py
   │     │  │  ├─ chebyshev.pyi
   │     │  │  ├─ hermite.py
   │     │  │  ├─ hermite.pyi
   │     │  │  ├─ hermite_e.py
   │     │  │  ├─ hermite_e.pyi
   │     │  │  ├─ laguerre.py
   │     │  │  ├─ laguerre.pyi
   │     │  │  ├─ legendre.py
   │     │  │  ├─ legendre.pyi
   │     │  │  ├─ polynomial.py
   │     │  │  ├─ polynomial.pyi
   │     │  │  ├─ polyutils.py
   │     │  │  ├─ polyutils.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_chebyshev.py
   │     │  │  │  ├─ test_classes.py
   │     │  │  │  ├─ test_hermite.py
   │     │  │  │  ├─ test_hermite_e.py
   │     │  │  │  ├─ test_laguerre.py
   │     │  │  │  ├─ test_legendre.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_polyutils.py
   │     │  │  │  ├─ test_printing.py
   │     │  │  │  ├─ test_symbol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_chebyshev.cpython-313.pyc
   │     │  │  │     ├─ test_classes.cpython-313.pyc
   │     │  │  │     ├─ test_hermite.cpython-313.pyc
   │     │  │  │     ├─ test_hermite_e.cpython-313.pyc
   │     │  │  │     ├─ test_laguerre.cpython-313.pyc
   │     │  │  │     ├─ test_legendre.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_polyutils.cpython-313.pyc
   │     │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │     ├─ test_symbol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _polybase.py
   │     │  │  ├─ _polybase.pyi
   │     │  │  ├─ _polytypes.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ chebyshev.cpython-313.pyc
   │     │  │     ├─ hermite.cpython-313.pyc
   │     │  │     ├─ hermite_e.cpython-313.pyc
   │     │  │     ├─ laguerre.cpython-313.pyc
   │     │  │     ├─ legendre.cpython-313.pyc
   │     │  │     ├─ polynomial.cpython-313.pyc
   │     │  │     ├─ polyutils.cpython-313.pyc
   │     │  │     ├─ _polybase.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ random
   │     │  │  ├─ bit_generator.cp313-win_amd64.lib
   │     │  │  ├─ bit_generator.cp313-win_amd64.pyd
   │     │  │  ├─ bit_generator.pxd
   │     │  │  ├─ bit_generator.pyi
   │     │  │  ├─ c_distributions.pxd
   │     │  │  ├─ lib
   │     │  │  │  └─ npyrandom.lib
   │     │  │  ├─ LICENSE.md
   │     │  │  ├─ mtrand.cp313-win_amd64.lib
   │     │  │  ├─ mtrand.cp313-win_amd64.pyd
   │     │  │  ├─ mtrand.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
   │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
   │     │  │  │  │  ├─ mt19937-testset-1.csv
   │     │  │  │  │  ├─ mt19937-testset-2.csv
   │     │  │  │  │  ├─ pcg64-testset-1.csv
   │     │  │  │  │  ├─ pcg64-testset-2.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
   │     │  │  │  │  ├─ philox-testset-1.csv
   │     │  │  │  │  ├─ philox-testset-2.csv
   │     │  │  │  │  ├─ sfc64-testset-1.csv
   │     │  │  │  │  ├─ sfc64-testset-2.csv
   │     │  │  │  │  ├─ sfc64_np126.pkl.gz
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_direct.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_generator_mt19937.py
   │     │  │  │  ├─ test_generator_mt19937_regressions.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_randomstate.py
   │     │  │  │  ├─ test_randomstate_regression.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_seed_sequence.py
   │     │  │  │  ├─ test_smoke.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_direct.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937_regressions.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate_regression.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_seed_sequence.cpython-313.pyc
   │     │  │  │     ├─ test_smoke.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.lib
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.pyd
   │     │  │  ├─ _bounded_integers.pxd
   │     │  │  ├─ _bounded_integers.pyi
   │     │  │  ├─ _common.cp313-win_amd64.lib
   │     │  │  ├─ _common.cp313-win_amd64.pyd
   │     │  │  ├─ _common.pxd
   │     │  │  ├─ _common.pyi
   │     │  │  ├─ _examples
   │     │  │  │  ├─ cffi
   │     │  │  │  │  ├─ extending.py
   │     │  │  │  │  ├─ parse.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ extending.cpython-313.pyc
   │     │  │  │  │     └─ parse.cpython-313.pyc
   │     │  │  │  ├─ cython
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  ├─ extending_distributions.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  └─ numba
   │     │  │  │     ├─ extending.py
   │     │  │  │     ├─ extending_distributions.py
   │     │  │  │     └─ __pycache__
   │     │  │  │        ├─ extending.cpython-313.pyc
   │     │  │  │        └─ extending_distributions.cpython-313.pyc
   │     │  │  ├─ _generator.cp313-win_amd64.lib
   │     │  │  ├─ _generator.cp313-win_amd64.pyd
   │     │  │  ├─ _generator.pyi
   │     │  │  ├─ _mt19937.cp313-win_amd64.lib
   │     │  │  ├─ _mt19937.cp313-win_amd64.pyd
   │     │  │  ├─ _mt19937.pyi
   │     │  │  ├─ _pcg64.cp313-win_amd64.lib
   │     │  │  ├─ _pcg64.cp313-win_amd64.pyd
   │     │  │  ├─ _pcg64.pyi
   │     │  │  ├─ _philox.cp313-win_amd64.lib
   │     │  │  ├─ _philox.cp313-win_amd64.pyd
   │     │  │  ├─ _philox.pyi
   │     │  │  ├─ _pickle.py
   │     │  │  ├─ _pickle.pyi
   │     │  │  ├─ _sfc64.cp313-win_amd64.lib
   │     │  │  ├─ _sfc64.cp313-win_amd64.pyd
   │     │  │  ├─ _sfc64.pyi
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _pickle.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rec
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ strings
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ print_coercion_tables.py
   │     │  │  ├─ print_coercion_tables.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _private
   │     │  │  │  ├─ extbuild.py
   │     │  │  │  ├─ extbuild.pyi
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ utils.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __init__.pyi
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ extbuild.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ print_coercion_tables.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ test_configtool.py
   │     │  │  ├─ test_ctypeslib.py
   │     │  │  ├─ test_lazyloading.py
   │     │  │  ├─ test_matlib.py
   │     │  │  ├─ test_numpy_config.py
   │     │  │  ├─ test_numpy_version.py
   │     │  │  ├─ test_public_api.py
   │     │  │  ├─ test_reloading.py
   │     │  │  ├─ test_scripts.py
   │     │  │  ├─ test_warnings.py
   │     │  │  ├─ test__all__.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_configtool.cpython-313.pyc
   │     │  │     ├─ test_ctypeslib.cpython-313.pyc
   │     │  │     ├─ test_lazyloading.cpython-313.pyc
   │     │  │     ├─ test_matlib.cpython-313.pyc
   │     │  │     ├─ test_numpy_config.cpython-313.pyc
   │     │  │     ├─ test_numpy_version.cpython-313.pyc
   │     │  │     ├─ test_public_api.cpython-313.pyc
   │     │  │     ├─ test_reloading.cpython-313.pyc
   │     │  │     ├─ test_scripts.cpython-313.pyc
   │     │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │     ├─ test__all__.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing
   │     │  │  ├─ mypy_plugin.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ fail
   │     │  │  │  │  │  ├─ arithmetic.pyi
   │     │  │  │  │  │  ├─ arrayprint.pyi
   │     │  │  │  │  │  ├─ arrayterator.pyi
   │     │  │  │  │  │  ├─ array_constructors.pyi
   │     │  │  │  │  │  ├─ array_like.pyi
   │     │  │  │  │  │  ├─ array_pad.pyi
   │     │  │  │  │  │  ├─ bitwise_ops.pyi
   │     │  │  │  │  │  ├─ char.pyi
   │     │  │  │  │  │  ├─ chararray.pyi
   │     │  │  │  │  │  ├─ comparisons.pyi
   │     │  │  │  │  │  ├─ constants.pyi
   │     │  │  │  │  │  ├─ datasource.pyi
   │     │  │  │  │  │  ├─ dtype.pyi
   │     │  │  │  │  │  ├─ einsumfunc.pyi
   │     │  │  │  │  │  ├─ flatiter.pyi
   │     │  │  │  │  │  ├─ fromnumeric.pyi
   │     │  │  │  │  │  ├─ histograms.pyi
   │     │  │  │  │  │  ├─ index_tricks.pyi
   │     │  │  │  │  │  ├─ lib_function_base.pyi
   │     │  │  │  │  │  ├─ lib_polynomial.pyi
   │     │  │  │  │  │  ├─ lib_utils.pyi
   │     │  │  │  │  │  ├─ lib_version.pyi
   │     │  │  │  │  │  ├─ linalg.pyi
   │     │  │  │  │  │  ├─ ma.pyi
   │     │  │  │  │  │  ├─ memmap.pyi
   │     │  │  │  │  │  ├─ modules.pyi
   │     │  │  │  │  │  ├─ multiarray.pyi
   │     │  │  │  │  │  ├─ ndarray.pyi
   │     │  │  │  │  │  ├─ ndarray_misc.pyi
   │     │  │  │  │  │  ├─ nditer.pyi
   │     │  │  │  │  │  ├─ nested_sequence.pyi
   │     │  │  │  │  │  ├─ npyio.pyi
   │     │  │  │  │  │  ├─ numerictypes.pyi
   │     │  │  │  │  │  ├─ random.pyi
   │     │  │  │  │  │  ├─ rec.pyi
   │     │  │  │  │  │  ├─ scalars.pyi
   │     │  │  │  │  │  ├─ shape.pyi
   │     │  │  │  │  │  ├─ shape_base.pyi
   │     │  │  │  │  │  ├─ stride_tricks.pyi
   │     │  │  │  │  │  ├─ strings.pyi
   │     │  │  │  │  │  ├─ testing.pyi
   │     │  │  │  │  │  ├─ twodim_base.pyi
   │     │  │  │  │  │  ├─ type_check.pyi
   │     │  │  │  │  │  ├─ ufunclike.pyi
   │     │  │  │  │  │  ├─ ufuncs.pyi
   │     │  │  │  │  │  ├─ ufunc_config.pyi
   │     │  │  │  │  │  └─ warnings_and_errors.pyi
   │     │  │  │  │  ├─ misc
   │     │  │  │  │  │  └─ extended_precision.pyi
   │     │  │  │  │  ├─ mypy.ini
   │     │  │  │  │  ├─ pass
   │     │  │  │  │  │  ├─ arithmetic.py
   │     │  │  │  │  │  ├─ arrayprint.py
   │     │  │  │  │  │  ├─ arrayterator.py
   │     │  │  │  │  │  ├─ array_constructors.py
   │     │  │  │  │  │  ├─ array_like.py
   │     │  │  │  │  │  ├─ bitwise_ops.py
   │     │  │  │  │  │  ├─ comparisons.py
   │     │  │  │  │  │  ├─ dtype.py
   │     │  │  │  │  │  ├─ einsumfunc.py
   │     │  │  │  │  │  ├─ flatiter.py
   │     │  │  │  │  │  ├─ fromnumeric.py
   │     │  │  │  │  │  ├─ index_tricks.py
   │     │  │  │  │  │  ├─ lib_user_array.py
   │     │  │  │  │  │  ├─ lib_utils.py
   │     │  │  │  │  │  ├─ lib_version.py
   │     │  │  │  │  │  ├─ literal.py
   │     │  │  │  │  │  ├─ ma.py
   │     │  │  │  │  │  ├─ mod.py
   │     │  │  │  │  │  ├─ modules.py
   │     │  │  │  │  │  ├─ multiarray.py
   │     │  │  │  │  │  ├─ ndarray_conversion.py
   │     │  │  │  │  │  ├─ ndarray_misc.py
   │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
   │     │  │  │  │  │  ├─ nditer.py
   │     │  │  │  │  │  ├─ numeric.py
   │     │  │  │  │  │  ├─ numerictypes.py
   │     │  │  │  │  │  ├─ random.py
   │     │  │  │  │  │  ├─ recfunctions.py
   │     │  │  │  │  │  ├─ scalars.py
   │     │  │  │  │  │  ├─ shape.py
   │     │  │  │  │  │  ├─ simple.py
   │     │  │  │  │  │  ├─ ufunclike.py
   │     │  │  │  │  │  ├─ ufuncs.py
   │     │  │  │  │  │  ├─ ufunc_config.py
   │     │  │  │  │  │  ├─ warnings_and_errors.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ arithmetic.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_constructors.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_like.cpython-313.pyc
   │     │  │  │  │  │     ├─ bitwise_ops.cpython-313.pyc
   │     │  │  │  │  │     ├─ comparisons.cpython-313.pyc
   │     │  │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │  │  │  │     ├─ flatiter.cpython-313.pyc
   │     │  │  │  │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ index_tricks.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_user_array.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_utils.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_version.cpython-313.pyc
   │     │  │  │  │  │     ├─ literal.cpython-313.pyc
   │     │  │  │  │  │     ├─ ma.cpython-313.pyc
   │     │  │  │  │  │     ├─ mod.cpython-313.pyc
   │     │  │  │  │  │     ├─ modules.cpython-313.pyc
   │     │  │  │  │  │     ├─ multiarray.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_conversion.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_misc.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_shape_manipulation.cpython-313.pyc
   │     │  │  │  │  │     ├─ nditer.cpython-313.pyc
   │     │  │  │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │  │  │  │     ├─ random.cpython-313.pyc
   │     │  │  │  │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │  │  │  │     ├─ scalars.cpython-313.pyc
   │     │  │  │  │  │     ├─ shape.cpython-313.pyc
   │     │  │  │  │  │     ├─ simple.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunclike.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufuncs.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunc_config.cpython-313.pyc
   │     │  │  │  │  │     └─ warnings_and_errors.cpython-313.pyc
   │     │  │  │  │  └─ reveal
   │     │  │  │  │     ├─ arithmetic.pyi
   │     │  │  │  │     ├─ arraypad.pyi
   │     │  │  │  │     ├─ arrayprint.pyi
   │     │  │  │  │     ├─ arraysetops.pyi
   │     │  │  │  │     ├─ arrayterator.pyi
   │     │  │  │  │     ├─ array_api_info.pyi
   │     │  │  │  │     ├─ array_constructors.pyi
   │     │  │  │  │     ├─ bitwise_ops.pyi
   │     │  │  │  │     ├─ char.pyi
   │     │  │  │  │     ├─ chararray.pyi
   │     │  │  │  │     ├─ comparisons.pyi
   │     │  │  │  │     ├─ constants.pyi
   │     │  │  │  │     ├─ ctypeslib.pyi
   │     │  │  │  │     ├─ datasource.pyi
   │     │  │  │  │     ├─ dtype.pyi
   │     │  │  │  │     ├─ einsumfunc.pyi
   │     │  │  │  │     ├─ emath.pyi
   │     │  │  │  │     ├─ fft.pyi
   │     │  │  │  │     ├─ flatiter.pyi
   │     │  │  │  │     ├─ fromnumeric.pyi
   │     │  │  │  │     ├─ getlimits.pyi
   │     │  │  │  │     ├─ histograms.pyi
   │     │  │  │  │     ├─ index_tricks.pyi
   │     │  │  │  │     ├─ lib_function_base.pyi
   │     │  │  │  │     ├─ lib_polynomial.pyi
   │     │  │  │  │     ├─ lib_utils.pyi
   │     │  │  │  │     ├─ lib_version.pyi
   │     │  │  │  │     ├─ linalg.pyi
   │     │  │  │  │     ├─ ma.pyi
   │     │  │  │  │     ├─ matrix.pyi
   │     │  │  │  │     ├─ memmap.pyi
   │     │  │  │  │     ├─ mod.pyi
   │     │  │  │  │     ├─ modules.pyi
   │     │  │  │  │     ├─ multiarray.pyi
   │     │  │  │  │     ├─ nbit_base_example.pyi
   │     │  │  │  │     ├─ ndarray_assignability.pyi
   │     │  │  │  │     ├─ ndarray_conversion.pyi
   │     │  │  │  │     ├─ ndarray_misc.pyi
   │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
   │     │  │  │  │     ├─ nditer.pyi
   │     │  │  │  │     ├─ nested_sequence.pyi
   │     │  │  │  │     ├─ npyio.pyi
   │     │  │  │  │     ├─ numeric.pyi
   │     │  │  │  │     ├─ numerictypes.pyi
   │     │  │  │  │     ├─ polynomial_polybase.pyi
   │     │  │  │  │     ├─ polynomial_polyutils.pyi
   │     │  │  │  │     ├─ polynomial_series.pyi
   │     │  │  │  │     ├─ random.pyi
   │     │  │  │  │     ├─ rec.pyi
   │     │  │  │  │     ├─ scalars.pyi
   │     │  │  │  │     ├─ shape.pyi
   │     │  │  │  │     ├─ shape_base.pyi
   │     │  │  │  │     ├─ stride_tricks.pyi
   │     │  │  │  │     ├─ strings.pyi
   │     │  │  │  │     ├─ testing.pyi
   │     │  │  │  │     ├─ twodim_base.pyi
   │     │  │  │  │     ├─ type_check.pyi
   │     │  │  │  │     ├─ ufunclike.pyi
   │     │  │  │  │     ├─ ufuncs.pyi
   │     │  │  │  │     ├─ ufunc_config.pyi
   │     │  │  │  │     └─ warnings_and_errors.pyi
   │     │  │  │  ├─ test_isfile.py
   │     │  │  │  ├─ test_runtime.py
   │     │  │  │  ├─ test_typing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_isfile.cpython-313.pyc
   │     │  │  │     ├─ test_runtime.cpython-313.pyc
   │     │  │  │     ├─ test_typing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ mypy_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ version.py
   │     │  ├─ version.pyi
   │     │  ├─ _array_api_info.py
   │     │  ├─ _array_api_info.pyi
   │     │  ├─ _configtool.py
   │     │  ├─ _configtool.pyi
   │     │  ├─ _core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ arrayprint.pyi
   │     │  │  ├─ cversions.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ defchararray.pyi
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ einsumfunc.pyi
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ fromnumeric.pyi
   │     │  │  ├─ function_base.py
   │     │  │  ├─ function_base.pyi
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ getlimits.pyi
   │     │  │  ├─ include
   │     │  │  │  └─ numpy
   │     │  │  │     ├─ arrayobject.h
   │     │  │  │     ├─ arrayscalars.h
   │     │  │  │     ├─ dtype_api.h
   │     │  │  │     ├─ halffloat.h
   │     │  │  │     ├─ ndarrayobject.h
   │     │  │  │     ├─ ndarraytypes.h
   │     │  │  │     ├─ npy_2_compat.h
   │     │  │  │     ├─ npy_2_complexcompat.h
   │     │  │  │     ├─ npy_3kcompat.h
   │     │  │  │     ├─ npy_common.h
   │     │  │  │     ├─ npy_cpu.h
   │     │  │  │     ├─ npy_endian.h
   │     │  │  │     ├─ npy_math.h
   │     │  │  │     ├─ npy_no_deprecated_api.h
   │     │  │  │     ├─ npy_os.h
   │     │  │  │     ├─ numpyconfig.h
   │     │  │  │     ├─ random
   │     │  │  │     │  ├─ bitgen.h
   │     │  │  │     │  ├─ distributions.h
   │     │  │  │     │  ├─ libdivide.h
   │     │  │  │     │  └─ LICENSE.txt
   │     │  │  │     ├─ ufuncobject.h
   │     │  │  │     ├─ utils.h
   │     │  │  │     ├─ _neighborhood_iterator_imp.h
   │     │  │  │     ├─ _numpyconfig.h
   │     │  │  │     ├─ _public_dtype_api_table.h
   │     │  │  │     ├─ __multiarray_api.c
   │     │  │  │     ├─ __multiarray_api.h
   │     │  │  │     ├─ __ufunc_api.c
   │     │  │  │     └─ __ufunc_api.h
   │     │  │  ├─ lib
   │     │  │  │  ├─ npy-pkg-config
   │     │  │  │  │  ├─ mlib.ini
   │     │  │  │  │  └─ npymath.ini
   │     │  │  │  ├─ npymath.lib
   │     │  │  │  └─ pkgconfig
   │     │  │  │     └─ numpy.pc
   │     │  │  ├─ memmap.py
   │     │  │  ├─ memmap.pyi
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ multiarray.pyi
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numeric.pyi
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ numerictypes.pyi
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ printoptions.py
   │     │  │  ├─ printoptions.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ records.pyi
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ shape_base.pyi
   │     │  │  ├─ strings.py
   │     │  │  ├─ strings.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ astype_copy.pkl
   │     │  │  │  │  ├─ generate_umath_validation_data.cpp
   │     │  │  │  │  ├─ recarray_from_file.fits
   │     │  │  │  │  ├─ umath-validation-set-arccos.csv
   │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
   │     │  │  │  │  ├─ umath-validation-set-arctan.csv
   │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
   │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
   │     │  │  │  │  ├─ umath-validation-set-cos.csv
   │     │  │  │  │  ├─ umath-validation-set-cosh.csv
   │     │  │  │  │  ├─ umath-validation-set-exp.csv
   │     │  │  │  │  ├─ umath-validation-set-exp2.csv
   │     │  │  │  │  ├─ umath-validation-set-expm1.csv
   │     │  │  │  │  ├─ umath-validation-set-log.csv
   │     │  │  │  │  ├─ umath-validation-set-log10.csv
   │     │  │  │  │  ├─ umath-validation-set-log1p.csv
   │     │  │  │  │  ├─ umath-validation-set-log2.csv
   │     │  │  │  │  ├─ umath-validation-set-README.txt
   │     │  │  │  │  ├─ umath-validation-set-sin.csv
   │     │  │  │  │  ├─ umath-validation-set-sinh.csv
   │     │  │  │  │  ├─ umath-validation-set-tan.csv
   │     │  │  │  │  └─ umath-validation-set-tanh.csv
   │     │  │  │  ├─ examples
   │     │  │  │  │  ├─ cython
   │     │  │  │  │  │  ├─ checks.pyx
   │     │  │  │  │  │  ├─ meson.build
   │     │  │  │  │  │  ├─ setup.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ setup.cpython-313.pyc
   │     │  │  │  │  └─ limited_api
   │     │  │  │  │     ├─ limited_api1.c
   │     │  │  │  │     ├─ limited_api2.pyx
   │     │  │  │  │     ├─ limited_api_latest.c
   │     │  │  │  │     ├─ meson.build
   │     │  │  │  │     ├─ setup.py
   │     │  │  │  │     └─ __pycache__
   │     │  │  │  │        └─ setup.cpython-313.pyc
   │     │  │  │  ├─ test_abc.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_argparse.py
   │     │  │  │  ├─ test_arraymethod.py
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_arrayprint.py
   │     │  │  │  ├─ test_array_api_info.py
   │     │  │  │  ├─ test_array_coercion.py
   │     │  │  │  ├─ test_array_interface.py
   │     │  │  │  ├─ test_casting_floatingpoint_errors.py
   │     │  │  │  ├─ test_casting_unittests.py
   │     │  │  │  ├─ test_conversion_utils.py
   │     │  │  │  ├─ test_cpu_dispatcher.py
   │     │  │  │  ├─ test_cpu_features.py
   │     │  │  │  ├─ test_custom_dtypes.py
   │     │  │  │  ├─ test_cython.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_defchararray.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_dlpack.py
   │     │  │  │  ├─ test_dtype.py
   │     │  │  │  ├─ test_einsum.py
   │     │  │  │  ├─ test_errstate.py
   │     │  │  │  ├─ test_extint128.py
   │     │  │  │  ├─ test_finfo.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_getlimits.py
   │     │  │  │  ├─ test_half.py
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_indexerrors.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_item_selection.py
   │     │  │  │  ├─ test_limited_api.py
   │     │  │  │  ├─ test_longdouble.py
   │     │  │  │  ├─ test_memmap.py
   │     │  │  │  ├─ test_mem_overlap.py
   │     │  │  │  ├─ test_mem_policy.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_multiprocessing.py
   │     │  │  │  ├─ test_multithreading.py
   │     │  │  │  ├─ test_nditer.py
   │     │  │  │  ├─ test_nep50_promotions.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_numerictypes.py
   │     │  │  │  ├─ test_overrides.py
   │     │  │  │  ├─ test_print.py
   │     │  │  │  ├─ test_protocols.py
   │     │  │  │  ├─ test_records.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_scalarbuffer.py
   │     │  │  │  ├─ test_scalarinherit.py
   │     │  │  │  ├─ test_scalarmath.py
   │     │  │  │  ├─ test_scalarprint.py
   │     │  │  │  ├─ test_scalar_ctors.py
   │     │  │  │  ├─ test_scalar_methods.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_simd.py
   │     │  │  │  ├─ test_simd_module.py
   │     │  │  │  ├─ test_stringdtype.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_umath.py
   │     │  │  │  ├─ test_umath_accuracy.py
   │     │  │  │  ├─ test_umath_complex.py
   │     │  │  │  ├─ test_unicode.py
   │     │  │  │  ├─ test__exceptions.py
   │     │  │  │  ├─ _locales.py
   │     │  │  │  ├─ _natype.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abc.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_argparse.cpython-313.pyc
   │     │  │  │     ├─ test_arraymethod.cpython-313.pyc
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_arrayprint.cpython-313.pyc
   │     │  │  │     ├─ test_array_api_info.cpython-313.pyc
   │     │  │  │     ├─ test_array_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_array_interface.cpython-313.pyc
   │     │  │  │     ├─ test_casting_floatingpoint_errors.cpython-313.pyc
   │     │  │  │     ├─ test_casting_unittests.cpython-313.pyc
   │     │  │  │     ├─ test_conversion_utils.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_dispatcher.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_features.cpython-313.pyc
   │     │  │  │     ├─ test_custom_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_defchararray.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_dlpack.cpython-313.pyc
   │     │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │     ├─ test_einsum.cpython-313.pyc
   │     │  │  │     ├─ test_errstate.cpython-313.pyc
   │     │  │  │     ├─ test_extint128.cpython-313.pyc
   │     │  │  │     ├─ test_finfo.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_getlimits.cpython-313.pyc
   │     │  │  │     ├─ test_half.cpython-313.pyc
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_indexerrors.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_item_selection.cpython-313.pyc
   │     │  │  │     ├─ test_limited_api.cpython-313.pyc
   │     │  │  │     ├─ test_longdouble.cpython-313.pyc
   │     │  │  │     ├─ test_memmap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_overlap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_policy.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_multiprocessing.cpython-313.pyc
   │     │  │  │     ├─ test_multithreading.cpython-313.pyc
   │     │  │  │     ├─ test_nditer.cpython-313.pyc
   │     │  │  │     ├─ test_nep50_promotions.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_numerictypes.cpython-313.pyc
   │     │  │  │     ├─ test_overrides.cpython-313.pyc
   │     │  │  │     ├─ test_print.cpython-313.pyc
   │     │  │  │     ├─ test_protocols.cpython-313.pyc
   │     │  │  │     ├─ test_records.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_scalarbuffer.cpython-313.pyc
   │     │  │  │     ├─ test_scalarinherit.cpython-313.pyc
   │     │  │  │     ├─ test_scalarmath.cpython-313.pyc
   │     │  │  │     ├─ test_scalarprint.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_ctors.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_methods.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_simd.cpython-313.pyc
   │     │  │  │     ├─ test_simd_module.cpython-313.pyc
   │     │  │  │     ├─ test_stringdtype.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_umath.cpython-313.pyc
   │     │  │  │     ├─ test_umath_accuracy.cpython-313.pyc
   │     │  │  │     ├─ test_umath_complex.cpython-313.pyc
   │     │  │  │     ├─ test_unicode.cpython-313.pyc
   │     │  │  │     ├─ test__exceptions.cpython-313.pyc
   │     │  │  │     ├─ _locales.cpython-313.pyc
   │     │  │  │     └─ _natype.cpython-313.pyc
   │     │  │  ├─ umath.py
   │     │  │  ├─ umath.pyi
   │     │  │  ├─ _add_newdocs.py
   │     │  │  ├─ _add_newdocs.pyi
   │     │  │  ├─ _add_newdocs_scalars.py
   │     │  │  ├─ _add_newdocs_scalars.pyi
   │     │  │  ├─ _asarray.py
   │     │  │  ├─ _asarray.pyi
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _exceptions.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _internal.pyi
   │     │  │  ├─ _methods.py
   │     │  │  ├─ _methods.pyi
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.pyd
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.lib
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _rational_tests.cp313-win_amd64.lib
   │     │  │  ├─ _rational_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.cp313-win_amd64.lib
   │     │  │  ├─ _simd.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.pyi
   │     │  │  ├─ _string_helpers.py
   │     │  │  ├─ _string_helpers.pyi
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.lib
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _type_aliases.py
   │     │  │  ├─ _type_aliases.pyi
   │     │  │  ├─ _ufunc_config.py
   │     │  │  ├─ _ufunc_config.pyi
   │     │  │  ├─ _umath_tests.cp313-win_amd64.lib
   │     │  │  ├─ _umath_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _umath_tests.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ cversions.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ memmap.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ printoptions.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ strings.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │     ├─ _add_newdocs_scalars.cpython-313.pyc
   │     │  │     ├─ _asarray.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _methods.cpython-313.pyc
   │     │  │     ├─ _string_helpers.cpython-313.pyc
   │     │  │     ├─ _type_aliases.cpython-313.pyc
   │     │  │     ├─ _ufunc_config.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _distributor_init.py
   │     │  ├─ _distributor_init.pyi
   │     │  ├─ _expired_attrs_2_0.py
   │     │  ├─ _expired_attrs_2_0.pyi
   │     │  ├─ _globals.py
   │     │  ├─ _globals.pyi
   │     │  ├─ _pyinstaller
   │     │  │  ├─ hook-numpy.py
   │     │  │  ├─ hook-numpy.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ pyinstaller-smoke.py
   │     │  │  │  ├─ test_pyinstaller.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ pyinstaller-smoke.cpython-313.pyc
   │     │  │  │     ├─ test_pyinstaller.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ hook-numpy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _pytesttester.py
   │     │  ├─ _pytesttester.pyi
   │     │  ├─ _typing
   │     │  │  ├─ _add_docstring.py
   │     │  │  ├─ _array_like.py
   │     │  │  ├─ _char_codes.py
   │     │  │  ├─ _dtype_like.py
   │     │  │  ├─ _extended_precision.py
   │     │  │  ├─ _nbit.py
   │     │  │  ├─ _nbit_base.py
   │     │  │  ├─ _nbit_base.pyi
   │     │  │  ├─ _nested_sequence.py
   │     │  │  ├─ _scalars.py
   │     │  │  ├─ _shape.py
   │     │  │  ├─ _ufunc.py
   │     │  │  ├─ _ufunc.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _add_docstring.cpython-313.pyc
   │     │  │     ├─ _array_like.cpython-313.pyc
   │     │  │     ├─ _char_codes.cpython-313.pyc
   │     │  │     ├─ _dtype_like.cpython-313.pyc
   │     │  │     ├─ _extended_precision.cpython-313.pyc
   │     │  │     ├─ _nbit.cpython-313.pyc
   │     │  │     ├─ _nbit_base.cpython-313.pyc
   │     │  │     ├─ _nested_sequence.cpython-313.pyc
   │     │  │     ├─ _scalars.cpython-313.pyc
   │     │  │     ├─ _shape.cpython-313.pyc
   │     │  │     ├─ _ufunc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _utils
   │     │  │  ├─ _convertions.py
   │     │  │  ├─ _convertions.pyi
   │     │  │  ├─ _inspect.py
   │     │  │  ├─ _inspect.pyi
   │     │  │  ├─ _pep440.py
   │     │  │  ├─ _pep440.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _convertions.cpython-313.pyc
   │     │  │     ├─ _inspect.cpython-313.pyc
   │     │  │     ├─ _pep440.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __config__.py
   │     │  ├─ __config__.pyi
   │     │  ├─ __init__.cython-30.pxd
   │     │  ├─ __init__.pxd
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ dtypes.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ matlib.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _array_api_info.cpython-313.pyc
   │     │     ├─ _configtool.cpython-313.pyc
   │     │     ├─ _distributor_init.cpython-313.pyc
   │     │     ├─ _expired_attrs_2_0.cpython-313.pyc
   │     │     ├─ _globals.cpython-313.pyc
   │     │     ├─ _pytesttester.cpython-313.pyc
   │     │     ├─ __config__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ numpy-2.4.2.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE.txt
   │     │  │  └─ numpy
   │     │  │     ├─ fft
   │     │  │     │  └─ pocketfft
   │     │  │     │     └─ LICENSE.md
   │     │  │     ├─ linalg
   │     │  │     │  └─ lapack_lite
   │     │  │     │     └─ LICENSE.txt
   │     │  │     ├─ ma
   │     │  │     │  └─ LICENSE
   │     │  │     ├─ random
   │     │  │     │  ├─ LICENSE.md
   │     │  │     │  └─ src
   │     │  │     │     ├─ distributions
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ mt19937
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ pcg64
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ philox
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ sfc64
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     └─ splitmix64
   │     │  │     │        └─ LICENSE.md
   │     │  │     └─ _core
   │     │  │        ├─ include
   │     │  │        │  └─ numpy
   │     │  │        │     └─ libdivide
   │     │  │        │        └─ LICENSE.txt
   │     │  │        └─ src
   │     │  │           ├─ common
   │     │  │           │  └─ pythoncapi-compat
   │     │  │           │     └─ COPYING
   │     │  │           ├─ highway
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ multiarray
   │     │  │           │  └─ dragon4_LICENSE.txt
   │     │  │           ├─ npysort
   │     │  │           │  └─ x86-simd-sort
   │     │  │           │     └─ LICENSE.md
   │     │  │           └─ umath
   │     │  │              └─ svml
   │     │  │                 └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ numpy.libs
   │     │  ├─ libscipy_openblas64_-74a408729250596b0973e69fdd954eea.dll
   │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
   │     ├─ oandapyV20
   │     │  ├─ contrib
   │     │  │  ├─ factories
   │     │  │  │  ├─ history.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ history.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generic.py
   │     │  │  ├─ requests
   │     │  │  │  ├─ baserequest.py
   │     │  │  │  ├─ extensions.py
   │     │  │  │  ├─ limitorder.py
   │     │  │  │  ├─ marketorder.py
   │     │  │  │  ├─ mitorder.py
   │     │  │  │  ├─ onfill.py
   │     │  │  │  ├─ positionclose.py
   │     │  │  │  ├─ stoplossorder.py
   │     │  │  │  ├─ stoporder.py
   │     │  │  │  ├─ takeprofitorder.py
   │     │  │  │  ├─ tradeclose.py
   │     │  │  │  ├─ trailingstoplossorder.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ baserequest.cpython-313.pyc
   │     │  │  │     ├─ extensions.cpython-313.pyc
   │     │  │  │     ├─ limitorder.cpython-313.pyc
   │     │  │  │     ├─ marketorder.cpython-313.pyc
   │     │  │  │     ├─ mitorder.cpython-313.pyc
   │     │  │  │     ├─ onfill.cpython-313.pyc
   │     │  │  │     ├─ positionclose.cpython-313.pyc
   │     │  │  │     ├─ stoplossorder.cpython-313.pyc
   │     │  │  │     ├─ stoporder.cpython-313.pyc
   │     │  │  │     ├─ takeprofitorder.cpython-313.pyc
   │     │  │  │     ├─ tradeclose.cpython-313.pyc
   │     │  │  │     ├─ trailingstoplossorder.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ generic.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ definitions
   │     │  │  ├─ accounts.py
   │     │  │  ├─ instruments.py
   │     │  │  ├─ orders.py
   │     │  │  ├─ pricing.py
   │     │  │  ├─ primitives.py
   │     │  │  ├─ trades.py
   │     │  │  ├─ transactions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accounts.cpython-313.pyc
   │     │  │     ├─ instruments.cpython-313.pyc
   │     │  │     ├─ orders.cpython-313.pyc
   │     │  │     ├─ pricing.cpython-313.pyc
   │     │  │     ├─ primitives.cpython-313.pyc
   │     │  │     ├─ trades.cpython-313.pyc
   │     │  │     ├─ transactions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ endpoints
   │     │  │  ├─ accounts.py
   │     │  │  ├─ apirequest.py
   │     │  │  ├─ decorators.py
   │     │  │  ├─ forexlabs.py
   │     │  │  ├─ instruments.py
   │     │  │  ├─ orders.py
   │     │  │  ├─ positions.py
   │     │  │  ├─ pricing.py
   │     │  │  ├─ responses
   │     │  │  │  ├─ accounts.py
   │     │  │  │  ├─ forexlabs.py
   │     │  │  │  ├─ instruments.py
   │     │  │  │  ├─ orders.py
   │     │  │  │  ├─ positions.py
   │     │  │  │  ├─ pricing.py
   │     │  │  │  ├─ trades.py
   │     │  │  │  ├─ transactions.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accounts.cpython-313.pyc
   │     │  │  │     ├─ forexlabs.cpython-313.pyc
   │     │  │  │     ├─ instruments.cpython-313.pyc
   │     │  │  │     ├─ orders.cpython-313.pyc
   │     │  │  │     ├─ positions.cpython-313.pyc
   │     │  │  │     ├─ pricing.cpython-313.pyc
   │     │  │  │     ├─ trades.cpython-313.pyc
   │     │  │  │     ├─ transactions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ trades.py
   │     │  │  ├─ transactions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accounts.cpython-313.pyc
   │     │  │     ├─ apirequest.cpython-313.pyc
   │     │  │     ├─ decorators.cpython-313.pyc
   │     │  │     ├─ forexlabs.cpython-313.pyc
   │     │  │     ├─ instruments.cpython-313.pyc
   │     │  │     ├─ orders.cpython-313.pyc
   │     │  │     ├─ positions.cpython-313.pyc
   │     │  │     ├─ pricing.cpython-313.pyc
   │     │  │     ├─ trades.cpython-313.pyc
   │     │  │     ├─ transactions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ oandapyV20.py
   │     │  ├─ types
   │     │  │  ├─ types.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ oandapyV20.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ oandapyv20-0.7.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ packaging
   │     │  ├─ licenses
   │     │  │  ├─ _spdx.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _spdx.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ markers.py
   │     │  ├─ metadata.py
   │     │  ├─ py.typed
   │     │  ├─ pylock.py
   │     │  ├─ requirements.py
   │     │  ├─ specifiers.py
   │     │  ├─ tags.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _elffile.py
   │     │  ├─ _manylinux.py
   │     │  ├─ _musllinux.py
   │     │  ├─ _parser.py
   │     │  ├─ _structures.py
   │     │  ├─ _tokenizer.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ markers.cpython-313.pyc
   │     │     ├─ metadata.cpython-313.pyc
   │     │     ├─ pylock.cpython-313.pyc
   │     │     ├─ requirements.cpython-313.pyc
   │     │     ├─ specifiers.cpython-313.pyc
   │     │     ├─ tags.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _elffile.cpython-313.pyc
   │     │     ├─ _manylinux.cpython-313.pyc
   │     │     ├─ _musllinux.cpython-313.pyc
   │     │     ├─ _parser.cpython-313.pyc
   │     │     ├─ _structures.cpython-313.pyc
   │     │     ├─ _tokenizer.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ packaging-26.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  ├─ LICENSE.APACHE
   │     │  │  └─ LICENSE.BSD
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pandas
   │     │  ├─ api
   │     │  │  ├─ executors
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ extensions
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals.py
   │     │  │  ├─ types
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ typing
   │     │  │  │  ├─ aliases.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ aliases.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ internals.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ arrays
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ numpy
   │     │  │  │  ├─ function.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ function.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle_compat.py
   │     │  │  ├─ pyarrow.py
   │     │  │  ├─ _constants.py
   │     │  │  ├─ _optional.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pickle_compat.cpython-313.pyc
   │     │  │     ├─ pyarrow.cpython-313.pyc
   │     │  │     ├─ _constants.cpython-313.pyc
   │     │  │     ├─ _optional.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ accessor.py
   │     │  │  ├─ algorithms.py
   │     │  │  ├─ api.py
   │     │  │  ├─ apply.py
   │     │  │  ├─ arraylike.py
   │     │  │  ├─ arrays
   │     │  │  │  ├─ arrow
   │     │  │  │  │  ├─ accessors.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ extension_types.py
   │     │  │  │  │  ├─ _arrow_utils.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ extension_types.cpython-313.pyc
   │     │  │  │  │     ├─ _arrow_utils.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ boolean.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ floating.py
   │     │  │  │  ├─ integer.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ masked.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ numpy_.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ accessor.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ scipy_sparse.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ scipy_sparse.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_.py
   │     │  │  │  ├─ string_arrow.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ _arrow_string_mixins.py
   │     │  │  │  ├─ _mixins.py
   │     │  │  │  ├─ _ranges.py
   │     │  │  │  ├─ _utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ boolean.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ floating.cpython-313.pyc
   │     │  │  │     ├─ integer.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ masked.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ numpy_.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ string_.cpython-313.pyc
   │     │  │  │     ├─ string_arrow.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ _arrow_string_mixins.cpython-313.pyc
   │     │  │  │     ├─ _mixins.cpython-313.pyc
   │     │  │  │     ├─ _ranges.cpython-313.pyc
   │     │  │  │     ├─ _utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ array_algos
   │     │  │  │  ├─ datetimelike_accumulations.py
   │     │  │  │  ├─ masked_accumulations.py
   │     │  │  │  ├─ masked_reductions.py
   │     │  │  │  ├─ putmask.py
   │     │  │  │  ├─ quantile.py
   │     │  │  │  ├─ replace.py
   │     │  │  │  ├─ take.py
   │     │  │  │  ├─ transforms.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimelike_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_reductions.cpython-313.pyc
   │     │  │  │     ├─ putmask.cpython-313.pyc
   │     │  │  │     ├─ quantile.cpython-313.pyc
   │     │  │  │     ├─ replace.cpython-313.pyc
   │     │  │  │     ├─ take.cpython-313.pyc
   │     │  │  │     ├─ transforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base.py
   │     │  │  ├─ col.py
   │     │  │  ├─ common.py
   │     │  │  ├─ computation
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ engines.py
   │     │  │  │  ├─ eval.py
   │     │  │  │  ├─ expr.py
   │     │  │  │  ├─ expressions.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ parsing.py
   │     │  │  │  ├─ pytables.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ engines.cpython-313.pyc
   │     │  │  │     ├─ eval.cpython-313.pyc
   │     │  │  │     ├─ expr.cpython-313.pyc
   │     │  │  │     ├─ expressions.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     ├─ parsing.cpython-313.pyc
   │     │  │  │     ├─ pytables.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config_init.py
   │     │  │  ├─ construction.py
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ astype.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ cast.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ dtypes.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ inference.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ astype.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ cast.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ dtypes.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ inference.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ flags.py
   │     │  │  ├─ frame.py
   │     │  │  ├─ generic.py
   │     │  │  ├─ groupby
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ grouper.py
   │     │  │  │  ├─ indexing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ grouper.cpython-313.pyc
   │     │  │  │     ├─ indexing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ objects.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ objects.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ accessors.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ category.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ extension.py
   │     │  │  │  ├─ frozen.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ multi.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ range.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ category.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ extension.cpython-313.pyc
   │     │  │  │     ├─ frozen.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ multi.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ range.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing.py
   │     │  │  ├─ interchange
   │     │  │  │  ├─ buffer.py
   │     │  │  │  ├─ column.py
   │     │  │  │  ├─ dataframe.py
   │     │  │  │  ├─ dataframe_protocol.py
   │     │  │  │  ├─ from_dataframe.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ buffer.cpython-313.pyc
   │     │  │  │     ├─ column.cpython-313.pyc
   │     │  │  │     ├─ dataframe.cpython-313.pyc
   │     │  │  │     ├─ dataframe_protocol.cpython-313.pyc
   │     │  │  │     ├─ from_dataframe.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ blocks.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ construction.py
   │     │  │  │  ├─ managers.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ blocks.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ construction.cpython-313.pyc
   │     │  │  │     ├─ managers.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ methods
   │     │  │  │  ├─ describe.py
   │     │  │  │  ├─ selectn.py
   │     │  │  │  ├─ to_dict.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ describe.cpython-313.pyc
   │     │  │  │     ├─ selectn.cpython-313.pyc
   │     │  │  │     ├─ to_dict.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ missing.py
   │     │  │  ├─ nanops.py
   │     │  │  ├─ ops
   │     │  │  │  ├─ array_ops.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ dispatch.py
   │     │  │  │  ├─ docstrings.py
   │     │  │  │  ├─ invalid.py
   │     │  │  │  ├─ mask_ops.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ array_ops.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ dispatch.cpython-313.pyc
   │     │  │  │     ├─ docstrings.cpython-313.pyc
   │     │  │  │     ├─ invalid.cpython-313.pyc
   │     │  │  │     ├─ mask_ops.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample.py
   │     │  │  ├─ reshape
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ encoding.py
   │     │  │  │  ├─ melt.py
   │     │  │  │  ├─ merge.py
   │     │  │  │  ├─ pivot.py
   │     │  │  │  ├─ reshape.py
   │     │  │  │  ├─ tile.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ encoding.cpython-313.pyc
   │     │  │  │     ├─ melt.cpython-313.pyc
   │     │  │  │     ├─ merge.cpython-313.pyc
   │     │  │  │     ├─ pivot.cpython-313.pyc
   │     │  │  │     ├─ reshape.cpython-313.pyc
   │     │  │  │     ├─ tile.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ roperator.py
   │     │  │  ├─ sample.py
   │     │  │  ├─ series.py
   │     │  │  ├─ shared_docs.py
   │     │  │  ├─ sorting.py
   │     │  │  ├─ sparse
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ accessor.py
   │     │  │  │  ├─ object_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │     ├─ object_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ times.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ times.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ hashing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hashing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ doc.py
   │     │  │  │  ├─ ewm.py
   │     │  │  │  ├─ expanding.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ online.py
   │     │  │  │  ├─ rolling.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ doc.cpython-313.pyc
   │     │  │  │     ├─ ewm.cpython-313.pyc
   │     │  │  │     ├─ expanding.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ online.cpython-313.pyc
   │     │  │  │     ├─ rolling.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _numba
   │     │  │  │  ├─ executor.py
   │     │  │  │  ├─ extensions.py
   │     │  │  │  ├─ kernels
   │     │  │  │  │  ├─ mean_.py
   │     │  │  │  │  ├─ min_max_.py
   │     │  │  │  │  ├─ shared.py
   │     │  │  │  │  ├─ sum_.py
   │     │  │  │  │  ├─ var_.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ mean_.cpython-313.pyc
   │     │  │  │  │     ├─ min_max_.cpython-313.pyc
   │     │  │  │  │     ├─ shared.cpython-313.pyc
   │     │  │  │  │     ├─ sum_.cpython-313.pyc
   │     │  │  │  │     ├─ var_.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ executor.cpython-313.pyc
   │     │  │  │     ├─ extensions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor.cpython-313.pyc
   │     │  │     ├─ algorithms.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ apply.cpython-313.pyc
   │     │  │     ├─ arraylike.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ col.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ config_init.cpython-313.pyc
   │     │  │     ├─ construction.cpython-313.pyc
   │     │  │     ├─ flags.cpython-313.pyc
   │     │  │     ├─ frame.cpython-313.pyc
   │     │  │     ├─ generic.cpython-313.pyc
   │     │  │     ├─ indexing.cpython-313.pyc
   │     │  │     ├─ missing.cpython-313.pyc
   │     │  │     ├─ nanops.cpython-313.pyc
   │     │  │     ├─ resample.cpython-313.pyc
   │     │  │     ├─ roperator.cpython-313.pyc
   │     │  │     ├─ sample.cpython-313.pyc
   │     │  │     ├─ series.cpython-313.pyc
   │     │  │     ├─ shared_docs.cpython-313.pyc
   │     │  │     ├─ sorting.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ errors
   │     │  │  ├─ cow.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cow.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ api.py
   │     │  │  ├─ clipboard
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ clipboards.py
   │     │  │  ├─ common.py
   │     │  │  ├─ excel
   │     │  │  │  ├─ _base.py
   │     │  │  │  ├─ _calamine.py
   │     │  │  │  ├─ _odfreader.py
   │     │  │  │  ├─ _odswriter.py
   │     │  │  │  ├─ _openpyxl.py
   │     │  │  │  ├─ _pyxlsb.py
   │     │  │  │  ├─ _util.py
   │     │  │  │  ├─ _xlrd.py
   │     │  │  │  ├─ _xlsxwriter.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _base.cpython-313.pyc
   │     │  │  │     ├─ _calamine.cpython-313.pyc
   │     │  │  │     ├─ _odfreader.cpython-313.pyc
   │     │  │  │     ├─ _odswriter.cpython-313.pyc
   │     │  │  │     ├─ _openpyxl.cpython-313.pyc
   │     │  │  │     ├─ _pyxlsb.cpython-313.pyc
   │     │  │  │     ├─ _util.cpython-313.pyc
   │     │  │  │     ├─ _xlrd.cpython-313.pyc
   │     │  │  │     ├─ _xlsxwriter.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ feather_format.py
   │     │  │  ├─ formats
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ css.py
   │     │  │  │  ├─ csvs.py
   │     │  │  │  ├─ excel.py
   │     │  │  │  ├─ format.py
   │     │  │  │  ├─ html.py
   │     │  │  │  ├─ info.py
   │     │  │  │  ├─ printing.py
   │     │  │  │  ├─ string.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ style_render.py
   │     │  │  │  ├─ templates
   │     │  │  │  │  ├─ html.tpl
   │     │  │  │  │  ├─ html_style.tpl
   │     │  │  │  │  ├─ html_table.tpl
   │     │  │  │  │  ├─ latex.tpl
   │     │  │  │  │  ├─ latex_longtable.tpl
   │     │  │  │  │  ├─ latex_table.tpl
   │     │  │  │  │  ├─ string.tpl
   │     │  │  │  │  └─ typst.tpl
   │     │  │  │  ├─ xml.py
   │     │  │  │  ├─ _color_data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ css.cpython-313.pyc
   │     │  │  │     ├─ csvs.cpython-313.pyc
   │     │  │  │     ├─ excel.cpython-313.pyc
   │     │  │  │     ├─ format.cpython-313.pyc
   │     │  │  │     ├─ html.cpython-313.pyc
   │     │  │  │     ├─ info.cpython-313.pyc
   │     │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │     ├─ string.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ style_render.cpython-313.pyc
   │     │  │  │     ├─ xml.cpython-313.pyc
   │     │  │  │     ├─ _color_data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ html.py
   │     │  │  ├─ iceberg.py
   │     │  │  ├─ json
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ _normalize.py
   │     │  │  │  ├─ _table_schema.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     ├─ _normalize.cpython-313.pyc
   │     │  │  │     ├─ _table_schema.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ orc.py
   │     │  │  ├─ parquet.py
   │     │  │  ├─ parsers
   │     │  │  │  ├─ arrow_parser_wrapper.py
   │     │  │  │  ├─ base_parser.py
   │     │  │  │  ├─ c_parser_wrapper.py
   │     │  │  │  ├─ python_parser.py
   │     │  │  │  ├─ readers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arrow_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ base_parser.cpython-313.pyc
   │     │  │  │     ├─ c_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ python_parser.cpython-313.pyc
   │     │  │  │     ├─ readers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle.py
   │     │  │  ├─ pytables.py
   │     │  │  ├─ sas
   │     │  │  │  ├─ sas7bdat.py
   │     │  │  │  ├─ sasreader.py
   │     │  │  │  ├─ sas_constants.py
   │     │  │  │  ├─ sas_xport.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ sas7bdat.cpython-313.pyc
   │     │  │  │     ├─ sasreader.cpython-313.pyc
   │     │  │  │     ├─ sas_constants.cpython-313.pyc
   │     │  │  │     ├─ sas_xport.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ spss.py
   │     │  │  ├─ sql.py
   │     │  │  ├─ stata.py
   │     │  │  ├─ xml.py
   │     │  │  ├─ _util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ clipboards.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ feather_format.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ iceberg.cpython-313.pyc
   │     │  │     ├─ orc.cpython-313.pyc
   │     │  │     ├─ parquet.cpython-313.pyc
   │     │  │     ├─ pickle.cpython-313.pyc
   │     │  │     ├─ pytables.cpython-313.pyc
   │     │  │     ├─ spss.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     ├─ stata.cpython-313.pyc
   │     │  │     ├─ xml.cpython-313.pyc
   │     │  │     ├─ _util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ plotting
   │     │  │  ├─ _core.py
   │     │  │  ├─ _matplotlib
   │     │  │  │  ├─ boxplot.py
   │     │  │  │  ├─ converter.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ hist.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ timeseries.py
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ boxplot.cpython-313.pyc
   │     │  │  │     ├─ converter.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ hist.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ timeseries.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _misc.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _core.cpython-313.pyc
   │     │  │     ├─ _misc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ pyproject.toml
   │     │  ├─ testing.py
   │     │  ├─ tests
   │     │  │  ├─ api
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ apply
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_frame_apply.py
   │     │  │  │  ├─ test_frame_apply_relabeling.py
   │     │  │  │  ├─ test_frame_transform.py
   │     │  │  │  ├─ test_invalid_arg.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_series_apply.py
   │     │  │  │  ├─ test_series_apply_relabeling.py
   │     │  │  │  ├─ test_series_transform.py
   │     │  │  │  ├─ test_str.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_frame_transform.cpython-313.pyc
   │     │  │  │     ├─ test_invalid_arg.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_series_transform.cpython-313.pyc
   │     │  │  │     ├─ test_str.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arithmetic
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_array_ops.py
   │     │  │  │  ├─ test_bool.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_datetime64.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_object.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ test_timedelta64.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_array_ops.cpython-313.pyc
   │     │  │  │     ├─ test_bool.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_datetime64.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_object.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta64.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arrays
   │     │  │  │  ├─ boolean
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_logical.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_logical.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_algos.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_api.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_operators.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_warnings.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_algos.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_operators.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ floating
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ integer
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_pyarrow.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_pyarrow.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked_shared.py
   │     │  │  │  ├─ numpy_
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ test_accessor.py
   │     │  │  │  │  ├─ test_arithmetics.py
   │     │  │  │  │  ├─ test_array.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_combine_concat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_libsparse.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ test_unary.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetics.cpython-313.pyc
   │     │  │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_libsparse.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_string.py
   │     │  │  │  │  ├─ test_string_arrow.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_string_arrow.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_datetimes.py
   │     │  │  │  ├─ test_ndarray_backed.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ masked_shared.cpython-313.pyc
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │     ├─ test_ndarray_backed.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fillna.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_transpose.py
   │     │  │  │  ├─ test_unique.py
   │     │  │  │  ├─ test_value_counts.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ computation
   │     │  │  │  ├─ test_compat.py
   │     │  │  │  ├─ test_eval.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │     ├─ test_eval.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config
   │     │  │  │  ├─ test_config.py
   │     │  │  │  ├─ test_localization.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_config.cpython-313.pyc
   │     │  │  │     ├─ test_localization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ construction
   │     │  │  │  ├─ test_extract_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_extract_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ copy_view
   │     │  │  │  ├─ index
   │     │  │  │  │  ├─ test_datetimeindex.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_intervalindex.py
   │     │  │  │  │  ├─ test_periodindex.py
   │     │  │  │  │  ├─ test_timedeltaindex.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetimeindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_intervalindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_periodindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedeltaindex.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_astype.py
   │     │  │  │  ├─ test_chained_assignment_deprecation.py
   │     │  │  │  ├─ test_clip.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_copy_deprecation.py
   │     │  │  │  ├─ test_core_functionalities.py
   │     │  │  │  ├─ test_functions.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ test_interp_fillna.py
   │     │  │  │  ├─ test_methods.py
   │     │  │  │  ├─ test_replace.py
   │     │  │  │  ├─ test_setitem.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │     ├─ test_chained_assignment_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_copy_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_core_functionalities.cpython-313.pyc
   │     │  │  │     ├─ test_functions.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     ├─ test_interp_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_methods.cpython-313.pyc
   │     │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ cast
   │     │  │  │  │  ├─ test_box_unbox.py
   │     │  │  │  │  ├─ test_can_hold_element.py
   │     │  │  │  │  ├─ test_construct_from_scalar.py
   │     │  │  │  │  ├─ test_construct_ndarray.py
   │     │  │  │  │  ├─ test_construct_object_arr.py
   │     │  │  │  │  ├─ test_dict_compat.py
   │     │  │  │  │  ├─ test_downcast.py
   │     │  │  │  │  ├─ test_find_common_type.py
   │     │  │  │  │  ├─ test_infer_datetimelike.py
   │     │  │  │  │  ├─ test_infer_dtype.py
   │     │  │  │  │  ├─ test_promote.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_box_unbox.cpython-313.pyc
   │     │  │  │  │     ├─ test_can_hold_element.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_from_scalar.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_ndarray.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_object_arr.cpython-313.pyc
   │     │  │  │  │     ├─ test_dict_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_downcast.cpython-313.pyc
   │     │  │  │  │     ├─ test_find_common_type.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_datetimelike.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_promote.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_concat.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_inference.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ extension
   │     │  │  │  ├─ array_with_attr
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_array_with_attr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_array_with_attr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base
   │     │  │  │  │  ├─ accumulate.py
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ casting.py
   │     │  │  │  │  ├─ constructors.py
   │     │  │  │  │  ├─ dim2.py
   │     │  │  │  │  ├─ dtype.py
   │     │  │  │  │  ├─ getitem.py
   │     │  │  │  │  ├─ groupby.py
   │     │  │  │  │  ├─ index.py
   │     │  │  │  │  ├─ interface.py
   │     │  │  │  │  ├─ io.py
   │     │  │  │  │  ├─ methods.py
   │     │  │  │  │  ├─ missing.py
   │     │  │  │  │  ├─ ops.py
   │     │  │  │  │  ├─ printing.py
   │     │  │  │  │  ├─ reduce.py
   │     │  │  │  │  ├─ reshaping.py
   │     │  │  │  │  ├─ setitem.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accumulate.cpython-313.pyc
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ casting.cpython-313.pyc
   │     │  │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │  │     ├─ dim2.cpython-313.pyc
   │     │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │     ├─ getitem.cpython-313.pyc
   │     │  │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │  │     ├─ interface.cpython-313.pyc
   │     │  │  │  │     ├─ io.cpython-313.pyc
   │     │  │  │  │     ├─ methods.cpython-313.pyc
   │     │  │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │  │     ├─ reduce.cpython-313.pyc
   │     │  │  │  │     ├─ reshaping.cpython-313.pyc
   │     │  │  │  │     ├─ setitem.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ date
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ decimal
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_json.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_json.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ list
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_list.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_list.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_arrow.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_extension.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_masked.py
   │     │  │  │  ├─ test_numpy.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_sparse.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ uuid
   │     │  │  │  │  ├─ test_uuid.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_uuid.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_arrow.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_extension.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_masked.cpython-313.pyc
   │     │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ frame
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ constructors
   │     │  │  │  │  ├─ test_from_dict.py
   │     │  │  │  │  ├─ test_from_records.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_from_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_from_records.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_coercion.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_get_value.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_assign.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_at_time.py
   │     │  │  │  │  ├─ test_between_time.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_dot.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_droplevel.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_filter.py
   │     │  │  │  │  ├─ test_first_valid_index.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isetitem.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_is_homogeneous_dtype.py
   │     │  │  │  │  ├─ test_iterrows.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pipe.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_reorder_levels.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_select_dtypes.py
   │     │  │  │  │  ├─ test_set_axis.py
   │     │  │  │  │  ├─ test_set_index.py
   │     │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_swaplevel.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_dict_of_blocks.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  ├─ test_to_records.py
   │     │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  ├─ test_transpose.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_assign.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_at_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_between_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_dot.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_droplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_filter.cpython-313.pyc
   │     │  │  │  │     ├─ test_first_valid_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isetitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_homogeneous_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_iterrows.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_reorder_levels.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_select_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_swaplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict_of_blocks.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_records.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_alter_axes.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_arrow_interface.py
   │     │  │  │  ├─ test_block_internals.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_nonunique_indexes.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_query_eval.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_repr.py
   │     │  │  │  ├─ test_stack_unstack.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_alter_axes.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_arrow_interface.cpython-313.pyc
   │     │  │  │     ├─ test_block_internals.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_nonunique_indexes.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_query_eval.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │     ├─ test_stack_unstack.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generic
   │     │  │  │  ├─ test_duplicate_labels.py
   │     │  │  │  ├─ test_finalize.py
   │     │  │  │  ├─ test_frame.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_label_or_level_utils.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_to_xarray.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_duplicate_labels.cpython-313.pyc
   │     │  │  │     ├─ test_finalize.cpython-313.pyc
   │     │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_label_or_level_utils.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_to_xarray.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ groupby
   │     │  │  │  ├─ aggregate
   │     │  │  │  │  ├─ test_aggregate.py
   │     │  │  │  │  ├─ test_cython.py
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_other.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_aggregate.cpython-313.pyc
   │     │  │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_other.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_groupby_shift_diff.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_kurt.py
   │     │  │  │  │  ├─ test_nlargest_nsmallest.py
   │     │  │  │  │  ├─ test_nth.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_skew.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_groupby_shift_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_kurt.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest_nsmallest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nth.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_skew.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_all_methods.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_bin_groupby.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_counting.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_filters.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_groupby_dropna.py
   │     │  │  │  ├─ test_groupby_subclass.py
   │     │  │  │  ├─ test_grouping.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_as_string.py
   │     │  │  │  ├─ test_libgroupby.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_numeric_only.py
   │     │  │  │  ├─ test_pipe.py
   │     │  │  │  ├─ test_raises.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_timegrouper.py
   │     │  │  │  ├─ transform
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_transform.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_transform.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_all_methods.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_bin_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_counting.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_filters.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_dropna.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_grouping.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_as_string.cpython-313.pyc
   │     │  │  │     ├─ test_libgroupby.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_numeric_only.cpython-313.pyc
   │     │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │     ├─ test_raises.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_timegrouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ base_class
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_category.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_category.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ datetimelike_
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_nat.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_isocalendar.py
   │     │  │  │  │  │  ├─ test_map.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_snap.py
   │     │  │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_to_series.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_isocalendar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_snap.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_series.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_date_range.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_iter.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_npfuncs.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_date_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_iter.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_range.py
   │     │  │  │  │  ├─ test_interval_tree.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_tree.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multi
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_conversion.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_duplicates.py
   │     │  │  │  │  ├─ test_equivalence.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_get_level_values.py
   │     │  │  │  │  ├─ test_get_set.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_integrity.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_lexsort.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_names.py
   │     │  │  │  │  ├─ test_partial_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_util.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equivalence.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_level_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_set.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_integrity.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_lexsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_names.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ numeric
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_numeric.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ object
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_is_full.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_is_full.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ test_period_range.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_tools.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_period_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ ranges
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_range.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_any_index.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_engines.py
   │     │  │  │  ├─ test_frozen.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_new.py
   │     │  │  │  ├─ test_numpy_compat.py
   │     │  │  │  ├─ test_old_base.py
   │     │  │  │  ├─ test_setops.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ test_timedelta_range.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta_range.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_any_index.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_engines.cpython-313.pyc
   │     │  │  │     ├─ test_frozen.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_new.cpython-313.pyc
   │     │  │  │     ├─ test_numpy_compat.cpython-313.pyc
   │     │  │  │     ├─ test_old_base.cpython-313.pyc
   │     │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_new.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_new.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multiindex
   │     │  │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_iloc.py
   │     │  │  │  │  ├─ test_indexing_slow.py
   │     │  │  │  │  ├─ test_loc.py
   │     │  │  │  │  ├─ test_multiindex.py
   │     │  │  │  │  ├─ test_partial.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_slice.py
   │     │  │  │  │  ├─ test_sorted.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing_slow.cpython-313.pyc
   │     │  │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │  │     ├─ test_multiindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_slice.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorted.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_at.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  ├─ test_check_indexer.py
   │     │  │  │  ├─ test_coercion.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_floats.py
   │     │  │  │  ├─ test_iat.py
   │     │  │  │  ├─ test_iloc.py
   │     │  │  │  ├─ test_indexers.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_loc.py
   │     │  │  │  ├─ test_na_indexing.py
   │     │  │  │  ├─ test_partial.py
   │     │  │  │  ├─ test_scalar.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_at.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │     ├─ test_check_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_floats.cpython-313.pyc
   │     │  │  │     ├─ test_iat.cpython-313.pyc
   │     │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │     ├─ test_indexers.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │     ├─ test_na_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │     ├─ test_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ test_impl.py
   │     │  │  │  ├─ test_spec_conformance.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_impl.cpython-313.pyc
   │     │  │  │     ├─ test_spec_conformance.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ io
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ excel
   │     │  │  │  │  ├─ test_odf.py
   │     │  │  │  │  ├─ test_odswriter.py
   │     │  │  │  │  ├─ test_openpyxl.py
   │     │  │  │  │  ├─ test_readers.py
   │     │  │  │  │  ├─ test_style.py
   │     │  │  │  │  ├─ test_writers.py
   │     │  │  │  │  ├─ test_xlrd.py
   │     │  │  │  │  ├─ test_xlsxwriter.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_odf.cpython-313.pyc
   │     │  │  │  │     ├─ test_odswriter.cpython-313.pyc
   │     │  │  │  │     ├─ test_openpyxl.cpython-313.pyc
   │     │  │  │  │     ├─ test_readers.cpython-313.pyc
   │     │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │     ├─ test_writers.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlrd.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlsxwriter.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formats
   │     │  │  │  │  ├─ style
   │     │  │  │  │  │  ├─ test_bar.py
   │     │  │  │  │  │  ├─ test_exceptions.py
   │     │  │  │  │  │  ├─ test_format.py
   │     │  │  │  │  │  ├─ test_highlight.py
   │     │  │  │  │  │  ├─ test_html.py
   │     │  │  │  │  │  ├─ test_matplotlib.py
   │     │  │  │  │  │  ├─ test_non_unique.py
   │     │  │  │  │  │  ├─ test_style.py
   │     │  │  │  │  │  ├─ test_tooltip.py
   │     │  │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  │  ├─ test_to_typst.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_bar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_exceptions.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_highlight.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_matplotlib.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_non_unique.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tooltip.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_typst.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_console.py
   │     │  │  │  │  ├─ test_css.py
   │     │  │  │  │  ├─ test_eng_formatting.py
   │     │  │  │  │  ├─ test_format.py
   │     │  │  │  │  ├─ test_ipython_compat.py
   │     │  │  │  │  ├─ test_printing.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_excel.py
   │     │  │  │  │  ├─ test_to_html.py
   │     │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  ├─ test_to_markdown.py
   │     │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_console.cpython-313.pyc
   │     │  │  │  │     ├─ test_css.cpython-313.pyc
   │     │  │  │  │     ├─ test_eng_formatting.cpython-313.pyc
   │     │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │     ├─ test_ipython_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_excel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_html.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_markdown.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ generate_legacy_storage_files.py
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_deprecated_kwargs.py
   │     │  │  │  │  ├─ test_json_table_schema.py
   │     │  │  │  │  ├─ test_json_table_schema_ext_dtype.py
   │     │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  ├─ test_pandas.py
   │     │  │  │  │  ├─ test_readlines.py
   │     │  │  │  │  ├─ test_ujson.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_deprecated_kwargs.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema_ext_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │     ├─ test_pandas.cpython-313.pyc
   │     │  │  │  │     ├─ test_readlines.cpython-313.pyc
   │     │  │  │  │     ├─ test_ujson.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ parser
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ test_chunksize.py
   │     │  │  │  │  │  ├─ test_common_basic.py
   │     │  │  │  │  │  ├─ test_data_list.py
   │     │  │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  │  ├─ test_file_buffer_url.py
   │     │  │  │  │  │  ├─ test_float.py
   │     │  │  │  │  │  ├─ test_index.py
   │     │  │  │  │  │  ├─ test_inf.py
   │     │  │  │  │  │  ├─ test_ints.py
   │     │  │  │  │  │  ├─ test_iterator.py
   │     │  │  │  │  │  ├─ test_read_errors.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_chunksize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_common_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_data_list.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_file_buffer_url.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_float.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_inf.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_ints.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_iterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_read_errors.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ dtypes
   │     │  │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  │  ├─ test_dtypes_basic.py
   │     │  │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_dtypes_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_comment.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_concatenate_chunks.py
   │     │  │  │  │  ├─ test_converters.py
   │     │  │  │  │  ├─ test_c_parser_only.py
   │     │  │  │  │  ├─ test_dialect.py
   │     │  │  │  │  ├─ test_encoding.py
   │     │  │  │  │  ├─ test_header.py
   │     │  │  │  │  ├─ test_index_col.py
   │     │  │  │  │  ├─ test_mangle_dupes.py
   │     │  │  │  │  ├─ test_multi_thread.py
   │     │  │  │  │  ├─ test_na_values.py
   │     │  │  │  │  ├─ test_network.py
   │     │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  ├─ test_python_parser_only.py
   │     │  │  │  │  ├─ test_quoting.py
   │     │  │  │  │  ├─ test_read_fwf.py
   │     │  │  │  │  ├─ test_skiprows.py
   │     │  │  │  │  ├─ test_textreader.py
   │     │  │  │  │  ├─ test_unsupported.py
   │     │  │  │  │  ├─ test_upcast.py
   │     │  │  │  │  ├─ usecols
   │     │  │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  │  ├─ test_strings.py
   │     │  │  │  │  │  ├─ test_usecols_basic.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_usecols_basic.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_comment.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_concatenate_chunks.cpython-313.pyc
   │     │  │  │  │     ├─ test_converters.cpython-313.pyc
   │     │  │  │  │     ├─ test_c_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_dialect.cpython-313.pyc
   │     │  │  │  │     ├─ test_encoding.cpython-313.pyc
   │     │  │  │  │     ├─ test_header.cpython-313.pyc
   │     │  │  │  │     ├─ test_index_col.cpython-313.pyc
   │     │  │  │  │     ├─ test_mangle_dupes.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi_thread.cpython-313.pyc
   │     │  │  │  │     ├─ test_na_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_network.cpython-313.pyc
   │     │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │     ├─ test_python_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_quoting.cpython-313.pyc
   │     │  │  │  │     ├─ test_read_fwf.cpython-313.pyc
   │     │  │  │  │     ├─ test_skiprows.cpython-313.pyc
   │     │  │  │  │     ├─ test_textreader.cpython-313.pyc
   │     │  │  │  │     ├─ test_unsupported.cpython-313.pyc
   │     │  │  │  │     ├─ test_upcast.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pytables
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_complex.py
   │     │  │  │  │  ├─ test_errors.py
   │     │  │  │  │  ├─ test_file_handling.py
   │     │  │  │  │  ├─ test_keys.py
   │     │  │  │  │  ├─ test_put.py
   │     │  │  │  │  ├─ test_pytables_missing.py
   │     │  │  │  │  ├─ test_read.py
   │     │  │  │  │  ├─ test_retain_attributes.py
   │     │  │  │  │  ├─ test_round_trip.py
   │     │  │  │  │  ├─ test_select.py
   │     │  │  │  │  ├─ test_store.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ test_time_series.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_complex.cpython-313.pyc
   │     │  │  │  │     ├─ test_errors.cpython-313.pyc
   │     │  │  │  │     ├─ test_file_handling.cpython-313.pyc
   │     │  │  │  │     ├─ test_keys.cpython-313.pyc
   │     │  │  │  │     ├─ test_put.cpython-313.pyc
   │     │  │  │  │     ├─ test_pytables_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_read.cpython-313.pyc
   │     │  │  │  │     ├─ test_retain_attributes.cpython-313.pyc
   │     │  │  │  │     ├─ test_round_trip.cpython-313.pyc
   │     │  │  │  │     ├─ test_select.cpython-313.pyc
   │     │  │  │  │     ├─ test_store.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     ├─ test_time_series.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sas
   │     │  │  │  │  ├─ test_byteswap.py
   │     │  │  │  │  ├─ test_sas.py
   │     │  │  │  │  ├─ test_sas7bdat.py
   │     │  │  │  │  ├─ test_xport.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_byteswap.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas7bdat.cpython-313.pyc
   │     │  │  │  │     ├─ test_xport.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_clipboard.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_compression.py
   │     │  │  │  ├─ test_feather.py
   │     │  │  │  ├─ test_fsspec.py
   │     │  │  │  ├─ test_gcs.py
   │     │  │  │  ├─ test_html.py
   │     │  │  │  ├─ test_http_headers.py
   │     │  │  │  ├─ test_iceberg.py
   │     │  │  │  ├─ test_orc.py
   │     │  │  │  ├─ test_parquet.py
   │     │  │  │  ├─ test_pickle.py
   │     │  │  │  ├─ test_s3.py
   │     │  │  │  ├─ test_spss.py
   │     │  │  │  ├─ test_sql.py
   │     │  │  │  ├─ test_stata.py
   │     │  │  │  ├─ xml
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_to_xml.py
   │     │  │  │  │  ├─ test_xml.py
   │     │  │  │  │  ├─ test_xml_dtypes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml_dtypes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ generate_legacy_storage_files.cpython-313.pyc
   │     │  │  │     ├─ test_clipboard.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │     ├─ test_feather.cpython-313.pyc
   │     │  │  │     ├─ test_fsspec.cpython-313.pyc
   │     │  │  │     ├─ test_gcs.cpython-313.pyc
   │     │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │     ├─ test_http_headers.cpython-313.pyc
   │     │  │  │     ├─ test_iceberg.cpython-313.pyc
   │     │  │  │     ├─ test_orc.cpython-313.pyc
   │     │  │  │     ├─ test_parquet.cpython-313.pyc
   │     │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │     ├─ test_s3.cpython-313.pyc
   │     │  │  │     ├─ test_spss.cpython-313.pyc
   │     │  │  │     ├─ test_sql.cpython-313.pyc
   │     │  │  │     ├─ test_stata.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ libs
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_join.py
   │     │  │  │  ├─ test_lib.py
   │     │  │  │  ├─ test_libalgos.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │     ├─ test_lib.cpython-313.pyc
   │     │  │  │     ├─ test_libalgos.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ plotting
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ frame
   │     │  │  │  │  ├─ test_frame.py
   │     │  │  │  │  ├─ test_frame_color.py
   │     │  │  │  │  ├─ test_frame_groupby.py
   │     │  │  │  │  ├─ test_frame_legend.py
   │     │  │  │  │  ├─ test_frame_subplots.py
   │     │  │  │  │  ├─ test_hist_box_by.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_color.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_groupby.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_legend.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_subplots.cpython-313.pyc
   │     │  │  │  │     ├─ test_hist_box_by.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_backend.py
   │     │  │  │  ├─ test_boxplot_method.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_converter.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_hist_method.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_style.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_backend.cpython-313.pyc
   │     │  │  │     ├─ test_boxplot_method.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_converter.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_hist_method.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reductions
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_stat_reductions.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_stat_reductions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_datetime_index.py
   │     │  │  │  ├─ test_period_index.py
   │     │  │  │  ├─ test_resampler_grouper.py
   │     │  │  │  ├─ test_resample_api.py
   │     │  │  │  ├─ test_timedelta.py
   │     │  │  │  ├─ test_time_grouper.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_datetime_index.cpython-313.pyc
   │     │  │  │     ├─ test_period_index.cpython-313.pyc
   │     │  │  │     ├─ test_resampler_grouper.cpython-313.pyc
   │     │  │  │     ├─ test_resample_api.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │     ├─ test_time_grouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reshape
   │     │  │  │  ├─ concat
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_append_common.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_dataframe.py
   │     │  │  │  │  ├─ test_datetimes.py
   │     │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_invalid.py
   │     │  │  │  │  ├─ test_series.py
   │     │  │  │  │  ├─ test_sort.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_append_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_dataframe.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_invalid.cpython-313.pyc
   │     │  │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ merge
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_merge.py
   │     │  │  │  │  ├─ test_merge_antijoin.py
   │     │  │  │  │  ├─ test_merge_asof.py
   │     │  │  │  │  ├─ test_merge_cross.py
   │     │  │  │  │  ├─ test_merge_index_as_string.py
   │     │  │  │  │  ├─ test_merge_ordered.py
   │     │  │  │  │  ├─ test_multi.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_antijoin.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_cross.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_index_as_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_ordered.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_crosstab.py
   │     │  │  │  ├─ test_cut.py
   │     │  │  │  ├─ test_from_dummies.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_melt.py
   │     │  │  │  ├─ test_pivot.py
   │     │  │  │  ├─ test_pivot_multilevel.py
   │     │  │  │  ├─ test_qcut.py
   │     │  │  │  ├─ test_union_categoricals.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_crosstab.cpython-313.pyc
   │     │  │  │     ├─ test_cut.cpython-313.pyc
   │     │  │  │     ├─ test_from_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_melt.cpython-313.pyc
   │     │  │  │     ├─ test_pivot.cpython-313.pyc
   │     │  │  │     ├─ test_pivot_multilevel.cpython-313.pyc
   │     │  │  │     ├─ test_qcut.cpython-313.pyc
   │     │  │  │     ├─ test_union_categoricals.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ scalar
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_nat.py
   │     │  │  │  ├─ test_na_scalar.py
   │     │  │  │  ├─ timedelta
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ timestamp
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_timestamp_method.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_timestamp_method.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparisons.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timestamp.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparisons.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │     ├─ test_na_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ series
   │     │  │  │  ├─ accessors
   │     │  │  │  │  ├─ test_cat_accessor.py
   │     │  │  │  │  ├─ test_dt_accessor.py
   │     │  │  │  │  ├─ test_list_accessor.py
   │     │  │  │  │  ├─ test_sparse_accessor.py
   │     │  │  │  │  ├─ test_struct_accessor.py
   │     │  │  │  │  ├─ test_str_accessor.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_cat_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_dt_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_list_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_sparse_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_struct_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_str_accessor.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_argsort.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_autocorr.py
   │     │  │  │  │  ├─ test_between.py
   │     │  │  │  │  ├─ test_case_when.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_isna.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_is_unique.py
   │     │  │  │  │  ├─ test_item.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_nunique.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_set_name.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_tolist.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  ├─ test_unstack.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_argsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_autocorr.cpython-313.pyc
   │     │  │  │  │     ├─ test_between.cpython-313.pyc
   │     │  │  │  │     ├─ test_case_when.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_isna.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_item.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nunique.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_name.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_tolist.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_unstack.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_arrow_interface.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_formats.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_arrow_interface.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_case_justify.py
   │     │  │  │  ├─ test_cat.py
   │     │  │  │  ├─ test_extract.py
   │     │  │  │  ├─ test_find_replace.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_split_partition.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_string_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_case_justify.cpython-313.pyc
   │     │  │  │     ├─ test_cat.cpython-313.pyc
   │     │  │  │     ├─ test_extract.cpython-313.pyc
   │     │  │  │     ├─ test_find_replace.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_split_partition.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_string_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ test_aggregation.py
   │     │  │  ├─ test_algos.py
   │     │  │  ├─ test_col.py
   │     │  │  ├─ test_common.py
   │     │  │  ├─ test_downstream.py
   │     │  │  ├─ test_errors.py
   │     │  │  ├─ test_expressions.py
   │     │  │  ├─ test_flags.py
   │     │  │  ├─ test_multilevel.py
   │     │  │  ├─ test_nanops.py
   │     │  │  ├─ test_optional_dependency.py
   │     │  │  ├─ test_register_accessor.py
   │     │  │  ├─ test_sorting.py
   │     │  │  ├─ test_take.py
   │     │  │  ├─ tools
   │     │  │  │  ├─ test_to_datetime.py
   │     │  │  │  ├─ test_to_numeric.py
   │     │  │  │  ├─ test_to_time.py
   │     │  │  │  ├─ test_to_timedelta.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_to_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_to_time.cpython-313.pyc
   │     │  │  │     ├─ test_to_timedelta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tseries
   │     │  │  │  ├─ frequencies
   │     │  │  │  │  ├─ test_frequencies.py
   │     │  │  │  │  ├─ test_freq_code.py
   │     │  │  │  │  ├─ test_inference.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frequencies.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_code.cpython-313.pyc
   │     │  │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ holiday
   │     │  │  │  │  ├─ test_calendar.py
   │     │  │  │  │  ├─ test_federal.py
   │     │  │  │  │  ├─ test_holiday.py
   │     │  │  │  │  ├─ test_observance.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_calendar.cpython-313.pyc
   │     │  │  │  │     ├─ test_federal.cpython-313.pyc
   │     │  │  │  │     ├─ test_holiday.cpython-313.pyc
   │     │  │  │  │     ├─ test_observance.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ offsets
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ test_business_day.py
   │     │  │  │  │  ├─ test_business_halfyear.py
   │     │  │  │  │  ├─ test_business_hour.py
   │     │  │  │  │  ├─ test_business_month.py
   │     │  │  │  │  ├─ test_business_quarter.py
   │     │  │  │  │  ├─ test_business_year.py
   │     │  │  │  │  ├─ test_common.py
   │     │  │  │  │  ├─ test_custom_business_day.py
   │     │  │  │  │  ├─ test_custom_business_hour.py
   │     │  │  │  │  ├─ test_custom_business_month.py
   │     │  │  │  │  ├─ test_dst.py
   │     │  │  │  │  ├─ test_easter.py
   │     │  │  │  │  ├─ test_fiscal.py
   │     │  │  │  │  ├─ test_halfyear.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_month.py
   │     │  │  │  │  ├─ test_offsets.py
   │     │  │  │  │  ├─ test_offsets_properties.py
   │     │  │  │  │  ├─ test_quarter.py
   │     │  │  │  │  ├─ test_ticks.py
   │     │  │  │  │  ├─ test_week.py
   │     │  │  │  │  ├─ test_year.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_halfyear.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_year.cpython-313.pyc
   │     │  │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_dst.cpython-313.pyc
   │     │  │  │  │     ├─ test_easter.cpython-313.pyc
   │     │  │  │  │     ├─ test_fiscal.cpython-313.pyc
   │     │  │  │  │     ├─ test_halfyear.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets_properties.cpython-313.pyc
   │     │  │  │  │     ├─ test_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_ticks.cpython-313.pyc
   │     │  │  │  │     ├─ test_week.cpython-313.pyc
   │     │  │  │  │     ├─ test_year.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_array_to_datetime.py
   │     │  │  │  ├─ test_ccalendar.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fields.py
   │     │  │  │  ├─ test_libfrequencies.py
   │     │  │  │  ├─ test_liboffsets.py
   │     │  │  │  ├─ test_npy_units.py
   │     │  │  │  ├─ test_np_datetime.py
   │     │  │  │  ├─ test_parse_iso8601.py
   │     │  │  │  ├─ test_parsing.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_resolution.py
   │     │  │  │  ├─ test_strptime.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ test_timezones.py
   │     │  │  │  ├─ test_to_offset.py
   │     │  │  │  ├─ test_tzconversion.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_array_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_ccalendar.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fields.cpython-313.pyc
   │     │  │  │     ├─ test_libfrequencies.cpython-313.pyc
   │     │  │  │     ├─ test_liboffsets.cpython-313.pyc
   │     │  │  │     ├─ test_npy_units.cpython-313.pyc
   │     │  │  │     ├─ test_np_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_parse_iso8601.cpython-313.pyc
   │     │  │  │     ├─ test_parsing.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │     ├─ test_strptime.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │     ├─ test_to_offset.cpython-313.pyc
   │     │  │  │     ├─ test_tzconversion.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_assert_almost_equal.py
   │     │  │  │  ├─ test_assert_attr_equal.py
   │     │  │  │  ├─ test_assert_categorical_equal.py
   │     │  │  │  ├─ test_assert_extension_array_equal.py
   │     │  │  │  ├─ test_assert_frame_equal.py
   │     │  │  │  ├─ test_assert_index_equal.py
   │     │  │  │  ├─ test_assert_interval_array_equal.py
   │     │  │  │  ├─ test_assert_numpy_array_equal.py
   │     │  │  │  ├─ test_assert_produces_warning.py
   │     │  │  │  ├─ test_assert_series_equal.py
   │     │  │  │  ├─ test_deprecate.py
   │     │  │  │  ├─ test_deprecate_kwarg.py
   │     │  │  │  ├─ test_deprecate_nonkeyword_arguments.py
   │     │  │  │  ├─ test_doc.py
   │     │  │  │  ├─ test_hashing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_rewrite_warning.py
   │     │  │  │  ├─ test_shares_memory.py
   │     │  │  │  ├─ test_show_versions.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ test_validate_args.py
   │     │  │  │  ├─ test_validate_args_and_kwargs.py
   │     │  │  │  ├─ test_validate_inclusive.py
   │     │  │  │  ├─ test_validate_kwargs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_assert_almost_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_attr_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_categorical_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_extension_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_frame_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_index_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_interval_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_numpy_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_produces_warning.cpython-313.pyc
   │     │  │  │     ├─ test_assert_series_equal.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_kwarg.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_nonkeyword_arguments.cpython-313.pyc
   │     │  │  │     ├─ test_doc.cpython-313.pyc
   │     │  │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_rewrite_warning.cpython-313.pyc
   │     │  │  │     ├─ test_shares_memory.cpython-313.pyc
   │     │  │  │     ├─ test_show_versions.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args_and_kwargs.cpython-313.pyc
   │     │  │  │     ├─ test_validate_inclusive.cpython-313.pyc
   │     │  │  │     ├─ test_validate_kwargs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ moments
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_moments_consistency_ewm.py
   │     │  │  │  │  ├─ test_moments_consistency_expanding.py
   │     │  │  │  │  ├─ test_moments_consistency_rolling.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_ewm.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_expanding.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_rolling.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_base_indexer.py
   │     │  │  │  ├─ test_cython_aggregations.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_ewm.py
   │     │  │  │  ├─ test_expanding.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_online.py
   │     │  │  │  ├─ test_pairwise.py
   │     │  │  │  ├─ test_rolling.py
   │     │  │  │  ├─ test_rolling_functions.py
   │     │  │  │  ├─ test_rolling_quantile.py
   │     │  │  │  ├─ test_rolling_skew_kurt.py
   │     │  │  │  ├─ test_timeseries_window.py
   │     │  │  │  ├─ test_win_type.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_base_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_cython_aggregations.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_ewm.cpython-313.pyc
   │     │  │  │     ├─ test_expanding.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_online.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise.cpython-313.pyc
   │     │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_functions.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_quantile.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_skew_kurt.cpython-313.pyc
   │     │  │  │     ├─ test_timeseries_window.cpython-313.pyc
   │     │  │  │     ├─ test_win_type.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_aggregation.cpython-313.pyc
   │     │  │     ├─ test_algos.cpython-313.pyc
   │     │  │     ├─ test_col.cpython-313.pyc
   │     │  │     ├─ test_common.cpython-313.pyc
   │     │  │     ├─ test_downstream.cpython-313.pyc
   │     │  │     ├─ test_errors.cpython-313.pyc
   │     │  │     ├─ test_expressions.cpython-313.pyc
   │     │  │     ├─ test_flags.cpython-313.pyc
   │     │  │     ├─ test_multilevel.cpython-313.pyc
   │     │  │     ├─ test_nanops.cpython-313.pyc
   │     │  │     ├─ test_optional_dependency.cpython-313.pyc
   │     │  │     ├─ test_register_accessor.cpython-313.pyc
   │     │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │     ├─ test_take.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tseries
   │     │  │  ├─ api.py
   │     │  │  ├─ frequencies.py
   │     │  │  ├─ holiday.py
   │     │  │  ├─ offsets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ frequencies.cpython-313.pyc
   │     │  │     ├─ holiday.cpython-313.pyc
   │     │  │     ├─ offsets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ util
   │     │  │  ├─ version
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _doctools.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _print_versions.py
   │     │  │  ├─ _tester.py
   │     │  │  ├─ _test_decorators.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _doctools.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _print_versions.cpython-313.pyc
   │     │  │     ├─ _tester.cpython-313.pyc
   │     │  │     ├─ _test_decorators.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _config
   │     │  │  ├─ config.py
   │     │  │  ├─ dates.py
   │     │  │  ├─ display.py
   │     │  │  ├─ localization.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dates.cpython-313.pyc
   │     │  │     ├─ display.cpython-313.pyc
   │     │  │     ├─ localization.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _libs
   │     │  │  ├─ algos.cp313-win_amd64.lib
   │     │  │  ├─ algos.cp313-win_amd64.pyd
   │     │  │  ├─ algos.pyi
   │     │  │  ├─ arrays.cp313-win_amd64.lib
   │     │  │  ├─ arrays.cp313-win_amd64.pyd
   │     │  │  ├─ arrays.pyi
   │     │  │  ├─ byteswap.cp313-win_amd64.lib
   │     │  │  ├─ byteswap.cp313-win_amd64.pyd
   │     │  │  ├─ byteswap.pyi
   │     │  │  ├─ groupby.cp313-win_amd64.lib
   │     │  │  ├─ groupby.cp313-win_amd64.pyd
   │     │  │  ├─ groupby.pyi
   │     │  │  ├─ hashing.cp313-win_amd64.lib
   │     │  │  ├─ hashing.cp313-win_amd64.pyd
   │     │  │  ├─ hashing.pyi
   │     │  │  ├─ hashtable.cp313-win_amd64.lib
   │     │  │  ├─ hashtable.cp313-win_amd64.pyd
   │     │  │  ├─ hashtable.pyi
   │     │  │  ├─ index.cp313-win_amd64.lib
   │     │  │  ├─ index.cp313-win_amd64.pyd
   │     │  │  ├─ index.pyi
   │     │  │  ├─ indexing.cp313-win_amd64.lib
   │     │  │  ├─ indexing.cp313-win_amd64.pyd
   │     │  │  ├─ indexing.pyi
   │     │  │  ├─ internals.cp313-win_amd64.lib
   │     │  │  ├─ internals.cp313-win_amd64.pyd
   │     │  │  ├─ internals.pyi
   │     │  │  ├─ interval.cp313-win_amd64.lib
   │     │  │  ├─ interval.cp313-win_amd64.pyd
   │     │  │  ├─ interval.pyi
   │     │  │  ├─ join.cp313-win_amd64.lib
   │     │  │  ├─ join.cp313-win_amd64.pyd
   │     │  │  ├─ join.pyi
   │     │  │  ├─ json.cp313-win_amd64.lib
   │     │  │  ├─ json.cp313-win_amd64.pyd
   │     │  │  ├─ json.pyi
   │     │  │  ├─ lib.cp313-win_amd64.lib
   │     │  │  ├─ lib.cp313-win_amd64.pyd
   │     │  │  ├─ lib.pyi
   │     │  │  ├─ missing.cp313-win_amd64.lib
   │     │  │  ├─ missing.cp313-win_amd64.pyd
   │     │  │  ├─ missing.pyi
   │     │  │  ├─ ops.cp313-win_amd64.lib
   │     │  │  ├─ ops.cp313-win_amd64.pyd
   │     │  │  ├─ ops.pyi
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.lib
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.pyd
   │     │  │  ├─ ops_dispatch.pyi
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.lib
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.pyd
   │     │  │  ├─ pandas_parser.cp313-win_amd64.lib
   │     │  │  ├─ pandas_parser.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.cp313-win_amd64.lib
   │     │  │  ├─ parsers.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.pyi
   │     │  │  ├─ properties.cp313-win_amd64.lib
   │     │  │  ├─ properties.cp313-win_amd64.pyd
   │     │  │  ├─ properties.pyi
   │     │  │  ├─ reshape.cp313-win_amd64.lib
   │     │  │  ├─ reshape.cp313-win_amd64.pyd
   │     │  │  ├─ reshape.pyi
   │     │  │  ├─ sas.cp313-win_amd64.lib
   │     │  │  ├─ sas.cp313-win_amd64.pyd
   │     │  │  ├─ sas.pyi
   │     │  │  ├─ sparse.cp313-win_amd64.lib
   │     │  │  ├─ sparse.cp313-win_amd64.pyd
   │     │  │  ├─ sparse.pyi
   │     │  │  ├─ testing.cp313-win_amd64.lib
   │     │  │  ├─ testing.cp313-win_amd64.pyd
   │     │  │  ├─ testing.pyi
   │     │  │  ├─ tslib.cp313-win_amd64.lib
   │     │  │  ├─ tslib.cp313-win_amd64.pyd
   │     │  │  ├─ tslib.pyi
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ base.cp313-win_amd64.lib
   │     │  │  │  ├─ base.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.lib
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.pyi
   │     │  │  │  ├─ conversion.cp313-win_amd64.lib
   │     │  │  │  ├─ conversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ conversion.pyi
   │     │  │  │  ├─ dtypes.cp313-win_amd64.lib
   │     │  │  │  ├─ dtypes.cp313-win_amd64.pyd
   │     │  │  │  ├─ dtypes.pyi
   │     │  │  │  ├─ fields.cp313-win_amd64.lib
   │     │  │  │  ├─ fields.cp313-win_amd64.pyd
   │     │  │  │  ├─ fields.pyi
   │     │  │  │  ├─ nattype.cp313-win_amd64.lib
   │     │  │  │  ├─ nattype.cp313-win_amd64.pyd
   │     │  │  │  ├─ nattype.pyi
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.lib
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.pyd
   │     │  │  │  ├─ np_datetime.pyi
   │     │  │  │  ├─ offsets.cp313-win_amd64.lib
   │     │  │  │  ├─ offsets.cp313-win_amd64.pyd
   │     │  │  │  ├─ offsets.pyi
   │     │  │  │  ├─ parsing.cp313-win_amd64.lib
   │     │  │  │  ├─ parsing.cp313-win_amd64.pyd
   │     │  │  │  ├─ parsing.pyi
   │     │  │  │  ├─ period.cp313-win_amd64.lib
   │     │  │  │  ├─ period.cp313-win_amd64.pyd
   │     │  │  │  ├─ period.pyi
   │     │  │  │  ├─ strptime.cp313-win_amd64.lib
   │     │  │  │  ├─ strptime.cp313-win_amd64.pyd
   │     │  │  │  ├─ strptime.pyi
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.lib
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.pyd
   │     │  │  │  ├─ timedeltas.pyi
   │     │  │  │  ├─ timestamps.cp313-win_amd64.lib
   │     │  │  │  ├─ timestamps.cp313-win_amd64.pyd
   │     │  │  │  ├─ timestamps.pyi
   │     │  │  │  ├─ timezones.cp313-win_amd64.lib
   │     │  │  │  ├─ timezones.cp313-win_amd64.pyd
   │     │  │  │  ├─ timezones.pyi
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.lib
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ tzconversion.pyi
   │     │  │  │  ├─ vectorized.cp313-win_amd64.lib
   │     │  │  │  ├─ vectorized.cp313-win_amd64.pyd
   │     │  │  │  ├─ vectorized.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ aggregations.cp313-win_amd64.lib
   │     │  │  │  ├─ aggregations.cp313-win_amd64.pyd
   │     │  │  │  ├─ aggregations.pyi
   │     │  │  │  ├─ indexers.cp313-win_amd64.lib
   │     │  │  │  ├─ indexers.cp313-win_amd64.pyd
   │     │  │  │  ├─ indexers.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ writers.cp313-win_amd64.lib
   │     │  │  ├─ writers.cp313-win_amd64.pyd
   │     │  │  ├─ writers.pyi
   │     │  │  ├─ _cyutility.cp313-win_amd64.lib
   │     │  │  ├─ _cyutility.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _testing
   │     │  │  ├─ asserters.py
   │     │  │  ├─ compat.py
   │     │  │  ├─ contexts.py
   │     │  │  ├─ _hypothesis.py
   │     │  │  ├─ _io.py
   │     │  │  ├─ _warnings.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asserters.cpython-313.pyc
   │     │  │     ├─ compat.cpython-313.pyc
   │     │  │     ├─ contexts.cpython-313.pyc
   │     │  │     ├─ _hypothesis.cpython-313.pyc
   │     │  │     ├─ _io.cpython-313.pyc
   │     │  │     ├─ _warnings.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _typing.py
   │     │  ├─ _version.py
   │     │  ├─ _version_meson.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ _typing.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _version_meson.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pandas-3.0.1.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ pandas.libs
   │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
   │     ├─ pip
   │     │  ├─ py.typed
   │     │  ├─ _internal
   │     │  │  ├─ build_env.py
   │     │  │  ├─ cache.py
   │     │  │  ├─ cli
   │     │  │  │  ├─ autocompletion.py
   │     │  │  │  ├─ base_command.py
   │     │  │  │  ├─ cmdoptions.py
   │     │  │  │  ├─ command_context.py
   │     │  │  │  ├─ index_command.py
   │     │  │  │  ├─ main.py
   │     │  │  │  ├─ main_parser.py
   │     │  │  │  ├─ parser.py
   │     │  │  │  ├─ progress_bars.py
   │     │  │  │  ├─ req_command.py
   │     │  │  │  ├─ spinners.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ autocompletion.cpython-313.pyc
   │     │  │  │     ├─ base_command.cpython-313.pyc
   │     │  │  │     ├─ cmdoptions.cpython-313.pyc
   │     │  │  │     ├─ command_context.cpython-313.pyc
   │     │  │  │     ├─ index_command.cpython-313.pyc
   │     │  │  │     ├─ main.cpython-313.pyc
   │     │  │  │     ├─ main_parser.cpython-313.pyc
   │     │  │  │     ├─ parser.cpython-313.pyc
   │     │  │  │     ├─ progress_bars.cpython-313.pyc
   │     │  │  │     ├─ req_command.cpython-313.pyc
   │     │  │  │     ├─ spinners.cpython-313.pyc
   │     │  │  │     ├─ status_codes.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ commands
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ completion.py
   │     │  │  │  ├─ configuration.py
   │     │  │  │  ├─ debug.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ hash.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ inspect.py
   │     │  │  │  ├─ install.py
   │     │  │  │  ├─ list.py
   │     │  │  │  ├─ lock.py
   │     │  │  │  ├─ search.py
   │     │  │  │  ├─ show.py
   │     │  │  │  ├─ uninstall.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ completion.cpython-313.pyc
   │     │  │  │     ├─ configuration.cpython-313.pyc
   │     │  │  │     ├─ debug.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ hash.cpython-313.pyc
   │     │  │  │     ├─ help.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ inspect.cpython-313.pyc
   │     │  │  │     ├─ install.cpython-313.pyc
   │     │  │  │     ├─ list.cpython-313.pyc
   │     │  │  │     ├─ lock.cpython-313.pyc
   │     │  │  │     ├─ search.cpython-313.pyc
   │     │  │  │     ├─ show.cpython-313.pyc
   │     │  │  │     ├─ uninstall.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ configuration.py
   │     │  │  ├─ distributions
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ installed.py
   │     │  │  │  ├─ sdist.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ installed.cpython-313.pyc
   │     │  │  │     ├─ sdist.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ index
   │     │  │  │  ├─ collector.py
   │     │  │  │  ├─ package_finder.py
   │     │  │  │  ├─ sources.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ collector.cpython-313.pyc
   │     │  │  │     ├─ package_finder.cpython-313.pyc
   │     │  │  │     ├─ sources.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ locations
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _sysconfig.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _sysconfig.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ main.py
   │     │  │  ├─ metadata
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ importlib
   │     │  │  │  │  ├─ _compat.py
   │     │  │  │  │  ├─ _dists.py
   │     │  │  │  │  ├─ _envs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _compat.cpython-313.pyc
   │     │  │  │  │     ├─ _dists.cpython-313.pyc
   │     │  │  │  │     ├─ _envs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pkg_resources.py
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ pkg_resources.cpython-313.pyc
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ models
   │     │  │  │  ├─ candidate.py
   │     │  │  │  ├─ direct_url.py
   │     │  │  │  ├─ format_control.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ installation_report.py
   │     │  │  │  ├─ link.py
   │     │  │  │  ├─ release_control.py
   │     │  │  │  ├─ scheme.py
   │     │  │  │  ├─ search_scope.py
   │     │  │  │  ├─ selection_prefs.py
   │     │  │  │  ├─ target_python.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ candidate.cpython-313.pyc
   │     │  │  │     ├─ direct_url.cpython-313.pyc
   │     │  │  │     ├─ format_control.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ installation_report.cpython-313.pyc
   │     │  │  │     ├─ link.cpython-313.pyc
   │     │  │  │     ├─ release_control.cpython-313.pyc
   │     │  │  │     ├─ scheme.cpython-313.pyc
   │     │  │  │     ├─ search_scope.cpython-313.pyc
   │     │  │  │     ├─ selection_prefs.cpython-313.pyc
   │     │  │  │     ├─ target_python.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ network
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ lazy_wheel.py
   │     │  │  │  ├─ session.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ xmlrpc.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
   │     │  │  │     ├─ session.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ xmlrpc.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ operations
   │     │  │  │  ├─ build
   │     │  │  │  │  ├─ build_tracker.py
   │     │  │  │  │  ├─ metadata.py
   │     │  │  │  │  ├─ metadata_editable.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ wheel_editable.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
   │     │  │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ install
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ prepare.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ prepare.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyproject.py
   │     │  │  ├─ req
   │     │  │  │  ├─ constructors.py
   │     │  │  │  ├─ pep723.py
   │     │  │  │  ├─ req_dependency_group.py
   │     │  │  │  ├─ req_file.py
   │     │  │  │  ├─ req_install.py
   │     │  │  │  ├─ req_set.py
   │     │  │  │  ├─ req_uninstall.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │     ├─ pep723.cpython-313.pyc
   │     │  │  │     ├─ req_dependency_group.cpython-313.pyc
   │     │  │  │     ├─ req_file.cpython-313.pyc
   │     │  │  │     ├─ req_install.cpython-313.pyc
   │     │  │  │     ├─ req_set.cpython-313.pyc
   │     │  │  │     ├─ req_uninstall.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resolution
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ legacy
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ resolvelib
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ candidates.py
   │     │  │  │  │  ├─ factory.py
   │     │  │  │  │  ├─ found_candidates.py
   │     │  │  │  │  ├─ provider.py
   │     │  │  │  │  ├─ reporter.py
   │     │  │  │  │  ├─ requirements.py
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ candidates.cpython-313.pyc
   │     │  │  │  │     ├─ factory.cpython-313.pyc
   │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
   │     │  │  │  │     ├─ provider.cpython-313.pyc
   │     │  │  │  │     ├─ reporter.cpython-313.pyc
   │     │  │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ self_outdated_check.py
   │     │  │  ├─ utils
   │     │  │  │  ├─ appdirs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ compatibility_tags.py
   │     │  │  │  ├─ datetime.py
   │     │  │  │  ├─ deprecation.py
   │     │  │  │  ├─ direct_url_helpers.py
   │     │  │  │  ├─ egg_link.py
   │     │  │  │  ├─ entrypoints.py
   │     │  │  │  ├─ filesystem.py
   │     │  │  │  ├─ filetypes.py
   │     │  │  │  ├─ glibc.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ packaging.py
   │     │  │  │  ├─ pylock.py
   │     │  │  │  ├─ retry.py
   │     │  │  │  ├─ subprocess.py
   │     │  │  │  ├─ temp_dir.py
   │     │  │  │  ├─ unpacking.py
   │     │  │  │  ├─ urls.py
   │     │  │  │  ├─ virtualenv.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ _jaraco_text.py
   │     │  │  │  ├─ _log.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ appdirs.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
   │     │  │  │     ├─ datetime.cpython-313.pyc
   │     │  │  │     ├─ deprecation.cpython-313.pyc
   │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
   │     │  │  │     ├─ egg_link.cpython-313.pyc
   │     │  │  │     ├─ entrypoints.cpython-313.pyc
   │     │  │  │     ├─ filesystem.cpython-313.pyc
   │     │  │  │     ├─ filetypes.cpython-313.pyc
   │     │  │  │     ├─ glibc.cpython-313.pyc
   │     │  │  │     ├─ hashes.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ packaging.cpython-313.pyc
   │     │  │  │     ├─ pylock.cpython-313.pyc
   │     │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │     ├─ subprocess.cpython-313.pyc
   │     │  │  │     ├─ temp_dir.cpython-313.pyc
   │     │  │  │     ├─ unpacking.cpython-313.pyc
   │     │  │  │     ├─ urls.cpython-313.pyc
   │     │  │  │     ├─ virtualenv.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
   │     │  │  │     ├─ _log.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vcs
   │     │  │  │  ├─ bazaar.py
   │     │  │  │  ├─ git.py
   │     │  │  │  ├─ mercurial.py
   │     │  │  │  ├─ subversion.py
   │     │  │  │  ├─ versioncontrol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bazaar.cpython-313.pyc
   │     │  │  │     ├─ git.cpython-313.pyc
   │     │  │  │     ├─ mercurial.cpython-313.pyc
   │     │  │  │     ├─ subversion.cpython-313.pyc
   │     │  │  │     ├─ versioncontrol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ wheel_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ build_env.cpython-313.pyc
   │     │  │     ├─ cache.cpython-313.pyc
   │     │  │     ├─ configuration.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ pyproject.cpython-313.pyc
   │     │  │     ├─ self_outdated_check.cpython-313.pyc
   │     │  │     ├─ wheel_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _vendor
   │     │  │  ├─ cachecontrol
   │     │  │  │  ├─ adapter.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ caches
   │     │  │  │  │  ├─ file_cache.py
   │     │  │  │  │  ├─ redis_cache.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ file_cache.cpython-313.pyc
   │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ controller.py
   │     │  │  │  ├─ filewrapper.py
   │     │  │  │  ├─ heuristics.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ serialize.py
   │     │  │  │  ├─ wrapper.py
   │     │  │  │  ├─ _cmd.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ adapter.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ controller.cpython-313.pyc
   │     │  │  │     ├─ filewrapper.cpython-313.pyc
   │     │  │  │     ├─ heuristics.cpython-313.pyc
   │     │  │  │     ├─ serialize.cpython-313.pyc
   │     │  │  │     ├─ wrapper.cpython-313.pyc
   │     │  │  │     ├─ _cmd.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ certifi
   │     │  │  │  ├─ cacert.pem
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ dependency_groups
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _implementation.py
   │     │  │  │  ├─ _lint_dependency_groups.py
   │     │  │  │  ├─ _pip_wrapper.py
   │     │  │  │  ├─ _toml_compat.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _implementation.cpython-313.pyc
   │     │  │  │     ├─ _lint_dependency_groups.cpython-313.pyc
   │     │  │  │     ├─ _pip_wrapper.cpython-313.pyc
   │     │  │  │     ├─ _toml_compat.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ distlib
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ resources.py
   │     │  │  │  ├─ scripts.py
   │     │  │  │  ├─ t32.exe
   │     │  │  │  ├─ t64-arm.exe
   │     │  │  │  ├─ t64.exe
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ w32.exe
   │     │  │  │  ├─ w64-arm.exe
   │     │  │  │  ├─ w64.exe
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ resources.cpython-313.pyc
   │     │  │  │     ├─ scripts.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ distro
   │     │  │  │  ├─ distro.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ distro.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ idna
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ idnadata.py
   │     │  │  │  ├─ intranges.py
   │     │  │  │  ├─ LICENSE.md
   │     │  │  │  ├─ package_data.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ uts46data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ codec.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ idnadata.cpython-313.pyc
   │     │  │  │     ├─ intranges.cpython-313.pyc
   │     │  │  │     ├─ package_data.cpython-313.pyc
   │     │  │  │     ├─ uts46data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ msgpack
   │     │  │  │  ├─ COPYING
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ ext.py
   │     │  │  │  ├─ fallback.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ ext.cpython-313.pyc
   │     │  │  │     ├─ fallback.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ packaging
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ LICENSE.APACHE
   │     │  │  │  ├─ LICENSE.BSD
   │     │  │  │  ├─ licenses
   │     │  │  │  │  ├─ _spdx.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _spdx.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ pylock.py
   │     │  │  │  ├─ requirements.py
   │     │  │  │  ├─ specifiers.py
   │     │  │  │  ├─ tags.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ _elffile.py
   │     │  │  │  ├─ _manylinux.py
   │     │  │  │  ├─ _musllinux.py
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _structures.py
   │     │  │  │  ├─ _tokenizer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ markers.cpython-313.pyc
   │     │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │     ├─ pylock.cpython-313.pyc
   │     │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │     ├─ specifiers.cpython-313.pyc
   │     │  │  │     ├─ tags.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ _elffile.cpython-313.pyc
   │     │  │  │     ├─ _manylinux.cpython-313.pyc
   │     │  │  │     ├─ _musllinux.cpython-313.pyc
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _structures.cpython-313.pyc
   │     │  │  │     ├─ _tokenizer.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pkg_resources
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ platformdirs
   │     │  │  │  ├─ android.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ macos.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ unix.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ android.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ macos.cpython-313.pyc
   │     │  │  │     ├─ unix.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ windows.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pygments
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ filter.py
   │     │  │  │  ├─ filters
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formatter.py
   │     │  │  │  ├─ formatters
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ lexer.py
   │     │  │  │  ├─ lexers
   │     │  │  │  │  ├─ python.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ python.cpython-313.pyc
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ modeline.py
   │     │  │  │  ├─ plugin.py
   │     │  │  │  ├─ regexopt.py
   │     │  │  │  ├─ scanner.py
   │     │  │  │  ├─ sphinxext.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styles
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ token.py
   │     │  │  │  ├─ unistring.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ filter.cpython-313.pyc
   │     │  │  │     ├─ formatter.cpython-313.pyc
   │     │  │  │     ├─ lexer.cpython-313.pyc
   │     │  │  │     ├─ modeline.cpython-313.pyc
   │     │  │  │     ├─ plugin.cpython-313.pyc
   │     │  │  │     ├─ regexopt.cpython-313.pyc
   │     │  │  │     ├─ scanner.cpython-313.pyc
   │     │  │  │     ├─ sphinxext.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ token.cpython-313.pyc
   │     │  │  │     ├─ unistring.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pyproject_hooks
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _impl.py
   │     │  │  │  ├─ _in_process
   │     │  │  │  │  ├─ _in_process.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _in_process.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ README.rst
   │     │  │  ├─ requests
   │     │  │  │  ├─ adapters.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ certs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ cookies.py
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ hooks.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ models.py
   │     │  │  │  ├─ packages.py
   │     │  │  │  ├─ sessions.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ structures.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ _internal_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __pycache__
   │     │  │  │  │  ├─ adapters.cpython-313.pyc
   │     │  │  │  │  ├─ api.cpython-313.pyc
   │     │  │  │  │  ├─ auth.cpython-313.pyc
   │     │  │  │  │  ├─ certs.cpython-313.pyc
   │     │  │  │  │  ├─ compat.cpython-313.pyc
   │     │  │  │  │  ├─ cookies.cpython-313.pyc
   │     │  │  │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  │  │  ├─ help.cpython-313.pyc
   │     │  │  │  │  ├─ hooks.cpython-313.pyc
   │     │  │  │  │  ├─ models.cpython-313.pyc
   │     │  │  │  │  ├─ packages.cpython-313.pyc
   │     │  │  │  │  ├─ sessions.cpython-313.pyc
   │     │  │  │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  │  │  ├─ structures.cpython-313.pyc
   │     │  │  │  │  ├─ utils.cpython-313.pyc
   │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  │  └─ __version__.py
   │     │  │  ├─ resolvelib
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ providers.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ reporters.py
   │     │  │  │  ├─ resolvers
   │     │  │  │  │  ├─ abstract.py
   │     │  │  │  │  ├─ criterion.py
   │     │  │  │  │  ├─ exceptions.py
   │     │  │  │  │  ├─ resolution.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ abstract.cpython-313.pyc
   │     │  │  │  │     ├─ criterion.cpython-313.pyc
   │     │  │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │  │     ├─ resolution.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ structs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ providers.cpython-313.pyc
   │     │  │  │     ├─ reporters.cpython-313.pyc
   │     │  │  │     ├─ structs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ rich
   │     │  │  │  ├─ abc.py
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ ansi.py
   │     │  │  │  ├─ bar.py
   │     │  │  │  ├─ box.py
   │     │  │  │  ├─ cells.py
   │     │  │  │  ├─ color.py
   │     │  │  │  ├─ color_triplet.py
   │     │  │  │  ├─ columns.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ constrain.py
   │     │  │  │  ├─ containers.py
   │     │  │  │  ├─ control.py
   │     │  │  │  ├─ default_styles.py
   │     │  │  │  ├─ diagnose.py
   │     │  │  │  ├─ emoji.py
   │     │  │  │  ├─ errors.py
   │     │  │  │  ├─ filesize.py
   │     │  │  │  ├─ file_proxy.py
   │     │  │  │  ├─ highlighter.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ jupyter.py
   │     │  │  │  ├─ layout.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ live.py
   │     │  │  │  ├─ live_render.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ markup.py
   │     │  │  │  ├─ measure.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ pager.py
   │     │  │  │  ├─ palette.py
   │     │  │  │  ├─ panel.py
   │     │  │  │  ├─ pretty.py
   │     │  │  │  ├─ progress.py
   │     │  │  │  ├─ progress_bar.py
   │     │  │  │  ├─ prompt.py
   │     │  │  │  ├─ protocol.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ region.py
   │     │  │  │  ├─ repr.py
   │     │  │  │  ├─ rule.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ screen.py
   │     │  │  │  ├─ segment.py
   │     │  │  │  ├─ spinner.py
   │     │  │  │  ├─ status.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styled.py
   │     │  │  │  ├─ syntax.py
   │     │  │  │  ├─ table.py
   │     │  │  │  ├─ terminal_theme.py
   │     │  │  │  ├─ text.py
   │     │  │  │  ├─ theme.py
   │     │  │  │  ├─ themes.py
   │     │  │  │  ├─ traceback.py
   │     │  │  │  ├─ tree.py
   │     │  │  │  ├─ _cell_widths.py
   │     │  │  │  ├─ _emoji_codes.py
   │     │  │  │  ├─ _emoji_replace.py
   │     │  │  │  ├─ _export_format.py
   │     │  │  │  ├─ _extension.py
   │     │  │  │  ├─ _fileno.py
   │     │  │  │  ├─ _inspect.py
   │     │  │  │  ├─ _log_render.py
   │     │  │  │  ├─ _loop.py
   │     │  │  │  ├─ _null_file.py
   │     │  │  │  ├─ _palettes.py
   │     │  │  │  ├─ _pick.py
   │     │  │  │  ├─ _ratio.py
   │     │  │  │  ├─ _spinners.py
   │     │  │  │  ├─ _stack.py
   │     │  │  │  ├─ _timer.py
   │     │  │  │  ├─ _win32_console.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ _windows_renderer.py
   │     │  │  │  ├─ _wrap.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ abc.cpython-313.pyc
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ ansi.cpython-313.pyc
   │     │  │  │     ├─ bar.cpython-313.pyc
   │     │  │  │     ├─ box.cpython-313.pyc
   │     │  │  │     ├─ cells.cpython-313.pyc
   │     │  │  │     ├─ color.cpython-313.pyc
   │     │  │  │     ├─ color_triplet.cpython-313.pyc
   │     │  │  │     ├─ columns.cpython-313.pyc
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ constrain.cpython-313.pyc
   │     │  │  │     ├─ containers.cpython-313.pyc
   │     │  │  │     ├─ control.cpython-313.pyc
   │     │  │  │     ├─ default_styles.cpython-313.pyc
   │     │  │  │     ├─ diagnose.cpython-313.pyc
   │     │  │  │     ├─ emoji.cpython-313.pyc
   │     │  │  │     ├─ errors.cpython-313.pyc
   │     │  │  │     ├─ filesize.cpython-313.pyc
   │     │  │  │     ├─ file_proxy.cpython-313.pyc
   │     │  │  │     ├─ highlighter.cpython-313.pyc
   │     │  │  │     ├─ json.cpython-313.pyc
   │     │  │  │     ├─ jupyter.cpython-313.pyc
   │     │  │  │     ├─ layout.cpython-313.pyc
   │     │  │  │     ├─ live.cpython-313.pyc
   │     │  │  │     ├─ live_render.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ markup.cpython-313.pyc
   │     │  │  │     ├─ measure.cpython-313.pyc
   │     │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │     ├─ pager.cpython-313.pyc
   │     │  │  │     ├─ palette.cpython-313.pyc
   │     │  │  │     ├─ panel.cpython-313.pyc
   │     │  │  │     ├─ pretty.cpython-313.pyc
   │     │  │  │     ├─ progress.cpython-313.pyc
   │     │  │  │     ├─ progress_bar.cpython-313.pyc
   │     │  │  │     ├─ prompt.cpython-313.pyc
   │     │  │  │     ├─ protocol.cpython-313.pyc
   │     │  │  │     ├─ region.cpython-313.pyc
   │     │  │  │     ├─ repr.cpython-313.pyc
   │     │  │  │     ├─ rule.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     ├─ screen.cpython-313.pyc
   │     │  │  │     ├─ segment.cpython-313.pyc
   │     │  │  │     ├─ spinner.cpython-313.pyc
   │     │  │  │     ├─ status.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ styled.cpython-313.pyc
   │     │  │  │     ├─ syntax.cpython-313.pyc
   │     │  │  │     ├─ table.cpython-313.pyc
   │     │  │  │     ├─ terminal_theme.cpython-313.pyc
   │     │  │  │     ├─ text.cpython-313.pyc
   │     │  │  │     ├─ theme.cpython-313.pyc
   │     │  │  │     ├─ themes.cpython-313.pyc
   │     │  │  │     ├─ traceback.cpython-313.pyc
   │     │  │  │     ├─ tree.cpython-313.pyc
   │     │  │  │     ├─ _cell_widths.cpython-313.pyc
   │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
   │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
   │     │  │  │     ├─ _export_format.cpython-313.pyc
   │     │  │  │     ├─ _extension.cpython-313.pyc
   │     │  │  │     ├─ _fileno.cpython-313.pyc
   │     │  │  │     ├─ _inspect.cpython-313.pyc
   │     │  │  │     ├─ _log_render.cpython-313.pyc
   │     │  │  │     ├─ _loop.cpython-313.pyc
   │     │  │  │     ├─ _null_file.cpython-313.pyc
   │     │  │  │     ├─ _palettes.cpython-313.pyc
   │     │  │  │     ├─ _pick.cpython-313.pyc
   │     │  │  │     ├─ _ratio.cpython-313.pyc
   │     │  │  │     ├─ _spinners.cpython-313.pyc
   │     │  │  │     ├─ _stack.cpython-313.pyc
   │     │  │  │     ├─ _timer.cpython-313.pyc
   │     │  │  │     ├─ _win32_console.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
   │     │  │  │     ├─ _wrap.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ tomli
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _re.py
   │     │  │  │  ├─ _types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _re.cpython-313.pyc
   │     │  │  │     ├─ _types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tomli_w
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _writer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _writer.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ truststore
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _api.py
   │     │  │  │  ├─ _macos.py
   │     │  │  │  ├─ _openssl.py
   │     │  │  │  ├─ _ssl_constants.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _api.cpython-313.pyc
   │     │  │  │     ├─ _macos.cpython-313.pyc
   │     │  │  │     ├─ _openssl.cpython-313.pyc
   │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ urllib3
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ connectionpool.py
   │     │  │  │  ├─ contrib
   │     │  │  │  │  ├─ appengine.py
   │     │  │  │  │  ├─ ntlmpool.py
   │     │  │  │  │  ├─ pyopenssl.py
   │     │  │  │  │  ├─ securetransport.py
   │     │  │  │  │  ├─ socks.py
   │     │  │  │  │  ├─ _appengine_environ.py
   │     │  │  │  │  ├─ _securetransport
   │     │  │  │  │  │  ├─ bindings.py
   │     │  │  │  │  │  ├─ low_level.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
   │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ appengine.cpython-313.pyc
   │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
   │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │  │  │     ├─ securetransport.cpython-313.pyc
   │     │  │  │  │     ├─ socks.cpython-313.pyc
   │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ fields.py
   │     │  │  │  ├─ filepost.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ packages
   │     │  │  │  │  ├─ backports
   │     │  │  │  │  │  ├─ makefile.py
   │     │  │  │  │  │  ├─ weakref_finalize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
   │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ six.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ six.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ poolmanager.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ util
   │     │  │  │  │  ├─ connection.py
   │     │  │  │  │  ├─ proxy.py
   │     │  │  │  │  ├─ queue.py
   │     │  │  │  │  ├─ request.py
   │     │  │  │  │  ├─ response.py
   │     │  │  │  │  ├─ retry.py
   │     │  │  │  │  ├─ ssltransport.py
   │     │  │  │  │  ├─ ssl_.py
   │     │  │  │  │  ├─ ssl_match_hostname.py
   │     │  │  │  │  ├─ timeout.py
   │     │  │  │  │  ├─ url.py
   │     │  │  │  │  ├─ wait.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │  │     ├─ proxy.cpython-313.pyc
   │     │  │  │  │     ├─ queue.cpython-313.pyc
   │     │  │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │  │  │     ├─ timeout.cpython-313.pyc
   │     │  │  │  │     ├─ url.cpython-313.pyc
   │     │  │  │  │     ├─ wait.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _collections.py
   │     │  │  │  ├─ _version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ connectionpool.cpython-313.pyc
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ fields.cpython-313.pyc
   │     │  │  │     ├─ filepost.cpython-313.pyc
   │     │  │  │     ├─ poolmanager.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     ├─ _collections.cpython-313.pyc
   │     │  │  │     ├─ _version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vendor.txt
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  ├─ __pip-runner__.py
   │     │  └─ __pycache__
   │     │     ├─ __init__.cpython-313.pyc
   │     │     ├─ __main__.cpython-313.pyc
   │     │     └─ __pip-runner__.cpython-313.pyc
   │     ├─ pip-26.0.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS.txt
   │     │  │  ├─ LICENSE.txt
   │     │  │  └─ src
   │     │  │     └─ pip
   │     │  │        └─ _vendor
   │     │  │           ├─ cachecontrol
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ certifi
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ dependency_groups
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ distlib
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ distro
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ idna
   │     │  │           │  └─ LICENSE.md
   │     │  │           ├─ msgpack
   │     │  │           │  └─ COPYING
   │     │  │           ├─ packaging
   │     │  │           │  ├─ LICENSE
   │     │  │           │  ├─ LICENSE.APACHE
   │     │  │           │  └─ LICENSE.BSD
   │     │  │           ├─ pkg_resources
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ platformdirs
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ pygments
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ pyproject_hooks
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ requests
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ resolvelib
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ rich
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ tomli
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ tomli_w
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ truststore
   │     │  │           │  └─ LICENSE
   │     │  │           └─ urllib3
   │     │  │              └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ postgrest
   │     │  ├─ base_client.py
   │     │  ├─ base_request_builder.py
   │     │  ├─ constants.py
   │     │  ├─ exceptions.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ client.py
   │     │  │  ├─ request_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ request_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ client.py
   │     │  │  ├─ request_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ request_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ base_client.cpython-313.pyc
   │     │     ├─ base_request_builder.cpython-313.pyc
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ postgrest-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ propcache
   │     │  ├─ api.py
   │     │  ├─ py.typed
   │     │  ├─ _helpers.py
   │     │  ├─ _helpers_c.cp313-win_amd64.pyd
   │     │  ├─ _helpers_c.pyx
   │     │  ├─ _helpers_py.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ _helpers.cpython-313.pyc
   │     │     ├─ _helpers_py.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ propcache-0.4.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pycparser
   │     │  ├─ ast_transforms.py
   │     │  ├─ c_ast.py
   │     │  ├─ c_generator.py
   │     │  ├─ c_lexer.py
   │     │  ├─ c_parser.py
   │     │  ├─ _ast_gen.py
   │     │  ├─ _c_ast.cfg
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ast_transforms.cpython-313.pyc
   │     │     ├─ c_ast.cpython-313.pyc
   │     │     ├─ c_generator.cpython-313.pyc
   │     │     ├─ c_lexer.cpython-313.pyc
   │     │     ├─ c_parser.cpython-313.pyc
   │     │     ├─ _ast_gen.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pycparser-3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pydantic
   │     │  ├─ aliases.py
   │     │  ├─ alias_generators.py
   │     │  ├─ annotated_handlers.py
   │     │  ├─ class_validators.py
   │     │  ├─ color.py
   │     │  ├─ config.py
   │     │  ├─ dataclasses.py
   │     │  ├─ datetime_parse.py
   │     │  ├─ decorator.py
   │     │  ├─ deprecated
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ config.py
   │     │  │  ├─ copy_internals.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ json.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ copy_internals.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ env_settings.py
   │     │  ├─ errors.py
   │     │  ├─ error_wrappers.py
   │     │  ├─ experimental
   │     │  │  ├─ arguments_schema.py
   │     │  │  ├─ missing_sentinel.py
   │     │  │  ├─ pipeline.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arguments_schema.cpython-313.pyc
   │     │  │     ├─ missing_sentinel.cpython-313.pyc
   │     │  │     ├─ pipeline.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ fields.py
   │     │  ├─ functional_serializers.py
   │     │  ├─ functional_validators.py
   │     │  ├─ generics.py
   │     │  ├─ json.py
   │     │  ├─ json_schema.py
   │     │  ├─ main.py
   │     │  ├─ mypy.py
   │     │  ├─ networks.py
   │     │  ├─ parse.py
   │     │  ├─ plugin
   │     │  │  ├─ _loader.py
   │     │  │  ├─ _schema_validator.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _loader.cpython-313.pyc
   │     │  │     ├─ _schema_validator.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ root_model.py
   │     │  ├─ schema.py
   │     │  ├─ tools.py
   │     │  ├─ types.py
   │     │  ├─ type_adapter.py
   │     │  ├─ typing.py
   │     │  ├─ utils.py
   │     │  ├─ v1
   │     │  │  ├─ annotated_types.py
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ color.py
   │     │  │  ├─ config.py
   │     │  │  ├─ dataclasses.py
   │     │  │  ├─ datetime_parse.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ env_settings.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ error_wrappers.py
   │     │  │  ├─ fields.py
   │     │  │  ├─ generics.py
   │     │  │  ├─ json.py
   │     │  │  ├─ main.py
   │     │  │  ├─ mypy.py
   │     │  │  ├─ networks.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ py.typed
   │     │  │  ├─ schema.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ types.py
   │     │  │  ├─ typing.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ validators.py
   │     │  │  ├─ version.py
   │     │  │  ├─ _hypothesis_plugin.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ annotated_types.cpython-313.pyc
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ color.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dataclasses.cpython-313.pyc
   │     │  │     ├─ datetime_parse.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ env_settings.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ error_wrappers.cpython-313.pyc
   │     │  │     ├─ fields.cpython-313.pyc
   │     │  │     ├─ generics.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ mypy.cpython-313.pyc
   │     │  │     ├─ networks.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ schema.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     ├─ typing.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ validators.cpython-313.pyc
   │     │  │     ├─ version.cpython-313.pyc
   │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ validate_call_decorator.py
   │     │  ├─ validators.py
   │     │  ├─ version.py
   │     │  ├─ warnings.py
   │     │  ├─ _internal
   │     │  │  ├─ _config.py
   │     │  │  ├─ _core_metadata.py
   │     │  │  ├─ _core_utils.py
   │     │  │  ├─ _dataclasses.py
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _decorators_v1.py
   │     │  │  ├─ _discriminated_union.py
   │     │  │  ├─ _docs_extraction.py
   │     │  │  ├─ _fields.py
   │     │  │  ├─ _forward_ref.py
   │     │  │  ├─ _generate_schema.py
   │     │  │  ├─ _generics.py
   │     │  │  ├─ _git.py
   │     │  │  ├─ _import_utils.py
   │     │  │  ├─ _internal_dataclass.py
   │     │  │  ├─ _known_annotated_metadata.py
   │     │  │  ├─ _mock_val_ser.py
   │     │  │  ├─ _model_construction.py
   │     │  │  ├─ _namespace_utils.py
   │     │  │  ├─ _repr.py
   │     │  │  ├─ _schema_gather.py
   │     │  │  ├─ _schema_generation_shared.py
   │     │  │  ├─ _serializers.py
   │     │  │  ├─ _signature.py
   │     │  │  ├─ _typing_extra.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ _validate_call.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _config.cpython-313.pyc
   │     │  │     ├─ _core_metadata.cpython-313.pyc
   │     │  │     ├─ _core_utils.cpython-313.pyc
   │     │  │     ├─ _dataclasses.cpython-313.pyc
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _decorators_v1.cpython-313.pyc
   │     │  │     ├─ _discriminated_union.cpython-313.pyc
   │     │  │     ├─ _docs_extraction.cpython-313.pyc
   │     │  │     ├─ _fields.cpython-313.pyc
   │     │  │     ├─ _forward_ref.cpython-313.pyc
   │     │  │     ├─ _generate_schema.cpython-313.pyc
   │     │  │     ├─ _generics.cpython-313.pyc
   │     │  │     ├─ _git.cpython-313.pyc
   │     │  │     ├─ _import_utils.cpython-313.pyc
   │     │  │     ├─ _internal_dataclass.cpython-313.pyc
   │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
   │     │  │     ├─ _mock_val_ser.cpython-313.pyc
   │     │  │     ├─ _model_construction.cpython-313.pyc
   │     │  │     ├─ _namespace_utils.cpython-313.pyc
   │     │  │     ├─ _repr.cpython-313.pyc
   │     │  │     ├─ _schema_gather.cpython-313.pyc
   │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
   │     │  │     ├─ _serializers.cpython-313.pyc
   │     │  │     ├─ _signature.cpython-313.pyc
   │     │  │     ├─ _typing_extra.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     ├─ _validate_call.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _migration.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ aliases.cpython-313.pyc
   │     │     ├─ alias_generators.cpython-313.pyc
   │     │     ├─ annotated_handlers.cpython-313.pyc
   │     │     ├─ class_validators.cpython-313.pyc
   │     │     ├─ color.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ dataclasses.cpython-313.pyc
   │     │     ├─ datetime_parse.cpython-313.pyc
   │     │     ├─ decorator.cpython-313.pyc
   │     │     ├─ env_settings.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ error_wrappers.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ functional_serializers.cpython-313.pyc
   │     │     ├─ functional_validators.cpython-313.pyc
   │     │     ├─ generics.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ json_schema.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ mypy.cpython-313.pyc
   │     │     ├─ networks.cpython-313.pyc
   │     │     ├─ parse.cpython-313.pyc
   │     │     ├─ root_model.cpython-313.pyc
   │     │     ├─ schema.cpython-313.pyc
   │     │     ├─ tools.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ type_adapter.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ validate_call_decorator.cpython-313.pyc
   │     │     ├─ validators.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     ├─ _migration.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic-2.12.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pydantic_core
   │     │  ├─ core_schema.py
   │     │  ├─ py.typed
   │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
   │     │  ├─ _pydantic_core.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core_schema.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic_core-2.41.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pygments
   │     │  ├─ cmdline.py
   │     │  ├─ console.py
   │     │  ├─ filter.py
   │     │  ├─ filters
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ formatter.py
   │     │  ├─ formatters
   │     │  │  ├─ bbcode.py
   │     │  │  ├─ groff.py
   │     │  │  ├─ html.py
   │     │  │  ├─ img.py
   │     │  │  ├─ irc.py
   │     │  │  ├─ latex.py
   │     │  │  ├─ other.py
   │     │  │  ├─ pangomarkup.py
   │     │  │  ├─ rtf.py
   │     │  │  ├─ svg.py
   │     │  │  ├─ terminal.py
   │     │  │  ├─ terminal256.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bbcode.cpython-313.pyc
   │     │  │     ├─ groff.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ img.cpython-313.pyc
   │     │  │     ├─ irc.cpython-313.pyc
   │     │  │     ├─ latex.cpython-313.pyc
   │     │  │     ├─ other.cpython-313.pyc
   │     │  │     ├─ pangomarkup.cpython-313.pyc
   │     │  │     ├─ rtf.cpython-313.pyc
   │     │  │     ├─ svg.cpython-313.pyc
   │     │  │     ├─ terminal.cpython-313.pyc
   │     │  │     ├─ terminal256.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ lexer.py
   │     │  ├─ lexers
   │     │  │  ├─ actionscript.py
   │     │  │  ├─ ada.py
   │     │  │  ├─ agile.py
   │     │  │  ├─ algebra.py
   │     │  │  ├─ ambient.py
   │     │  │  ├─ amdgpu.py
   │     │  │  ├─ ampl.py
   │     │  │  ├─ apdlexer.py
   │     │  │  ├─ apl.py
   │     │  │  ├─ archetype.py
   │     │  │  ├─ arrow.py
   │     │  │  ├─ arturo.py
   │     │  │  ├─ asc.py
   │     │  │  ├─ asm.py
   │     │  │  ├─ asn1.py
   │     │  │  ├─ automation.py
   │     │  │  ├─ bare.py
   │     │  │  ├─ basic.py
   │     │  │  ├─ bdd.py
   │     │  │  ├─ berry.py
   │     │  │  ├─ bibtex.py
   │     │  │  ├─ blueprint.py
   │     │  │  ├─ boa.py
   │     │  │  ├─ bqn.py
   │     │  │  ├─ business.py
   │     │  │  ├─ capnproto.py
   │     │  │  ├─ carbon.py
   │     │  │  ├─ cddl.py
   │     │  │  ├─ chapel.py
   │     │  │  ├─ clean.py
   │     │  │  ├─ codeql.py
   │     │  │  ├─ comal.py
   │     │  │  ├─ compiled.py
   │     │  │  ├─ configs.py
   │     │  │  ├─ console.py
   │     │  │  ├─ cplint.py
   │     │  │  ├─ crystal.py
   │     │  │  ├─ csound.py
   │     │  │  ├─ css.py
   │     │  │  ├─ c_cpp.py
   │     │  │  ├─ c_like.py
   │     │  │  ├─ d.py
   │     │  │  ├─ dalvik.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dax.py
   │     │  │  ├─ devicetree.py
   │     │  │  ├─ diff.py
   │     │  │  ├─ dns.py
   │     │  │  ├─ dotnet.py
   │     │  │  ├─ dsls.py
   │     │  │  ├─ dylan.py
   │     │  │  ├─ ecl.py
   │     │  │  ├─ eiffel.py
   │     │  │  ├─ elm.py
   │     │  │  ├─ elpi.py
   │     │  │  ├─ email.py
   │     │  │  ├─ erlang.py
   │     │  │  ├─ esoteric.py
   │     │  │  ├─ ezhil.py
   │     │  │  ├─ factor.py
   │     │  │  ├─ fantom.py
   │     │  │  ├─ felix.py
   │     │  │  ├─ fift.py
   │     │  │  ├─ floscript.py
   │     │  │  ├─ forth.py
   │     │  │  ├─ fortran.py
   │     │  │  ├─ foxpro.py
   │     │  │  ├─ freefem.py
   │     │  │  ├─ func.py
   │     │  │  ├─ functional.py
   │     │  │  ├─ futhark.py
   │     │  │  ├─ gcodelexer.py
   │     │  │  ├─ gdscript.py
   │     │  │  ├─ gleam.py
   │     │  │  ├─ go.py
   │     │  │  ├─ grammar_notation.py
   │     │  │  ├─ graph.py
   │     │  │  ├─ graphics.py
   │     │  │  ├─ graphql.py
   │     │  │  ├─ graphviz.py
   │     │  │  ├─ gsql.py
   │     │  │  ├─ hare.py
   │     │  │  ├─ haskell.py
   │     │  │  ├─ haxe.py
   │     │  │  ├─ hdl.py
   │     │  │  ├─ hexdump.py
   │     │  │  ├─ html.py
   │     │  │  ├─ idl.py
   │     │  │  ├─ igor.py
   │     │  │  ├─ inferno.py
   │     │  │  ├─ installers.py
   │     │  │  ├─ int_fiction.py
   │     │  │  ├─ iolang.py
   │     │  │  ├─ j.py
   │     │  │  ├─ javascript.py
   │     │  │  ├─ jmespath.py
   │     │  │  ├─ jslt.py
   │     │  │  ├─ json5.py
   │     │  │  ├─ jsonnet.py
   │     │  │  ├─ jsx.py
   │     │  │  ├─ julia.py
   │     │  │  ├─ jvm.py
   │     │  │  ├─ kuin.py
   │     │  │  ├─ kusto.py
   │     │  │  ├─ ldap.py
   │     │  │  ├─ lean.py
   │     │  │  ├─ lilypond.py
   │     │  │  ├─ lisp.py
   │     │  │  ├─ macaulay2.py
   │     │  │  ├─ make.py
   │     │  │  ├─ maple.py
   │     │  │  ├─ markup.py
   │     │  │  ├─ math.py
   │     │  │  ├─ matlab.py
   │     │  │  ├─ maxima.py
   │     │  │  ├─ meson.py
   │     │  │  ├─ mime.py
   │     │  │  ├─ minecraft.py
   │     │  │  ├─ mips.py
   │     │  │  ├─ ml.py
   │     │  │  ├─ modeling.py
   │     │  │  ├─ modula2.py
   │     │  │  ├─ mojo.py
   │     │  │  ├─ monte.py
   │     │  │  ├─ mosel.py
   │     │  │  ├─ ncl.py
   │     │  │  ├─ nimrod.py
   │     │  │  ├─ nit.py
   │     │  │  ├─ nix.py
   │     │  │  ├─ numbair.py
   │     │  │  ├─ oberon.py
   │     │  │  ├─ objective.py
   │     │  │  ├─ ooc.py
   │     │  │  ├─ openscad.py
   │     │  │  ├─ other.py
   │     │  │  ├─ parasail.py
   │     │  │  ├─ parsers.py
   │     │  │  ├─ pascal.py
   │     │  │  ├─ pawn.py
   │     │  │  ├─ pddl.py
   │     │  │  ├─ perl.py
   │     │  │  ├─ phix.py
   │     │  │  ├─ php.py
   │     │  │  ├─ pointless.py
   │     │  │  ├─ pony.py
   │     │  │  ├─ praat.py
   │     │  │  ├─ procfile.py
   │     │  │  ├─ prolog.py
   │     │  │  ├─ promql.py
   │     │  │  ├─ prql.py
   │     │  │  ├─ ptx.py
   │     │  │  ├─ python.py
   │     │  │  ├─ q.py
   │     │  │  ├─ qlik.py
   │     │  │  ├─ qvt.py
   │     │  │  ├─ r.py
   │     │  │  ├─ rdf.py
   │     │  │  ├─ rebol.py
   │     │  │  ├─ rego.py
   │     │  │  ├─ resource.py
   │     │  │  ├─ ride.py
   │     │  │  ├─ rita.py
   │     │  │  ├─ rnc.py
   │     │  │  ├─ roboconf.py
   │     │  │  ├─ robotframework.py
   │     │  │  ├─ ruby.py
   │     │  │  ├─ rust.py
   │     │  │  ├─ sas.py
   │     │  │  ├─ savi.py
   │     │  │  ├─ scdoc.py
   │     │  │  ├─ scripting.py
   │     │  │  ├─ sgf.py
   │     │  │  ├─ shell.py
   │     │  │  ├─ sieve.py
   │     │  │  ├─ slash.py
   │     │  │  ├─ smalltalk.py
   │     │  │  ├─ smithy.py
   │     │  │  ├─ smv.py
   │     │  │  ├─ snobol.py
   │     │  │  ├─ solidity.py
   │     │  │  ├─ soong.py
   │     │  │  ├─ sophia.py
   │     │  │  ├─ special.py
   │     │  │  ├─ spice.py
   │     │  │  ├─ sql.py
   │     │  │  ├─ srcinfo.py
   │     │  │  ├─ stata.py
   │     │  │  ├─ supercollider.py
   │     │  │  ├─ tablegen.py
   │     │  │  ├─ tact.py
   │     │  │  ├─ tal.py
   │     │  │  ├─ tcl.py
   │     │  │  ├─ teal.py
   │     │  │  ├─ templates.py
   │     │  │  ├─ teraterm.py
   │     │  │  ├─ testing.py
   │     │  │  ├─ text.py
   │     │  │  ├─ textedit.py
   │     │  │  ├─ textfmts.py
   │     │  │  ├─ theorem.py
   │     │  │  ├─ thingsdb.py
   │     │  │  ├─ tlb.py
   │     │  │  ├─ tls.py
   │     │  │  ├─ tnt.py
   │     │  │  ├─ trafficscript.py
   │     │  │  ├─ typoscript.py
   │     │  │  ├─ typst.py
   │     │  │  ├─ ul4.py
   │     │  │  ├─ unicon.py
   │     │  │  ├─ urbi.py
   │     │  │  ├─ usd.py
   │     │  │  ├─ varnish.py
   │     │  │  ├─ verification.py
   │     │  │  ├─ verifpal.py
   │     │  │  ├─ vip.py
   │     │  │  ├─ vyper.py
   │     │  │  ├─ web.py
   │     │  │  ├─ webassembly.py
   │     │  │  ├─ webidl.py
   │     │  │  ├─ webmisc.py
   │     │  │  ├─ wgsl.py
   │     │  │  ├─ whiley.py
   │     │  │  ├─ wowtoc.py
   │     │  │  ├─ wren.py
   │     │  │  ├─ x10.py
   │     │  │  ├─ xorg.py
   │     │  │  ├─ yang.py
   │     │  │  ├─ yara.py
   │     │  │  ├─ zig.py
   │     │  │  ├─ _ada_builtins.py
   │     │  │  ├─ _asy_builtins.py
   │     │  │  ├─ _cl_builtins.py
   │     │  │  ├─ _cocoa_builtins.py
   │     │  │  ├─ _csound_builtins.py
   │     │  │  ├─ _css_builtins.py
   │     │  │  ├─ _googlesql_builtins.py
   │     │  │  ├─ _julia_builtins.py
   │     │  │  ├─ _lasso_builtins.py
   │     │  │  ├─ _lilypond_builtins.py
   │     │  │  ├─ _luau_builtins.py
   │     │  │  ├─ _lua_builtins.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ _mql_builtins.py
   │     │  │  ├─ _mysql_builtins.py
   │     │  │  ├─ _openedge_builtins.py
   │     │  │  ├─ _php_builtins.py
   │     │  │  ├─ _postgres_builtins.py
   │     │  │  ├─ _qlik_builtins.py
   │     │  │  ├─ _scheme_builtins.py
   │     │  │  ├─ _scilab_builtins.py
   │     │  │  ├─ _sourcemod_builtins.py
   │     │  │  ├─ _sql_builtins.py
   │     │  │  ├─ _stan_builtins.py
   │     │  │  ├─ _stata_builtins.py
   │     │  │  ├─ _tsql_builtins.py
   │     │  │  ├─ _usd_builtins.py
   │     │  │  ├─ _vbscript_builtins.py
   │     │  │  ├─ _vim_builtins.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ actionscript.cpython-313.pyc
   │     │  │     ├─ ada.cpython-313.pyc
   │     │  │     ├─ agile.cpython-313.pyc
   │     │  │     ├─ algebra.cpython-313.pyc
   │     │  │     ├─ ambient.cpython-313.pyc
   │     │  │     ├─ amdgpu.cpython-313.pyc
   │     │  │     ├─ ampl.cpython-313.pyc
   │     │  │     ├─ apdlexer.cpython-313.pyc
   │     │  │     ├─ apl.cpython-313.pyc
   │     │  │     ├─ archetype.cpython-313.pyc
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ arturo.cpython-313.pyc
   │     │  │     ├─ asc.cpython-313.pyc
   │     │  │     ├─ asm.cpython-313.pyc
   │     │  │     ├─ asn1.cpython-313.pyc
   │     │  │     ├─ automation.cpython-313.pyc
   │     │  │     ├─ bare.cpython-313.pyc
   │     │  │     ├─ basic.cpython-313.pyc
   │     │  │     ├─ bdd.cpython-313.pyc
   │     │  │     ├─ berry.cpython-313.pyc
   │     │  │     ├─ bibtex.cpython-313.pyc
   │     │  │     ├─ blueprint.cpython-313.pyc
   │     │  │     ├─ boa.cpython-313.pyc
   │     │  │     ├─ bqn.cpython-313.pyc
   │     │  │     ├─ business.cpython-313.pyc
   │     │  │     ├─ capnproto.cpython-313.pyc
   │     │  │     ├─ carbon.cpython-313.pyc
   │     │  │     ├─ cddl.cpython-313.pyc
   │     │  │     ├─ chapel.cpython-313.pyc
   │     │  │     ├─ clean.cpython-313.pyc
   │     │  │     ├─ codeql.cpython-313.pyc
   │     │  │     ├─ comal.cpython-313.pyc
   │     │  │     ├─ compiled.cpython-313.pyc
   │     │  │     ├─ configs.cpython-313.pyc
   │     │  │     ├─ console.cpython-313.pyc
   │     │  │     ├─ cplint.cpython-313.pyc
   │     │  │     ├─ crystal.cpython-313.pyc
   │     │  │     ├─ csound.cpython-313.pyc
   │     │  │     ├─ css.cpython-313.pyc
   │     │  │     ├─ c_cpp.cpython-313.pyc
   │     │  │     ├─ c_like.cpython-313.pyc
   │     │  │     ├─ d.cpython-313.pyc
   │     │  │     ├─ dalvik.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dax.cpython-313.pyc
   │     │  │     ├─ devicetree.cpython-313.pyc
   │     │  │     ├─ diff.cpython-313.pyc
   │     │  │     ├─ dns.cpython-313.pyc
   │     │  │     ├─ dotnet.cpython-313.pyc
   │     │  │     ├─ dsls.cpython-313.pyc
   │     │  │     ├─ dylan.cpython-313.pyc
   │     │  │     ├─ ecl.cpython-313.pyc
   │     │  │     ├─ eiffel.cpython-313.pyc
   │     │  │     ├─ elm.cpython-313.pyc
   │     │  │     ├─ elpi.cpython-313.pyc
   │     │  │     ├─ email.cpython-313.pyc
   │     │  │     ├─ erlang.cpython-313.pyc
   │     │  │     ├─ esoteric.cpython-313.pyc
   │     │  │     ├─ ezhil.cpython-313.pyc
   │     │  │     ├─ factor.cpython-313.pyc
   │     │  │     ├─ fantom.cpython-313.pyc
   │     │  │     ├─ felix.cpython-313.pyc
   │     │  │     ├─ fift.cpython-313.pyc
   │     │  │     ├─ floscript.cpython-313.pyc
   │     │  │     ├─ forth.cpython-313.pyc
   │     │  │     ├─ fortran.cpython-313.pyc
   │     │  │     ├─ foxpro.cpython-313.pyc
   │     │  │     ├─ freefem.cpython-313.pyc
   │     │  │     ├─ func.cpython-313.pyc
   │     │  │     ├─ functional.cpython-313.pyc
   │     │  │     ├─ futhark.cpython-313.pyc
   │     │  │     ├─ gcodelexer.cpython-313.pyc
   │     │  │     ├─ gdscript.cpython-313.pyc
   │     │  │     ├─ gleam.cpython-313.pyc
   │     │  │     ├─ go.cpython-313.pyc
   │     │  │     ├─ grammar_notation.cpython-313.pyc
   │     │  │     ├─ graph.cpython-313.pyc
   │     │  │     ├─ graphics.cpython-313.pyc
   │     │  │     ├─ graphql.cpython-313.pyc
   │     │  │     ├─ graphviz.cpython-313.pyc
   │     │  │     ├─ gsql.cpython-313.pyc
   │     │  │     ├─ hare.cpython-313.pyc
   │     │  │     ├─ haskell.cpython-313.pyc
   │     │  │     ├─ haxe.cpython-313.pyc
   │     │  │     ├─ hdl.cpython-313.pyc
   │     │  │     ├─ hexdump.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ idl.cpython-313.pyc
   │     │  │     ├─ igor.cpython-313.pyc
   │     │  │     ├─ inferno.cpython-313.pyc
   │     │  │     ├─ installers.cpython-313.pyc
   │     │  │     ├─ int_fiction.cpython-313.pyc
   │     │  │     ├─ iolang.cpython-313.pyc
   │     │  │     ├─ j.cpython-313.pyc
   │     │  │     ├─ javascript.cpython-313.pyc
   │     │  │     ├─ jmespath.cpython-313.pyc
   │     │  │     ├─ jslt.cpython-313.pyc
   │     │  │     ├─ json5.cpython-313.pyc
   │     │  │     ├─ jsonnet.cpython-313.pyc
   │     │  │     ├─ jsx.cpython-313.pyc
   │     │  │     ├─ julia.cpython-313.pyc
   │     │  │     ├─ jvm.cpython-313.pyc
   │     │  │     ├─ kuin.cpython-313.pyc
   │     │  │     ├─ kusto.cpython-313.pyc
   │     │  │     ├─ ldap.cpython-313.pyc
   │     │  │     ├─ lean.cpython-313.pyc
   │     │  │     ├─ lilypond.cpython-313.pyc
   │     │  │     ├─ lisp.cpython-313.pyc
   │     │  │     ├─ macaulay2.cpython-313.pyc
   │     │  │     ├─ make.cpython-313.pyc
   │     │  │     ├─ maple.cpython-313.pyc
   │     │  │     ├─ markup.cpython-313.pyc
   │     │  │     ├─ math.cpython-313.pyc
   │     │  │     ├─ matlab.cpython-313.pyc
   │     │  │     ├─ maxima.cpython-313.pyc
   │     │  │     ├─ meson.cpython-313.pyc
   │     │  │     ├─ mime.cpython-313.pyc
   │     │  │     ├─ minecraft.cpython-313.pyc
   │     │  │     ├─ mips.cpython-313.pyc
   │     │  │     ├─ ml.cpython-313.pyc
   │     │  │     ├─ modeling.cpython-313.pyc
   │     │  │     ├─ modula2.cpython-313.pyc
   │     │  │     ├─ mojo.cpython-313.pyc
   │     │  │     ├─ monte.cpython-313.pyc
   │     │  │     ├─ mosel.cpython-313.pyc
   │     │  │     ├─ ncl.cpython-313.pyc
   │     │  │     ├─ nimrod.cpython-313.pyc
   │     │  │     ├─ nit.cpython-313.pyc
   │     │  │     ├─ nix.cpython-313.pyc
   │     │  │     ├─ numbair.cpython-313.pyc
   │     │  │     ├─ oberon.cpython-313.pyc
   │     │  │     ├─ objective.cpython-313.pyc
   │     │  │     ├─ ooc.cpython-313.pyc
   │     │  │     ├─ openscad.cpython-313.pyc
   │     │  │     ├─ other.cpython-313.pyc
   │     │  │     ├─ parasail.cpython-313.pyc
   │     │  │     ├─ parsers.cpython-313.pyc
   │     │  │     ├─ pascal.cpython-313.pyc
   │     │  │     ├─ pawn.cpython-313.pyc
   │     │  │     ├─ pddl.cpython-313.pyc
   │     │  │     ├─ perl.cpython-313.pyc
   │     │  │     ├─ phix.cpython-313.pyc
   │     │  │     ├─ php.cpython-313.pyc
   │     │  │     ├─ pointless.cpython-313.pyc
   │     │  │     ├─ pony.cpython-313.pyc
   │     │  │     ├─ praat.cpython-313.pyc
   │     │  │     ├─ procfile.cpython-313.pyc
   │     │  │     ├─ prolog.cpython-313.pyc
   │     │  │     ├─ promql.cpython-313.pyc
   │     │  │     ├─ prql.cpython-313.pyc
   │     │  │     ├─ ptx.cpython-313.pyc
   │     │  │     ├─ python.cpython-313.pyc
   │     │  │     ├─ q.cpython-313.pyc
   │     │  │     ├─ qlik.cpython-313.pyc
   │     │  │     ├─ qvt.cpython-313.pyc
   │     │  │     ├─ r.cpython-313.pyc
   │     │  │     ├─ rdf.cpython-313.pyc
   │     │  │     ├─ rebol.cpython-313.pyc
   │     │  │     ├─ rego.cpython-313.pyc
   │     │  │     ├─ resource.cpython-313.pyc
   │     │  │     ├─ ride.cpython-313.pyc
   │     │  │     ├─ rita.cpython-313.pyc
   │     │  │     ├─ rnc.cpython-313.pyc
   │     │  │     ├─ roboconf.cpython-313.pyc
   │     │  │     ├─ robotframework.cpython-313.pyc
   │     │  │     ├─ ruby.cpython-313.pyc
   │     │  │     ├─ rust.cpython-313.pyc
   │     │  │     ├─ sas.cpython-313.pyc
   │     │  │     ├─ savi.cpython-313.pyc
   │     │  │     ├─ scdoc.cpython-313.pyc
   │     │  │     ├─ scripting.cpython-313.pyc
   │     │  │     ├─ sgf.cpython-313.pyc
   │     │  │     ├─ shell.cpython-313.pyc
   │     │  │     ├─ sieve.cpython-313.pyc
   │     │  │     ├─ slash.cpython-313.pyc
   │     │  │     ├─ smalltalk.cpython-313.pyc
   │     │  │     ├─ smithy.cpython-313.pyc
   │     │  │     ├─ smv.cpython-313.pyc
   │     │  │     ├─ snobol.cpython-313.pyc
   │     │  │     ├─ solidity.cpython-313.pyc
   │     │  │     ├─ soong.cpython-313.pyc
   │     │  │     ├─ sophia.cpython-313.pyc
   │     │  │     ├─ special.cpython-313.pyc
   │     │  │     ├─ spice.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     ├─ srcinfo.cpython-313.pyc
   │     │  │     ├─ stata.cpython-313.pyc
   │     │  │     ├─ supercollider.cpython-313.pyc
   │     │  │     ├─ tablegen.cpython-313.pyc
   │     │  │     ├─ tact.cpython-313.pyc
   │     │  │     ├─ tal.cpython-313.pyc
   │     │  │     ├─ tcl.cpython-313.pyc
   │     │  │     ├─ teal.cpython-313.pyc
   │     │  │     ├─ templates.cpython-313.pyc
   │     │  │     ├─ teraterm.cpython-313.pyc
   │     │  │     ├─ testing.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ textedit.cpython-313.pyc
   │     │  │     ├─ textfmts.cpython-313.pyc
   │     │  │     ├─ theorem.cpython-313.pyc
   │     │  │     ├─ thingsdb.cpython-313.pyc
   │     │  │     ├─ tlb.cpython-313.pyc
   │     │  │     ├─ tls.cpython-313.pyc
   │     │  │     ├─ tnt.cpython-313.pyc
   │     │  │     ├─ trafficscript.cpython-313.pyc
   │     │  │     ├─ typoscript.cpython-313.pyc
   │     │  │     ├─ typst.cpython-313.pyc
   │     │  │     ├─ ul4.cpython-313.pyc
   │     │  │     ├─ unicon.cpython-313.pyc
   │     │  │     ├─ urbi.cpython-313.pyc
   │     │  │     ├─ usd.cpython-313.pyc
   │     │  │     ├─ varnish.cpython-313.pyc
   │     │  │     ├─ verification.cpython-313.pyc
   │     │  │     ├─ verifpal.cpython-313.pyc
   │     │  │     ├─ vip.cpython-313.pyc
   │     │  │     ├─ vyper.cpython-313.pyc
   │     │  │     ├─ web.cpython-313.pyc
   │     │  │     ├─ webassembly.cpython-313.pyc
   │     │  │     ├─ webidl.cpython-313.pyc
   │     │  │     ├─ webmisc.cpython-313.pyc
   │     │  │     ├─ wgsl.cpython-313.pyc
   │     │  │     ├─ whiley.cpython-313.pyc
   │     │  │     ├─ wowtoc.cpython-313.pyc
   │     │  │     ├─ wren.cpython-313.pyc
   │     │  │     ├─ x10.cpython-313.pyc
   │     │  │     ├─ xorg.cpython-313.pyc
   │     │  │     ├─ yang.cpython-313.pyc
   │     │  │     ├─ yara.cpython-313.pyc
   │     │  │     ├─ zig.cpython-313.pyc
   │     │  │     ├─ _ada_builtins.cpython-313.pyc
   │     │  │     ├─ _asy_builtins.cpython-313.pyc
   │     │  │     ├─ _cl_builtins.cpython-313.pyc
   │     │  │     ├─ _cocoa_builtins.cpython-313.pyc
   │     │  │     ├─ _csound_builtins.cpython-313.pyc
   │     │  │     ├─ _css_builtins.cpython-313.pyc
   │     │  │     ├─ _googlesql_builtins.cpython-313.pyc
   │     │  │     ├─ _julia_builtins.cpython-313.pyc
   │     │  │     ├─ _lasso_builtins.cpython-313.pyc
   │     │  │     ├─ _lilypond_builtins.cpython-313.pyc
   │     │  │     ├─ _luau_builtins.cpython-313.pyc
   │     │  │     ├─ _lua_builtins.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     ├─ _mql_builtins.cpython-313.pyc
   │     │  │     ├─ _mysql_builtins.cpython-313.pyc
   │     │  │     ├─ _openedge_builtins.cpython-313.pyc
   │     │  │     ├─ _php_builtins.cpython-313.pyc
   │     │  │     ├─ _postgres_builtins.cpython-313.pyc
   │     │  │     ├─ _qlik_builtins.cpython-313.pyc
   │     │  │     ├─ _scheme_builtins.cpython-313.pyc
   │     │  │     ├─ _scilab_builtins.cpython-313.pyc
   │     │  │     ├─ _sourcemod_builtins.cpython-313.pyc
   │     │  │     ├─ _sql_builtins.cpython-313.pyc
   │     │  │     ├─ _stan_builtins.cpython-313.pyc
   │     │  │     ├─ _stata_builtins.cpython-313.pyc
   │     │  │     ├─ _tsql_builtins.cpython-313.pyc
   │     │  │     ├─ _usd_builtins.cpython-313.pyc
   │     │  │     ├─ _vbscript_builtins.cpython-313.pyc
   │     │  │     ├─ _vim_builtins.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ modeline.py
   │     │  ├─ plugin.py
   │     │  ├─ regexopt.py
   │     │  ├─ scanner.py
   │     │  ├─ sphinxext.py
   │     │  ├─ style.py
   │     │  ├─ styles
   │     │  │  ├─ abap.py
   │     │  │  ├─ algol.py
   │     │  │  ├─ algol_nu.py
   │     │  │  ├─ arduino.py
   │     │  │  ├─ autumn.py
   │     │  │  ├─ borland.py
   │     │  │  ├─ bw.py
   │     │  │  ├─ coffee.py
   │     │  │  ├─ colorful.py
   │     │  │  ├─ default.py
   │     │  │  ├─ dracula.py
   │     │  │  ├─ emacs.py
   │     │  │  ├─ friendly.py
   │     │  │  ├─ friendly_grayscale.py
   │     │  │  ├─ fruity.py
   │     │  │  ├─ gh_dark.py
   │     │  │  ├─ gruvbox.py
   │     │  │  ├─ igor.py
   │     │  │  ├─ inkpot.py
   │     │  │  ├─ lightbulb.py
   │     │  │  ├─ lilypond.py
   │     │  │  ├─ lovelace.py
   │     │  │  ├─ manni.py
   │     │  │  ├─ material.py
   │     │  │  ├─ monokai.py
   │     │  │  ├─ murphy.py
   │     │  │  ├─ native.py
   │     │  │  ├─ nord.py
   │     │  │  ├─ onedark.py
   │     │  │  ├─ paraiso_dark.py
   │     │  │  ├─ paraiso_light.py
   │     │  │  ├─ pastie.py
   │     │  │  ├─ perldoc.py
   │     │  │  ├─ rainbow_dash.py
   │     │  │  ├─ rrt.py
   │     │  │  ├─ sas.py
   │     │  │  ├─ solarized.py
   │     │  │  ├─ staroffice.py
   │     │  │  ├─ stata_dark.py
   │     │  │  ├─ stata_light.py
   │     │  │  ├─ tango.py
   │     │  │  ├─ trac.py
   │     │  │  ├─ vim.py
   │     │  │  ├─ vs.py
   │     │  │  ├─ xcode.py
   │     │  │  ├─ zenburn.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ abap.cpython-313.pyc
   │     │  │     ├─ algol.cpython-313.pyc
   │     │  │     ├─ algol_nu.cpython-313.pyc
   │     │  │     ├─ arduino.cpython-313.pyc
   │     │  │     ├─ autumn.cpython-313.pyc
   │     │  │     ├─ borland.cpython-313.pyc
   │     │  │     ├─ bw.cpython-313.pyc
   │     │  │     ├─ coffee.cpython-313.pyc
   │     │  │     ├─ colorful.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ dracula.cpython-313.pyc
   │     │  │     ├─ emacs.cpython-313.pyc
   │     │  │     ├─ friendly.cpython-313.pyc
   │     │  │     ├─ friendly_grayscale.cpython-313.pyc
   │     │  │     ├─ fruity.cpython-313.pyc
   │     │  │     ├─ gh_dark.cpython-313.pyc
   │     │  │     ├─ gruvbox.cpython-313.pyc
   │     │  │     ├─ igor.cpython-313.pyc
   │     │  │     ├─ inkpot.cpython-313.pyc
   │     │  │     ├─ lightbulb.cpython-313.pyc
   │     │  │     ├─ lilypond.cpython-313.pyc
   │     │  │     ├─ lovelace.cpython-313.pyc
   │     │  │     ├─ manni.cpython-313.pyc
   │     │  │     ├─ material.cpython-313.pyc
   │     │  │     ├─ monokai.cpython-313.pyc
   │     │  │     ├─ murphy.cpython-313.pyc
   │     │  │     ├─ native.cpython-313.pyc
   │     │  │     ├─ nord.cpython-313.pyc
   │     │  │     ├─ onedark.cpython-313.pyc
   │     │  │     ├─ paraiso_dark.cpython-313.pyc
   │     │  │     ├─ paraiso_light.cpython-313.pyc
   │     │  │     ├─ pastie.cpython-313.pyc
   │     │  │     ├─ perldoc.cpython-313.pyc
   │     │  │     ├─ rainbow_dash.cpython-313.pyc
   │     │  │     ├─ rrt.cpython-313.pyc
   │     │  │     ├─ sas.cpython-313.pyc
   │     │  │     ├─ solarized.cpython-313.pyc
   │     │  │     ├─ staroffice.cpython-313.pyc
   │     │  │     ├─ stata_dark.cpython-313.pyc
   │     │  │     ├─ stata_light.cpython-313.pyc
   │     │  │     ├─ tango.cpython-313.pyc
   │     │  │     ├─ trac.cpython-313.pyc
   │     │  │     ├─ vim.cpython-313.pyc
   │     │  │     ├─ vs.cpython-313.pyc
   │     │  │     ├─ xcode.cpython-313.pyc
   │     │  │     ├─ zenburn.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ token.py
   │     │  ├─ unistring.py
   │     │  ├─ util.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ cmdline.cpython-313.pyc
   │     │     ├─ console.cpython-313.pyc
   │     │     ├─ filter.cpython-313.pyc
   │     │     ├─ formatter.cpython-313.pyc
   │     │     ├─ lexer.cpython-313.pyc
   │     │     ├─ modeline.cpython-313.pyc
   │     │     ├─ plugin.cpython-313.pyc
   │     │     ├─ regexopt.cpython-313.pyc
   │     │     ├─ scanner.cpython-313.pyc
   │     │     ├─ sphinxext.cpython-313.pyc
   │     │     ├─ style.cpython-313.pyc
   │     │     ├─ token.cpython-313.pyc
   │     │     ├─ unistring.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ pygments-2.19.2.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pyiceberg
   │     │  ├─ avro
   │     │  │  ├─ codecs
   │     │  │  │  ├─ bzip2.py
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ deflate.py
   │     │  │  │  ├─ snappy_codec.py
   │     │  │  │  ├─ zstandard_codec.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bzip2.cpython-313.pyc
   │     │  │  │     ├─ codec.cpython-313.pyc
   │     │  │  │     ├─ deflate.cpython-313.pyc
   │     │  │  │     ├─ snappy_codec.cpython-313.pyc
   │     │  │  │     ├─ zstandard_codec.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ decoder.py
   │     │  │  ├─ decoder_fast.cp313-win_amd64.pyd
   │     │  │  ├─ decoder_fast.pyi
   │     │  │  ├─ encoder.py
   │     │  │  ├─ file.py
   │     │  │  ├─ reader.py
   │     │  │  ├─ resolver.py
   │     │  │  ├─ writer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ decoder.cpython-313.pyc
   │     │  │     ├─ encoder.cpython-313.pyc
   │     │  │     ├─ file.cpython-313.pyc
   │     │  │     ├─ reader.cpython-313.pyc
   │     │  │     ├─ resolver.cpython-313.pyc
   │     │  │     ├─ writer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ catalog
   │     │  │  ├─ bigquery_metastore.py
   │     │  │  ├─ dynamodb.py
   │     │  │  ├─ glue.py
   │     │  │  ├─ hive.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ noop.py
   │     │  │  ├─ rest
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ scan_planning.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     ├─ scan_planning.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ sql.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bigquery_metastore.cpython-313.pyc
   │     │  │     ├─ dynamodb.cpython-313.pyc
   │     │  │     ├─ glue.cpython-313.pyc
   │     │  │     ├─ hive.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ noop.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ cli
   │     │  │  ├─ console.py
   │     │  │  ├─ output.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ console.cpython-313.pyc
   │     │  │     ├─ output.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conversions.py
   │     │  ├─ exceptions.py
   │     │  ├─ expressions
   │     │  │  ├─ literals.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ visitors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ literals.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ visitors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ fsspec.py
   │     │  │  ├─ pyarrow.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ fsspec.cpython-313.pyc
   │     │  │     ├─ pyarrow.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ manifest.py
   │     │  ├─ partitioning.py
   │     │  ├─ py.typed
   │     │  ├─ schema.py
   │     │  ├─ serializers.py
   │     │  ├─ table
   │     │  │  ├─ delete_file_index.py
   │     │  │  ├─ inspect.py
   │     │  │  ├─ locations.py
   │     │  │  ├─ maintenance.py
   │     │  │  ├─ metadata.py
   │     │  │  ├─ name_mapping.py
   │     │  │  ├─ puffin.py
   │     │  │  ├─ refs.py
   │     │  │  ├─ snapshots.py
   │     │  │  ├─ sorting.py
   │     │  │  ├─ statistics.py
   │     │  │  ├─ update
   │     │  │  │  ├─ schema.py
   │     │  │  │  ├─ snapshot.py
   │     │  │  │  ├─ sorting.py
   │     │  │  │  ├─ spec.py
   │     │  │  │  ├─ statistics.py
   │     │  │  │  ├─ validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ schema.cpython-313.pyc
   │     │  │  │     ├─ snapshot.cpython-313.pyc
   │     │  │  │     ├─ sorting.cpython-313.pyc
   │     │  │  │     ├─ spec.cpython-313.pyc
   │     │  │  │     ├─ statistics.cpython-313.pyc
   │     │  │  │     ├─ validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ upsert_util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ delete_file_index.cpython-313.pyc
   │     │  │     ├─ inspect.cpython-313.pyc
   │     │  │     ├─ locations.cpython-313.pyc
   │     │  │     ├─ maintenance.cpython-313.pyc
   │     │  │     ├─ metadata.cpython-313.pyc
   │     │  │     ├─ name_mapping.cpython-313.pyc
   │     │  │     ├─ puffin.cpython-313.pyc
   │     │  │     ├─ refs.cpython-313.pyc
   │     │  │     ├─ snapshots.cpython-313.pyc
   │     │  │     ├─ sorting.cpython-313.pyc
   │     │  │     ├─ statistics.cpython-313.pyc
   │     │  │     ├─ upsert_util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ transforms.py
   │     │  ├─ typedef.py
   │     │  ├─ types.py
   │     │  ├─ utils
   │     │  │  ├─ bin_packing.py
   │     │  │  ├─ concurrent.py
   │     │  │  ├─ config.py
   │     │  │  ├─ datetime.py
   │     │  │  ├─ decimal.py
   │     │  │  ├─ deprecated.py
   │     │  │  ├─ lazydict.py
   │     │  │  ├─ parsing.py
   │     │  │  ├─ properties.py
   │     │  │  ├─ schema_conversion.py
   │     │  │  ├─ singleton.py
   │     │  │  ├─ truncate.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bin_packing.cpython-313.pyc
   │     │  │     ├─ concurrent.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ datetime.cpython-313.pyc
   │     │  │     ├─ decimal.cpython-313.pyc
   │     │  │     ├─ deprecated.cpython-313.pyc
   │     │  │     ├─ lazydict.cpython-313.pyc
   │     │  │     ├─ parsing.cpython-313.pyc
   │     │  │     ├─ properties.cpython-313.pyc
   │     │  │     ├─ schema_conversion.cpython-313.pyc
   │     │  │     ├─ singleton.cpython-313.pyc
   │     │  │     ├─ truncate.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conversions.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ manifest.cpython-313.pyc
   │     │     ├─ partitioning.cpython-313.pyc
   │     │     ├─ schema.cpython-313.pyc
   │     │     ├─ serializers.cpython-313.pyc
   │     │     ├─ transforms.cpython-313.pyc
   │     │     ├─ typedef.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pyiceberg-0.11.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyjwt-2.11.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS.rst
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyparsing
   │     │  ├─ actions.py
   │     │  ├─ ai
   │     │  │  ├─ best_practices.md
   │     │  │  ├─ show_best_practices
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ common.py
   │     │  ├─ core.py
   │     │  ├─ diagram
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ helpers.py
   │     │  ├─ py.typed
   │     │  ├─ results.py
   │     │  ├─ testing.py
   │     │  ├─ tools
   │     │  │  ├─ cvt_pyparsing_pep8_names.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cvt_pyparsing_pep8_names.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ unicode.py
   │     │  ├─ util.py
   │     │  ├─ warnings.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ actions.cpython-313.pyc
   │     │     ├─ common.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ helpers.cpython-313.pyc
   │     │     ├─ results.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ unicode.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pyparsing-3.3.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pyroaring
   │     │  ├─ py.typed
   │     │  └─ __init__.pyi
   │     ├─ pyroaring-1.0.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyroaring.cp313-win_amd64.pyd
   │     ├─ python_dateutil-2.9.0.post0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  ├─ WHEEL
   │     │  └─ zip-safe
   │     ├─ python_dotenv-1.2.2.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ python_multipart
   │     │  ├─ decoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ multipart.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ decoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ multipart.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ python_multipart-0.0.22.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ realtime
   │     │  ├─ exceptions.py
   │     │  ├─ message.py
   │     │  ├─ py.typed
   │     │  ├─ transformers.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ channel.py
   │     │  │  ├─ client.py
   │     │  │  ├─ presence.py
   │     │  │  ├─ push.py
   │     │  │  ├─ timer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ channel.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ presence.cpython-313.pyc
   │     │  │     ├─ push.cpython-313.pyc
   │     │  │     ├─ timer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ channel.py
   │     │  │  ├─ client.py
   │     │  │  ├─ presence.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ channel.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ presence.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ message.cpython-313.pyc
   │     │     ├─ transformers.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ realtime-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ requests
   │     │  ├─ adapters.py
   │     │  ├─ api.py
   │     │  ├─ auth.py
   │     │  ├─ certs.py
   │     │  ├─ compat.py
   │     │  ├─ cookies.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ hooks.py
   │     │  ├─ models.py
   │     │  ├─ packages.py
   │     │  ├─ sessions.py
   │     │  ├─ status_codes.py
   │     │  ├─ structures.py
   │     │  ├─ utils.py
   │     │  ├─ _internal_utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ adapters.cpython-313.pyc
   │     │  │  ├─ api.cpython-313.pyc
   │     │  │  ├─ auth.cpython-313.pyc
   │     │  │  ├─ certs.cpython-313.pyc
   │     │  │  ├─ compat.cpython-313.pyc
   │     │  │  ├─ cookies.cpython-313.pyc
   │     │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  ├─ help.cpython-313.pyc
   │     │  │  ├─ hooks.cpython-313.pyc
   │     │  │  ├─ models.cpython-313.pyc
   │     │  │  ├─ packages.cpython-313.pyc
   │     │  │  ├─ sessions.cpython-313.pyc
   │     │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  ├─ structures.cpython-313.pyc
   │     │  │  ├─ utils.cpython-313.pyc
   │     │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  ├─ __init__.cpython-313.pyc
   │     │  │  └─ __version__.cpython-313.pyc
   │     │  └─ __version__.py
   │     ├─ requests-2.32.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ rich
   │     │  ├─ abc.py
   │     │  ├─ align.py
   │     │  ├─ ansi.py
   │     │  ├─ bar.py
   │     │  ├─ box.py
   │     │  ├─ cells.py
   │     │  ├─ color.py
   │     │  ├─ color_triplet.py
   │     │  ├─ columns.py
   │     │  ├─ console.py
   │     │  ├─ constrain.py
   │     │  ├─ containers.py
   │     │  ├─ control.py
   │     │  ├─ default_styles.py
   │     │  ├─ diagnose.py
   │     │  ├─ emoji.py
   │     │  ├─ errors.py
   │     │  ├─ filesize.py
   │     │  ├─ file_proxy.py
   │     │  ├─ highlighter.py
   │     │  ├─ json.py
   │     │  ├─ jupyter.py
   │     │  ├─ layout.py
   │     │  ├─ live.py
   │     │  ├─ live_render.py
   │     │  ├─ logging.py
   │     │  ├─ markdown.py
   │     │  ├─ markup.py
   │     │  ├─ measure.py
   │     │  ├─ padding.py
   │     │  ├─ pager.py
   │     │  ├─ palette.py
   │     │  ├─ panel.py
   │     │  ├─ pretty.py
   │     │  ├─ progress.py
   │     │  ├─ progress_bar.py
   │     │  ├─ prompt.py
   │     │  ├─ protocol.py
   │     │  ├─ py.typed
   │     │  ├─ region.py
   │     │  ├─ repr.py
   │     │  ├─ rule.py
   │     │  ├─ scope.py
   │     │  ├─ screen.py
   │     │  ├─ segment.py
   │     │  ├─ spinner.py
   │     │  ├─ status.py
   │     │  ├─ style.py
   │     │  ├─ styled.py
   │     │  ├─ syntax.py
   │     │  ├─ table.py
   │     │  ├─ terminal_theme.py
   │     │  ├─ text.py
   │     │  ├─ theme.py
   │     │  ├─ themes.py
   │     │  ├─ traceback.py
   │     │  ├─ tree.py
   │     │  ├─ _emoji_codes.py
   │     │  ├─ _emoji_replace.py
   │     │  ├─ _export_format.py
   │     │  ├─ _extension.py
   │     │  ├─ _fileno.py
   │     │  ├─ _inspect.py
   │     │  ├─ _log_render.py
   │     │  ├─ _loop.py
   │     │  ├─ _null_file.py
   │     │  ├─ _palettes.py
   │     │  ├─ _pick.py
   │     │  ├─ _ratio.py
   │     │  ├─ _spinners.py
   │     │  ├─ _stack.py
   │     │  ├─ _timer.py
   │     │  ├─ _unicode_data
   │     │  │  ├─ unicode10-0-0.py
   │     │  │  ├─ unicode11-0-0.py
   │     │  │  ├─ unicode12-0-0.py
   │     │  │  ├─ unicode12-1-0.py
   │     │  │  ├─ unicode13-0-0.py
   │     │  │  ├─ unicode14-0-0.py
   │     │  │  ├─ unicode15-0-0.py
   │     │  │  ├─ unicode15-1-0.py
   │     │  │  ├─ unicode16-0-0.py
   │     │  │  ├─ unicode17-0-0.py
   │     │  │  ├─ unicode4-1-0.py
   │     │  │  ├─ unicode5-0-0.py
   │     │  │  ├─ unicode5-1-0.py
   │     │  │  ├─ unicode5-2-0.py
   │     │  │  ├─ unicode6-0-0.py
   │     │  │  ├─ unicode6-1-0.py
   │     │  │  ├─ unicode6-2-0.py
   │     │  │  ├─ unicode6-3-0.py
   │     │  │  ├─ unicode7-0-0.py
   │     │  │  ├─ unicode8-0-0.py
   │     │  │  ├─ unicode9-0-0.py
   │     │  │  ├─ _versions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ unicode10-0-0.cpython-313.pyc
   │     │  │     ├─ unicode11-0-0.cpython-313.pyc
   │     │  │     ├─ unicode12-0-0.cpython-313.pyc
   │     │  │     ├─ unicode12-1-0.cpython-313.pyc
   │     │  │     ├─ unicode13-0-0.cpython-313.pyc
   │     │  │     ├─ unicode14-0-0.cpython-313.pyc
   │     │  │     ├─ unicode15-0-0.cpython-313.pyc
   │     │  │     ├─ unicode15-1-0.cpython-313.pyc
   │     │  │     ├─ unicode16-0-0.cpython-313.pyc
   │     │  │     ├─ unicode17-0-0.cpython-313.pyc
   │     │  │     ├─ unicode4-1-0.cpython-313.pyc
   │     │  │     ├─ unicode5-0-0.cpython-313.pyc
   │     │  │     ├─ unicode5-1-0.cpython-313.pyc
   │     │  │     ├─ unicode5-2-0.cpython-313.pyc
   │     │  │     ├─ unicode6-0-0.cpython-313.pyc
   │     │  │     ├─ unicode6-1-0.cpython-313.pyc
   │     │  │     ├─ unicode6-2-0.cpython-313.pyc
   │     │  │     ├─ unicode6-3-0.cpython-313.pyc
   │     │  │     ├─ unicode7-0-0.cpython-313.pyc
   │     │  │     ├─ unicode8-0-0.cpython-313.pyc
   │     │  │     ├─ unicode9-0-0.cpython-313.pyc
   │     │  │     ├─ _versions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _win32_console.py
   │     │  ├─ _windows.py
   │     │  ├─ _windows_renderer.py
   │     │  ├─ _wrap.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ abc.cpython-313.pyc
   │     │     ├─ align.cpython-313.pyc
   │     │     ├─ ansi.cpython-313.pyc
   │     │     ├─ bar.cpython-313.pyc
   │     │     ├─ box.cpython-313.pyc
   │     │     ├─ cells.cpython-313.pyc
   │     │     ├─ color.cpython-313.pyc
   │     │     ├─ color_triplet.cpython-313.pyc
   │     │     ├─ columns.cpython-313.pyc
   │     │     ├─ console.cpython-313.pyc
   │     │     ├─ constrain.cpython-313.pyc
   │     │     ├─ containers.cpython-313.pyc
   │     │     ├─ control.cpython-313.pyc
   │     │     ├─ default_styles.cpython-313.pyc
   │     │     ├─ diagnose.cpython-313.pyc
   │     │     ├─ emoji.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ filesize.cpython-313.pyc
   │     │     ├─ file_proxy.cpython-313.pyc
   │     │     ├─ highlighter.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ jupyter.cpython-313.pyc
   │     │     ├─ layout.cpython-313.pyc
   │     │     ├─ live.cpython-313.pyc
   │     │     ├─ live_render.cpython-313.pyc
   │     │     ├─ logging.cpython-313.pyc
   │     │     ├─ markdown.cpython-313.pyc
   │     │     ├─ markup.cpython-313.pyc
   │     │     ├─ measure.cpython-313.pyc
   │     │     ├─ padding.cpython-313.pyc
   │     │     ├─ pager.cpython-313.pyc
   │     │     ├─ palette.cpython-313.pyc
   │     │     ├─ panel.cpython-313.pyc
   │     │     ├─ pretty.cpython-313.pyc
   │     │     ├─ progress.cpython-313.pyc
   │     │     ├─ progress_bar.cpython-313.pyc
   │     │     ├─ prompt.cpython-313.pyc
   │     │     ├─ protocol.cpython-313.pyc
   │     │     ├─ region.cpython-313.pyc
   │     │     ├─ repr.cpython-313.pyc
   │     │     ├─ rule.cpython-313.pyc
   │     │     ├─ scope.cpython-313.pyc
   │     │     ├─ screen.cpython-313.pyc
   │     │     ├─ segment.cpython-313.pyc
   │     │     ├─ spinner.cpython-313.pyc
   │     │     ├─ status.cpython-313.pyc
   │     │     ├─ style.cpython-313.pyc
   │     │     ├─ styled.cpython-313.pyc
   │     │     ├─ syntax.cpython-313.pyc
   │     │     ├─ table.cpython-313.pyc
   │     │     ├─ terminal_theme.cpython-313.pyc
   │     │     ├─ text.cpython-313.pyc
   │     │     ├─ theme.cpython-313.pyc
   │     │     ├─ themes.cpython-313.pyc
   │     │     ├─ traceback.cpython-313.pyc
   │     │     ├─ tree.cpython-313.pyc
   │     │     ├─ _emoji_codes.cpython-313.pyc
   │     │     ├─ _emoji_replace.cpython-313.pyc
   │     │     ├─ _export_format.cpython-313.pyc
   │     │     ├─ _extension.cpython-313.pyc
   │     │     ├─ _fileno.cpython-313.pyc
   │     │     ├─ _inspect.cpython-313.pyc
   │     │     ├─ _log_render.cpython-313.pyc
   │     │     ├─ _loop.cpython-313.pyc
   │     │     ├─ _null_file.cpython-313.pyc
   │     │     ├─ _palettes.cpython-313.pyc
   │     │     ├─ _pick.cpython-313.pyc
   │     │     ├─ _ratio.cpython-313.pyc
   │     │     ├─ _spinners.cpython-313.pyc
   │     │     ├─ _stack.cpython-313.pyc
   │     │     ├─ _timer.cpython-313.pyc
   │     │     ├─ _win32_console.cpython-313.pyc
   │     │     ├─ _windows.cpython-313.pyc
   │     │     ├─ _windows_renderer.cpython-313.pyc
   │     │     ├─ _wrap.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ rich-14.3.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ six-1.17.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ six.py
   │     ├─ starlette
   │     │  ├─ applications.py
   │     │  ├─ authentication.py
   │     │  ├─ background.py
   │     │  ├─ concurrency.py
   │     │  ├─ config.py
   │     │  ├─ convertors.py
   │     │  ├─ datastructures.py
   │     │  ├─ endpoints.py
   │     │  ├─ exceptions.py
   │     │  ├─ formparsers.py
   │     │  ├─ middleware
   │     │  │  ├─ authentication.py
   │     │  │  ├─ base.py
   │     │  │  ├─ cors.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ sessions.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ authentication.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ sessions.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ schemas.py
   │     │  ├─ staticfiles.py
   │     │  ├─ status.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ websockets.py
   │     │  ├─ _exception_handler.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ authentication.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ convertors.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ endpoints.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formparsers.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ schemas.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ status.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ _exception_handler.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ starlette-0.52.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ storage3
   │     │  ├─ constants.py
   │     │  ├─ exceptions.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ analytics.py
   │     │  │  ├─ bucket.py
   │     │  │  ├─ client.py
   │     │  │  ├─ file_api.py
   │     │  │  ├─ request.py
   │     │  │  ├─ vectors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ analytics.cpython-313.pyc
   │     │  │     ├─ bucket.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ file_api.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ vectors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ analytics.py
   │     │  │  ├─ bucket.py
   │     │  │  ├─ client.py
   │     │  │  ├─ file_api.py
   │     │  │  ├─ request.py
   │     │  │  ├─ vectors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ analytics.cpython-313.pyc
   │     │  │     ├─ bucket.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ file_api.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ vectors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ storage3-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ strenum
   │     │  ├─ mixins.py
   │     │  ├─ mixins.pyi
   │     │  ├─ py.typed
   │     │  ├─ _name_mangler.py
   │     │  ├─ _name_mangler.pyi
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ mixins.cpython-313.pyc
   │     │     ├─ _name_mangler.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ StrEnum-0.4.15.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ strictyaml
   │     │  ├─ any_validator.py
   │     │  ├─ compound.py
   │     │  ├─ constants.py
   │     │  ├─ dumper.py
   │     │  ├─ exceptions.py
   │     │  ├─ parser.py
   │     │  ├─ representation.py
   │     │  ├─ ruamel
   │     │  │  ├─ anchor.py
   │     │  │  ├─ comments.py
   │     │  │  ├─ compat.py
   │     │  │  ├─ composer.py
   │     │  │  ├─ configobjwalker.py
   │     │  │  ├─ constructor.py
   │     │  │  ├─ cyaml.py
   │     │  │  ├─ dumper.py
   │     │  │  ├─ emitter.py
   │     │  │  ├─ error.py
   │     │  │  ├─ events.py
   │     │  │  ├─ loader.py
   │     │  │  ├─ main.py
   │     │  │  ├─ nodes.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ reader.py
   │     │  │  ├─ representer.py
   │     │  │  ├─ resolver.py
   │     │  │  ├─ scalarbool.py
   │     │  │  ├─ scalarfloat.py
   │     │  │  ├─ scalarint.py
   │     │  │  ├─ scalarstring.py
   │     │  │  ├─ scanner.py
   │     │  │  ├─ serializer.py
   │     │  │  ├─ timestamp.py
   │     │  │  ├─ tokens.py
   │     │  │  ├─ util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anchor.cpython-313.pyc
   │     │  │     ├─ comments.cpython-313.pyc
   │     │  │     ├─ compat.cpython-313.pyc
   │     │  │     ├─ composer.cpython-313.pyc
   │     │  │     ├─ configobjwalker.cpython-313.pyc
   │     │  │     ├─ constructor.cpython-313.pyc
   │     │  │     ├─ cyaml.cpython-313.pyc
   │     │  │     ├─ dumper.cpython-313.pyc
   │     │  │     ├─ emitter.cpython-313.pyc
   │     │  │     ├─ error.cpython-313.pyc
   │     │  │     ├─ events.cpython-313.pyc
   │     │  │     ├─ loader.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ nodes.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ reader.cpython-313.pyc
   │     │  │     ├─ representer.cpython-313.pyc
   │     │  │     ├─ resolver.cpython-313.pyc
   │     │  │     ├─ scalarbool.cpython-313.pyc
   │     │  │     ├─ scalarfloat.cpython-313.pyc
   │     │  │     ├─ scalarint.cpython-313.pyc
   │     │  │     ├─ scalarstring.cpython-313.pyc
   │     │  │     ├─ scanner.cpython-313.pyc
   │     │  │     ├─ serializer.cpython-313.pyc
   │     │  │     ├─ timestamp.cpython-313.pyc
   │     │  │     ├─ tokens.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ scalar.py
   │     │  ├─ utils.py
   │     │  ├─ validators.py
   │     │  ├─ yamllocation.py
   │     │  ├─ yamlpointer.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ any_validator.cpython-313.pyc
   │     │     ├─ compound.cpython-313.pyc
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ dumper.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ representation.cpython-313.pyc
   │     │     ├─ scalar.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ validators.cpython-313.pyc
   │     │     ├─ yamllocation.cpython-313.pyc
   │     │     ├─ yamlpointer.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ strictyaml-1.7.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ supabase
   │     │  ├─ client.py
   │     │  ├─ lib
   │     │  │  ├─ client_options.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client_options.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ auth_client.py
   │     │  │  ├─ client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth_client.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ auth_client.py
   │     │  │  ├─ client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth_client.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ client.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ supabase_auth
   │     │  ├─ constants.py
   │     │  ├─ errors.py
   │     │  ├─ helpers.py
   │     │  ├─ py.typed
   │     │  ├─ timer.py
   │     │  ├─ types.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ gotrue_admin_api.py
   │     │  │  ├─ gotrue_admin_mfa_api.py
   │     │  │  ├─ gotrue_admin_oauth_api.py
   │     │  │  ├─ gotrue_base_api.py
   │     │  │  ├─ gotrue_client.py
   │     │  │  ├─ gotrue_mfa_api.py
   │     │  │  ├─ storage.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ gotrue_admin_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_mfa_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_oauth_api.cpython-313.pyc
   │     │  │     ├─ gotrue_base_api.cpython-313.pyc
   │     │  │     ├─ gotrue_client.cpython-313.pyc
   │     │  │     ├─ gotrue_mfa_api.cpython-313.pyc
   │     │  │     ├─ storage.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ gotrue_admin_api.py
   │     │  │  ├─ gotrue_admin_mfa_api.py
   │     │  │  ├─ gotrue_admin_oauth_api.py
   │     │  │  ├─ gotrue_base_api.py
   │     │  │  ├─ gotrue_client.py
   │     │  │  ├─ gotrue_mfa_api.py
   │     │  │  ├─ storage.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ gotrue_admin_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_mfa_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_oauth_api.cpython-313.pyc
   │     │  │     ├─ gotrue_base_api.cpython-313.pyc
   │     │  │     ├─ gotrue_client.cpython-313.pyc
   │     │  │     ├─ gotrue_mfa_api.cpython-313.pyc
   │     │  │     ├─ storage.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ helpers.cpython-313.pyc
   │     │     ├─ timer.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase_auth-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ supabase_functions
   │     │  ├─ errors.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ functions_client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ functions_client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ functions_client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ functions_client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase_functions-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ tenacity
   │     │  ├─ after.py
   │     │  ├─ asyncio
   │     │  │  ├─ retry.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ retry.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ before.py
   │     │  ├─ before_sleep.py
   │     │  ├─ nap.py
   │     │  ├─ py.typed
   │     │  ├─ retry.py
   │     │  ├─ stop.py
   │     │  ├─ tornadoweb.py
   │     │  ├─ wait.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ after.cpython-313.pyc
   │     │     ├─ before.cpython-313.pyc
   │     │     ├─ before_sleep.cpython-313.pyc
   │     │     ├─ nap.cpython-313.pyc
   │     │     ├─ retry.cpython-313.pyc
   │     │     ├─ stop.cpython-313.pyc
   │     │     ├─ tornadoweb.cpython-313.pyc
   │     │     ├─ wait.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tenacity-9.1.4.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ typing_extensions-4.15.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ typing_extensions.py
   │     ├─ typing_inspection
   │     │  ├─ introspection.py
   │     │  ├─ py.typed
   │     │  ├─ typing_objects.py
   │     │  ├─ typing_objects.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ introspection.cpython-313.pyc
   │     │     ├─ typing_objects.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ typing_inspection-0.4.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ tzdata
   │     │  ├─ zoneinfo
   │     │  │  ├─ Africa
   │     │  │  │  ├─ Abidjan
   │     │  │  │  ├─ Accra
   │     │  │  │  ├─ Addis_Ababa
   │     │  │  │  ├─ Algiers
   │     │  │  │  ├─ Asmara
   │     │  │  │  ├─ Asmera
   │     │  │  │  ├─ Bamako
   │     │  │  │  ├─ Bangui
   │     │  │  │  ├─ Banjul
   │     │  │  │  ├─ Bissau
   │     │  │  │  ├─ Blantyre
   │     │  │  │  ├─ Brazzaville
   │     │  │  │  ├─ Bujumbura
   │     │  │  │  ├─ Cairo
   │     │  │  │  ├─ Casablanca
   │     │  │  │  ├─ Ceuta
   │     │  │  │  ├─ Conakry
   │     │  │  │  ├─ Dakar
   │     │  │  │  ├─ Dar_es_Salaam
   │     │  │  │  ├─ Djibouti
   │     │  │  │  ├─ Douala
   │     │  │  │  ├─ El_Aaiun
   │     │  │  │  ├─ Freetown
   │     │  │  │  ├─ Gaborone
   │     │  │  │  ├─ Harare
   │     │  │  │  ├─ Johannesburg
   │     │  │  │  ├─ Juba
   │     │  │  │  ├─ Kampala
   │     │  │  │  ├─ Khartoum
   │     │  │  │  ├─ Kigali
   │     │  │  │  ├─ Kinshasa
   │     │  │  │  ├─ Lagos
   │     │  │  │  ├─ Libreville
   │     │  │  │  ├─ Lome
   │     │  │  │  ├─ Luanda
   │     │  │  │  ├─ Lubumbashi
   │     │  │  │  ├─ Lusaka
   │     │  │  │  ├─ Malabo
   │     │  │  │  ├─ Maputo
   │     │  │  │  ├─ Maseru
   │     │  │  │  ├─ Mbabane
   │     │  │  │  ├─ Mogadishu
   │     │  │  │  ├─ Monrovia
   │     │  │  │  ├─ Nairobi
   │     │  │  │  ├─ Ndjamena
   │     │  │  │  ├─ Niamey
   │     │  │  │  ├─ Nouakchott
   │     │  │  │  ├─ Ouagadougou
   │     │  │  │  ├─ Porto-Novo
   │     │  │  │  ├─ Sao_Tome
   │     │  │  │  ├─ Timbuktu
   │     │  │  │  ├─ Tripoli
   │     │  │  │  ├─ Tunis
   │     │  │  │  ├─ Windhoek
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ America
   │     │  │  │  ├─ Adak
   │     │  │  │  ├─ Anchorage
   │     │  │  │  ├─ Anguilla
   │     │  │  │  ├─ Antigua
   │     │  │  │  ├─ Araguaina
   │     │  │  │  ├─ Argentina
   │     │  │  │  │  ├─ Buenos_Aires
   │     │  │  │  │  ├─ Catamarca
   │     │  │  │  │  ├─ ComodRivadavia
   │     │  │  │  │  ├─ Cordoba
   │     │  │  │  │  ├─ Jujuy
   │     │  │  │  │  ├─ La_Rioja
   │     │  │  │  │  ├─ Mendoza
   │     │  │  │  │  ├─ Rio_Gallegos
   │     │  │  │  │  ├─ Salta
   │     │  │  │  │  ├─ San_Juan
   │     │  │  │  │  ├─ San_Luis
   │     │  │  │  │  ├─ Tucuman
   │     │  │  │  │  ├─ Ushuaia
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Aruba
   │     │  │  │  ├─ Asuncion
   │     │  │  │  ├─ Atikokan
   │     │  │  │  ├─ Atka
   │     │  │  │  ├─ Bahia
   │     │  │  │  ├─ Bahia_Banderas
   │     │  │  │  ├─ Barbados
   │     │  │  │  ├─ Belem
   │     │  │  │  ├─ Belize
   │     │  │  │  ├─ Blanc-Sablon
   │     │  │  │  ├─ Boa_Vista
   │     │  │  │  ├─ Bogota
   │     │  │  │  ├─ Boise
   │     │  │  │  ├─ Buenos_Aires
   │     │  │  │  ├─ Cambridge_Bay
   │     │  │  │  ├─ Campo_Grande
   │     │  │  │  ├─ Cancun
   │     │  │  │  ├─ Caracas
   │     │  │  │  ├─ Catamarca
   │     │  │  │  ├─ Cayenne
   │     │  │  │  ├─ Cayman
   │     │  │  │  ├─ Chicago
   │     │  │  │  ├─ Chihuahua
   │     │  │  │  ├─ Ciudad_Juarez
   │     │  │  │  ├─ Coral_Harbour
   │     │  │  │  ├─ Cordoba
   │     │  │  │  ├─ Costa_Rica
   │     │  │  │  ├─ Coyhaique
   │     │  │  │  ├─ Creston
   │     │  │  │  ├─ Cuiaba
   │     │  │  │  ├─ Curacao
   │     │  │  │  ├─ Danmarkshavn
   │     │  │  │  ├─ Dawson
   │     │  │  │  ├─ Dawson_Creek
   │     │  │  │  ├─ Denver
   │     │  │  │  ├─ Detroit
   │     │  │  │  ├─ Dominica
   │     │  │  │  ├─ Edmonton
   │     │  │  │  ├─ Eirunepe
   │     │  │  │  ├─ El_Salvador
   │     │  │  │  ├─ Ensenada
   │     │  │  │  ├─ Fortaleza
   │     │  │  │  ├─ Fort_Nelson
   │     │  │  │  ├─ Fort_Wayne
   │     │  │  │  ├─ Glace_Bay
   │     │  │  │  ├─ Godthab
   │     │  │  │  ├─ Goose_Bay
   │     │  │  │  ├─ Grand_Turk
   │     │  │  │  ├─ Grenada
   │     │  │  │  ├─ Guadeloupe
   │     │  │  │  ├─ Guatemala
   │     │  │  │  ├─ Guayaquil
   │     │  │  │  ├─ Guyana
   │     │  │  │  ├─ Halifax
   │     │  │  │  ├─ Havana
   │     │  │  │  ├─ Hermosillo
   │     │  │  │  ├─ Indiana
   │     │  │  │  │  ├─ Indianapolis
   │     │  │  │  │  ├─ Knox
   │     │  │  │  │  ├─ Marengo
   │     │  │  │  │  ├─ Petersburg
   │     │  │  │  │  ├─ Tell_City
   │     │  │  │  │  ├─ Vevay
   │     │  │  │  │  ├─ Vincennes
   │     │  │  │  │  ├─ Winamac
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Indianapolis
   │     │  │  │  ├─ Inuvik
   │     │  │  │  ├─ Iqaluit
   │     │  │  │  ├─ Jamaica
   │     │  │  │  ├─ Jujuy
   │     │  │  │  ├─ Juneau
   │     │  │  │  ├─ Kentucky
   │     │  │  │  │  ├─ Louisville
   │     │  │  │  │  ├─ Monticello
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Knox_IN
   │     │  │  │  ├─ Kralendijk
   │     │  │  │  ├─ La_Paz
   │     │  │  │  ├─ Lima
   │     │  │  │  ├─ Los_Angeles
   │     │  │  │  ├─ Louisville
   │     │  │  │  ├─ Lower_Princes
   │     │  │  │  ├─ Maceio
   │     │  │  │  ├─ Managua
   │     │  │  │  ├─ Manaus
   │     │  │  │  ├─ Marigot
   │     │  │  │  ├─ Martinique
   │     │  │  │  ├─ Matamoros
   │     │  │  │  ├─ Mazatlan
   │     │  │  │  ├─ Mendoza
   │     │  │  │  ├─ Menominee
   │     │  │  │  ├─ Merida
   │     │  │  │  ├─ Metlakatla
   │     │  │  │  ├─ Mexico_City
   │     │  │  │  ├─ Miquelon
   │     │  │  │  ├─ Moncton
   │     │  │  │  ├─ Monterrey
   │     │  │  │  ├─ Montevideo
   │     │  │  │  ├─ Montreal
   │     │  │  │  ├─ Montserrat
   │     │  │  │  ├─ Nassau
   │     │  │  │  ├─ New_York
   │     │  │  │  ├─ Nipigon
   │     │  │  │  ├─ Nome
   │     │  │  │  ├─ Noronha
   │     │  │  │  ├─ North_Dakota
   │     │  │  │  │  ├─ Beulah
   │     │  │  │  │  ├─ Center
   │     │  │  │  │  ├─ New_Salem
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Nuuk
   │     │  │  │  ├─ Ojinaga
   │     │  │  │  ├─ Panama
   │     │  │  │  ├─ Pangnirtung
   │     │  │  │  ├─ Paramaribo
   │     │  │  │  ├─ Phoenix
   │     │  │  │  ├─ Port-au-Prince
   │     │  │  │  ├─ Porto_Acre
   │     │  │  │  ├─ Porto_Velho
   │     │  │  │  ├─ Port_of_Spain
   │     │  │  │  ├─ Puerto_Rico
   │     │  │  │  ├─ Punta_Arenas
   │     │  │  │  ├─ Rainy_River
   │     │  │  │  ├─ Rankin_Inlet
   │     │  │  │  ├─ Recife
   │     │  │  │  ├─ Regina
   │     │  │  │  ├─ Resolute
   │     │  │  │  ├─ Rio_Branco
   │     │  │  │  ├─ Rosario
   │     │  │  │  ├─ Santarem
   │     │  │  │  ├─ Santa_Isabel
   │     │  │  │  ├─ Santiago
   │     │  │  │  ├─ Santo_Domingo
   │     │  │  │  ├─ Sao_Paulo
   │     │  │  │  ├─ Scoresbysund
   │     │  │  │  ├─ Shiprock
   │     │  │  │  ├─ Sitka
   │     │  │  │  ├─ St_Barthelemy
   │     │  │  │  ├─ St_Johns
   │     │  │  │  ├─ St_Kitts
   │     │  │  │  ├─ St_Lucia
   │     │  │  │  ├─ St_Thomas
   │     │  │  │  ├─ St_Vincent
   │     │  │  │  ├─ Swift_Current
   │     │  │  │  ├─ Tegucigalpa
   │     │  │  │  ├─ Thule
   │     │  │  │  ├─ Thunder_Bay
   │     │  │  │  ├─ Tijuana
   │     │  │  │  ├─ Toronto
   │     │  │  │  ├─ Tortola
   │     │  │  │  ├─ Vancouver
   │     │  │  │  ├─ Virgin
   │     │  │  │  ├─ Whitehorse
   │     │  │  │  ├─ Winnipeg
   │     │  │  │  ├─ Yakutat
   │     │  │  │  ├─ Yellowknife
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Antarctica
   │     │  │  │  ├─ Casey
   │     │  │  │  ├─ Davis
   │     │  │  │  ├─ DumontDUrville
   │     │  │  │  ├─ Macquarie
   │     │  │  │  ├─ Mawson
   │     │  │  │  ├─ McMurdo
   │     │  │  │  ├─ Palmer
   │     │  │  │  ├─ Rothera
   │     │  │  │  ├─ South_Pole
   │     │  │  │  ├─ Syowa
   │     │  │  │  ├─ Troll
   │     │  │  │  ├─ Vostok
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Arctic
   │     │  │  │  ├─ Longyearbyen
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Asia
   │     │  │  │  ├─ Aden
   │     │  │  │  ├─ Almaty
   │     │  │  │  ├─ Amman
   │     │  │  │  ├─ Anadyr
   │     │  │  │  ├─ Aqtau
   │     │  │  │  ├─ Aqtobe
   │     │  │  │  ├─ Ashgabat
   │     │  │  │  ├─ Ashkhabad
   │     │  │  │  ├─ Atyrau
   │     │  │  │  ├─ Baghdad
   │     │  │  │  ├─ Bahrain
   │     │  │  │  ├─ Baku
   │     │  │  │  ├─ Bangkok
   │     │  │  │  ├─ Barnaul
   │     │  │  │  ├─ Beirut
   │     │  │  │  ├─ Bishkek
   │     │  │  │  ├─ Brunei
   │     │  │  │  ├─ Calcutta
   │     │  │  │  ├─ Chita
   │     │  │  │  ├─ Choibalsan
   │     │  │  │  ├─ Chongqing
   │     │  │  │  ├─ Chungking
   │     │  │  │  ├─ Colombo
   │     │  │  │  ├─ Dacca
   │     │  │  │  ├─ Damascus
   │     │  │  │  ├─ Dhaka
   │     │  │  │  ├─ Dili
   │     │  │  │  ├─ Dubai
   │     │  │  │  ├─ Dushanbe
   │     │  │  │  ├─ Famagusta
   │     │  │  │  ├─ Gaza
   │     │  │  │  ├─ Harbin
   │     │  │  │  ├─ Hebron
   │     │  │  │  ├─ Hong_Kong
   │     │  │  │  ├─ Hovd
   │     │  │  │  ├─ Ho_Chi_Minh
   │     │  │  │  ├─ Irkutsk
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jakarta
   │     │  │  │  ├─ Jayapura
   │     │  │  │  ├─ Jerusalem
   │     │  │  │  ├─ Kabul
   │     │  │  │  ├─ Kamchatka
   │     │  │  │  ├─ Karachi
   │     │  │  │  ├─ Kashgar
   │     │  │  │  ├─ Kathmandu
   │     │  │  │  ├─ Katmandu
   │     │  │  │  ├─ Khandyga
   │     │  │  │  ├─ Kolkata
   │     │  │  │  ├─ Krasnoyarsk
   │     │  │  │  ├─ Kuala_Lumpur
   │     │  │  │  ├─ Kuching
   │     │  │  │  ├─ Kuwait
   │     │  │  │  ├─ Macao
   │     │  │  │  ├─ Macau
   │     │  │  │  ├─ Magadan
   │     │  │  │  ├─ Makassar
   │     │  │  │  ├─ Manila
   │     │  │  │  ├─ Muscat
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Novokuznetsk
   │     │  │  │  ├─ Novosibirsk
   │     │  │  │  ├─ Omsk
   │     │  │  │  ├─ Oral
   │     │  │  │  ├─ Phnom_Penh
   │     │  │  │  ├─ Pontianak
   │     │  │  │  ├─ Pyongyang
   │     │  │  │  ├─ Qatar
   │     │  │  │  ├─ Qostanay
   │     │  │  │  ├─ Qyzylorda
   │     │  │  │  ├─ Rangoon
   │     │  │  │  ├─ Riyadh
   │     │  │  │  ├─ Saigon
   │     │  │  │  ├─ Sakhalin
   │     │  │  │  ├─ Samarkand
   │     │  │  │  ├─ Seoul
   │     │  │  │  ├─ Shanghai
   │     │  │  │  ├─ Singapore
   │     │  │  │  ├─ Srednekolymsk
   │     │  │  │  ├─ Taipei
   │     │  │  │  ├─ Tashkent
   │     │  │  │  ├─ Tbilisi
   │     │  │  │  ├─ Tehran
   │     │  │  │  ├─ Tel_Aviv
   │     │  │  │  ├─ Thimbu
   │     │  │  │  ├─ Thimphu
   │     │  │  │  ├─ Tokyo
   │     │  │  │  ├─ Tomsk
   │     │  │  │  ├─ Ujung_Pandang
   │     │  │  │  ├─ Ulaanbaatar
   │     │  │  │  ├─ Ulan_Bator
   │     │  │  │  ├─ Urumqi
   │     │  │  │  ├─ Ust-Nera
   │     │  │  │  ├─ Vientiane
   │     │  │  │  ├─ Vladivostok
   │     │  │  │  ├─ Yakutsk
   │     │  │  │  ├─ Yangon
   │     │  │  │  ├─ Yekaterinburg
   │     │  │  │  ├─ Yerevan
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Atlantic
   │     │  │  │  ├─ Azores
   │     │  │  │  ├─ Bermuda
   │     │  │  │  ├─ Canary
   │     │  │  │  ├─ Cape_Verde
   │     │  │  │  ├─ Faeroe
   │     │  │  │  ├─ Faroe
   │     │  │  │  ├─ Jan_Mayen
   │     │  │  │  ├─ Madeira
   │     │  │  │  ├─ Reykjavik
   │     │  │  │  ├─ South_Georgia
   │     │  │  │  ├─ Stanley
   │     │  │  │  ├─ St_Helena
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Australia
   │     │  │  │  ├─ ACT
   │     │  │  │  ├─ Adelaide
   │     │  │  │  ├─ Brisbane
   │     │  │  │  ├─ Broken_Hill
   │     │  │  │  ├─ Canberra
   │     │  │  │  ├─ Currie
   │     │  │  │  ├─ Darwin
   │     │  │  │  ├─ Eucla
   │     │  │  │  ├─ Hobart
   │     │  │  │  ├─ LHI
   │     │  │  │  ├─ Lindeman
   │     │  │  │  ├─ Lord_Howe
   │     │  │  │  ├─ Melbourne
   │     │  │  │  ├─ North
   │     │  │  │  ├─ NSW
   │     │  │  │  ├─ Perth
   │     │  │  │  ├─ Queensland
   │     │  │  │  ├─ South
   │     │  │  │  ├─ Sydney
   │     │  │  │  ├─ Tasmania
   │     │  │  │  ├─ Victoria
   │     │  │  │  ├─ West
   │     │  │  │  ├─ Yancowinna
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Brazil
   │     │  │  │  ├─ Acre
   │     │  │  │  ├─ DeNoronha
   │     │  │  │  ├─ East
   │     │  │  │  ├─ West
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Canada
   │     │  │  │  ├─ Atlantic
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Newfoundland
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Saskatchewan
   │     │  │  │  ├─ Yukon
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CET
   │     │  │  ├─ Chile
   │     │  │  │  ├─ Continental
   │     │  │  │  ├─ EasterIsland
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CST6CDT
   │     │  │  ├─ Cuba
   │     │  │  ├─ EET
   │     │  │  ├─ Egypt
   │     │  │  ├─ Eire
   │     │  │  ├─ EST
   │     │  │  ├─ EST5EDT
   │     │  │  ├─ Etc
   │     │  │  │  ├─ GMT
   │     │  │  │  ├─ GMT+0
   │     │  │  │  ├─ GMT+1
   │     │  │  │  ├─ GMT+10
   │     │  │  │  ├─ GMT+11
   │     │  │  │  ├─ GMT+12
   │     │  │  │  ├─ GMT+2
   │     │  │  │  ├─ GMT+3
   │     │  │  │  ├─ GMT+4
   │     │  │  │  ├─ GMT+5
   │     │  │  │  ├─ GMT+6
   │     │  │  │  ├─ GMT+7
   │     │  │  │  ├─ GMT+8
   │     │  │  │  ├─ GMT+9
   │     │  │  │  ├─ GMT-0
   │     │  │  │  ├─ GMT-1
   │     │  │  │  ├─ GMT-10
   │     │  │  │  ├─ GMT-11
   │     │  │  │  ├─ GMT-12
   │     │  │  │  ├─ GMT-13
   │     │  │  │  ├─ GMT-14
   │     │  │  │  ├─ GMT-2
   │     │  │  │  ├─ GMT-3
   │     │  │  │  ├─ GMT-4
   │     │  │  │  ├─ GMT-5
   │     │  │  │  ├─ GMT-6
   │     │  │  │  ├─ GMT-7
   │     │  │  │  ├─ GMT-8
   │     │  │  │  ├─ GMT-9
   │     │  │  │  ├─ GMT0
   │     │  │  │  ├─ Greenwich
   │     │  │  │  ├─ UCT
   │     │  │  │  ├─ Universal
   │     │  │  │  ├─ UTC
   │     │  │  │  ├─ Zulu
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Europe
   │     │  │  │  ├─ Amsterdam
   │     │  │  │  ├─ Andorra
   │     │  │  │  ├─ Astrakhan
   │     │  │  │  ├─ Athens
   │     │  │  │  ├─ Belfast
   │     │  │  │  ├─ Belgrade
   │     │  │  │  ├─ Berlin
   │     │  │  │  ├─ Bratislava
   │     │  │  │  ├─ Brussels
   │     │  │  │  ├─ Bucharest
   │     │  │  │  ├─ Budapest
   │     │  │  │  ├─ Busingen
   │     │  │  │  ├─ Chisinau
   │     │  │  │  ├─ Copenhagen
   │     │  │  │  ├─ Dublin
   │     │  │  │  ├─ Gibraltar
   │     │  │  │  ├─ Guernsey
   │     │  │  │  ├─ Helsinki
   │     │  │  │  ├─ Isle_of_Man
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jersey
   │     │  │  │  ├─ Kaliningrad
   │     │  │  │  ├─ Kiev
   │     │  │  │  ├─ Kirov
   │     │  │  │  ├─ Kyiv
   │     │  │  │  ├─ Lisbon
   │     │  │  │  ├─ Ljubljana
   │     │  │  │  ├─ London
   │     │  │  │  ├─ Luxembourg
   │     │  │  │  ├─ Madrid
   │     │  │  │  ├─ Malta
   │     │  │  │  ├─ Mariehamn
   │     │  │  │  ├─ Minsk
   │     │  │  │  ├─ Monaco
   │     │  │  │  ├─ Moscow
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Oslo
   │     │  │  │  ├─ Paris
   │     │  │  │  ├─ Podgorica
   │     │  │  │  ├─ Prague
   │     │  │  │  ├─ Riga
   │     │  │  │  ├─ Rome
   │     │  │  │  ├─ Samara
   │     │  │  │  ├─ San_Marino
   │     │  │  │  ├─ Sarajevo
   │     │  │  │  ├─ Saratov
   │     │  │  │  ├─ Simferopol
   │     │  │  │  ├─ Skopje
   │     │  │  │  ├─ Sofia
   │     │  │  │  ├─ Stockholm
   │     │  │  │  ├─ Tallinn
   │     │  │  │  ├─ Tirane
   │     │  │  │  ├─ Tiraspol
   │     │  │  │  ├─ Ulyanovsk
   │     │  │  │  ├─ Uzhgorod
   │     │  │  │  ├─ Vaduz
   │     │  │  │  ├─ Vatican
   │     │  │  │  ├─ Vienna
   │     │  │  │  ├─ Vilnius
   │     │  │  │  ├─ Volgograd
   │     │  │  │  ├─ Warsaw
   │     │  │  │  ├─ Zagreb
   │     │  │  │  ├─ Zaporozhye
   │     │  │  │  ├─ Zurich
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Factory
   │     │  │  ├─ GB
   │     │  │  ├─ GB-Eire
   │     │  │  ├─ GMT
   │     │  │  ├─ GMT+0
   │     │  │  ├─ GMT-0
   │     │  │  ├─ GMT0
   │     │  │  ├─ Greenwich
   │     │  │  ├─ Hongkong
   │     │  │  ├─ HST
   │     │  │  ├─ Iceland
   │     │  │  ├─ Indian
   │     │  │  │  ├─ Antananarivo
   │     │  │  │  ├─ Chagos
   │     │  │  │  ├─ Christmas
   │     │  │  │  ├─ Cocos
   │     │  │  │  ├─ Comoro
   │     │  │  │  ├─ Kerguelen
   │     │  │  │  ├─ Mahe
   │     │  │  │  ├─ Maldives
   │     │  │  │  ├─ Mauritius
   │     │  │  │  ├─ Mayotte
   │     │  │  │  ├─ Reunion
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Iran
   │     │  │  ├─ iso3166.tab
   │     │  │  ├─ Israel
   │     │  │  ├─ Jamaica
   │     │  │  ├─ Japan
   │     │  │  ├─ Kwajalein
   │     │  │  ├─ leapseconds
   │     │  │  ├─ Libya
   │     │  │  ├─ MET
   │     │  │  ├─ Mexico
   │     │  │  │  ├─ BajaNorte
   │     │  │  │  ├─ BajaSur
   │     │  │  │  ├─ General
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ MST
   │     │  │  ├─ MST7MDT
   │     │  │  ├─ Navajo
   │     │  │  ├─ NZ
   │     │  │  ├─ NZ-CHAT
   │     │  │  ├─ Pacific
   │     │  │  │  ├─ Apia
   │     │  │  │  ├─ Auckland
   │     │  │  │  ├─ Bougainville
   │     │  │  │  ├─ Chatham
   │     │  │  │  ├─ Chuuk
   │     │  │  │  ├─ Easter
   │     │  │  │  ├─ Efate
   │     │  │  │  ├─ Enderbury
   │     │  │  │  ├─ Fakaofo
   │     │  │  │  ├─ Fiji
   │     │  │  │  ├─ Funafuti
   │     │  │  │  ├─ Galapagos
   │     │  │  │  ├─ Gambier
   │     │  │  │  ├─ Guadalcanal
   │     │  │  │  ├─ Guam
   │     │  │  │  ├─ Honolulu
   │     │  │  │  ├─ Johnston
   │     │  │  │  ├─ Kanton
   │     │  │  │  ├─ Kiritimati
   │     │  │  │  ├─ Kosrae
   │     │  │  │  ├─ Kwajalein
   │     │  │  │  ├─ Majuro
   │     │  │  │  ├─ Marquesas
   │     │  │  │  ├─ Midway
   │     │  │  │  ├─ Nauru
   │     │  │  │  ├─ Niue
   │     │  │  │  ├─ Norfolk
   │     │  │  │  ├─ Noumea
   │     │  │  │  ├─ Pago_Pago
   │     │  │  │  ├─ Palau
   │     │  │  │  ├─ Pitcairn
   │     │  │  │  ├─ Pohnpei
   │     │  │  │  ├─ Ponape
   │     │  │  │  ├─ Port_Moresby
   │     │  │  │  ├─ Rarotonga
   │     │  │  │  ├─ Saipan
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ Tahiti
   │     │  │  │  ├─ Tarawa
   │     │  │  │  ├─ Tongatapu
   │     │  │  │  ├─ Truk
   │     │  │  │  ├─ Wake
   │     │  │  │  ├─ Wallis
   │     │  │  │  ├─ Yap
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Poland
   │     │  │  ├─ Portugal
   │     │  │  ├─ PRC
   │     │  │  ├─ PST8PDT
   │     │  │  ├─ ROC
   │     │  │  ├─ ROK
   │     │  │  ├─ Singapore
   │     │  │  ├─ Turkey
   │     │  │  ├─ tzdata.zi
   │     │  │  ├─ UCT
   │     │  │  ├─ Universal
   │     │  │  ├─ US
   │     │  │  │  ├─ Alaska
   │     │  │  │  ├─ Aleutian
   │     │  │  │  ├─ Arizona
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ East-Indiana
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Hawaii
   │     │  │  │  ├─ Indiana-Starke
   │     │  │  │  ├─ Michigan
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ UTC
   │     │  │  ├─ W-SU
   │     │  │  ├─ WET
   │     │  │  ├─ zone.tab
   │     │  │  ├─ zone1970.tab
   │     │  │  ├─ zonenow.tab
   │     │  │  ├─ Zulu
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ zones
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tzdata-2025.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ licenses
   │     │  │     └─ LICENSE_APACHE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ urllib3
   │     │  ├─ connection.py
   │     │  ├─ connectionpool.py
   │     │  ├─ contrib
   │     │  │  ├─ emscripten
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ emscripten_fetch_worker.js
   │     │  │  │  ├─ fetch.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ fetch.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyopenssl.py
   │     │  │  ├─ socks.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │     ├─ socks.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ fields.py
   │     │  ├─ filepost.py
   │     │  ├─ http2
   │     │  │  ├─ connection.py
   │     │  │  ├─ probe.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ probe.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ poolmanager.py
   │     │  ├─ py.typed
   │     │  ├─ response.py
   │     │  ├─ util
   │     │  │  ├─ connection.py
   │     │  │  ├─ proxy.py
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ retry.py
   │     │  │  ├─ ssltransport.py
   │     │  │  ├─ ssl_.py
   │     │  │  ├─ ssl_match_hostname.py
   │     │  │  ├─ timeout.py
   │     │  │  ├─ url.py
   │     │  │  ├─ util.py
   │     │  │  ├─ wait.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ proxy.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ response.cpython-313.pyc
   │     │  │     ├─ retry.cpython-313.pyc
   │     │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │     ├─ ssl_.cpython-313.pyc
   │     │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │     ├─ timeout.cpython-313.pyc
   │     │  │     ├─ url.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ wait.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _base_connection.py
   │     │  ├─ _collections.py
   │     │  ├─ _request_methods.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ connectionpool.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ filepost.cpython-313.pyc
   │     │     ├─ poolmanager.cpython-313.pyc
   │     │     ├─ response.cpython-313.pyc
   │     │     ├─ _base_connection.cpython-313.pyc
   │     │     ├─ _collections.cpython-313.pyc
   │     │     ├─ _request_methods.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ urllib3-2.6.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ uvicorn
   │     │  ├─ config.py
   │     │  ├─ importer.py
   │     │  ├─ lifespan
   │     │  │  ├─ off.py
   │     │  │  ├─ on.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ off.cpython-313.pyc
   │     │  │     ├─ on.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ logging.py
   │     │  ├─ loops
   │     │  │  ├─ asyncio.py
   │     │  │  ├─ auto.py
   │     │  │  ├─ uvloop.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncio.cpython-313.pyc
   │     │  │     ├─ auto.cpython-313.pyc
   │     │  │     ├─ uvloop.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ main.py
   │     │  ├─ middleware
   │     │  │  ├─ asgi2.py
   │     │  │  ├─ message_logger.py
   │     │  │  ├─ proxy_headers.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asgi2.cpython-313.pyc
   │     │  │     ├─ message_logger.cpython-313.pyc
   │     │  │     ├─ proxy_headers.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ protocols
   │     │  │  ├─ http
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ flow_control.py
   │     │  │  │  ├─ h11_impl.py
   │     │  │  │  ├─ httptools_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ flow_control.cpython-313.pyc
   │     │  │  │     ├─ h11_impl.cpython-313.pyc
   │     │  │  │     ├─ httptools_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ websockets
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ websockets_impl.py
   │     │  │  │  ├─ websockets_sansio_impl.py
   │     │  │  │  ├─ wsproto_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ websockets_impl.cpython-313.pyc
   │     │  │  │     ├─ websockets_sansio_impl.cpython-313.pyc
   │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ server.py
   │     │  ├─ supervisors
   │     │  │  ├─ basereload.py
   │     │  │  ├─ multiprocess.py
   │     │  │  ├─ statreload.py
   │     │  │  ├─ watchfilesreload.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ basereload.cpython-313.pyc
   │     │  │     ├─ multiprocess.cpython-313.pyc
   │     │  │     ├─ statreload.cpython-313.pyc
   │     │  │     ├─ watchfilesreload.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ workers.py
   │     │  ├─ _compat.py
   │     │  ├─ _subprocess.py
   │     │  ├─ _types.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ importer.cpython-313.pyc
   │     │     ├─ logging.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ server.cpython-313.pyc
   │     │     ├─ workers.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _subprocess.cpython-313.pyc
   │     │     ├─ _types.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ uvicorn-0.41.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ websockets
   │     │  ├─ asyncio
   │     │  │  ├─ async_timeout.py
   │     │  │  ├─ client.py
   │     │  │  ├─ compatibility.py
   │     │  │  ├─ connection.py
   │     │  │  ├─ messages.py
   │     │  │  ├─ router.py
   │     │  │  ├─ server.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ async_timeout.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ compatibility.cpython-313.pyc
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ messages.cpython-313.pyc
   │     │  │     ├─ router.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ auth.py
   │     │  ├─ cli.py
   │     │  ├─ client.py
   │     │  ├─ connection.py
   │     │  ├─ datastructures.py
   │     │  ├─ exceptions.py
   │     │  ├─ extensions
   │     │  │  ├─ base.py
   │     │  │  ├─ permessage_deflate.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ permessage_deflate.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ frames.py
   │     │  ├─ headers.py
   │     │  ├─ http.py
   │     │  ├─ http11.py
   │     │  ├─ imports.py
   │     │  ├─ legacy
   │     │  │  ├─ auth.py
   │     │  │  ├─ client.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ framing.py
   │     │  │  ├─ handshake.py
   │     │  │  ├─ http.py
   │     │  │  ├─ protocol.py
   │     │  │  ├─ server.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ framing.cpython-313.pyc
   │     │  │     ├─ handshake.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ protocol.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ protocol.py
   │     │  ├─ py.typed
   │     │  ├─ server.py
   │     │  ├─ speedups.c
   │     │  ├─ speedups.cp313-win_amd64.pyd
   │     │  ├─ speedups.pyi
   │     │  ├─ streams.py
   │     │  ├─ sync
   │     │  │  ├─ client.py
   │     │  │  ├─ connection.py
   │     │  │  ├─ messages.py
   │     │  │  ├─ router.py
   │     │  │  ├─ server.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ messages.cpython-313.pyc
   │     │  │     ├─ router.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing.py
   │     │  ├─ uri.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ auth.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ client.cpython-313.pyc
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ frames.cpython-313.pyc
   │     │     ├─ headers.cpython-313.pyc
   │     │     ├─ http.cpython-313.pyc
   │     │     ├─ http11.cpython-313.pyc
   │     │     ├─ imports.cpython-313.pyc
   │     │     ├─ protocol.cpython-313.pyc
   │     │     ├─ server.cpython-313.pyc
   │     │     ├─ streams.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ uri.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ websockets-15.0.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ yarl
   │     │  ├─ py.typed
   │     │  ├─ _parse.py
   │     │  ├─ _path.py
   │     │  ├─ _query.py
   │     │  ├─ _quoters.py
   │     │  ├─ _quoting.py
   │     │  ├─ _quoting_c.cp313-win_amd64.pyd
   │     │  ├─ _quoting_c.pyx
   │     │  ├─ _quoting_py.py
   │     │  ├─ _url.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _parse.cpython-313.pyc
   │     │     ├─ _path.cpython-313.pyc
   │     │     ├─ _query.cpython-313.pyc
   │     │     ├─ _quoters.cpython-313.pyc
   │     │     ├─ _quoting.cpython-313.pyc
   │     │     ├─ _quoting_py.cpython-313.pyc
   │     │     ├─ _url.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ yarl-1.23.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ zstandard
   │     │  ├─ backend_c.cp313-win_amd64.pyd
   │     │  ├─ backend_cffi.py
   │     │  ├─ py.typed
   │     │  ├─ _cffi.cp313-win_amd64.pyd
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ backend_cffi.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ zstandard-0.25.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ _cffi_backend.cp313-win_amd64.pyd
   │     └─ __pycache__
   │        ├─ deprecation.cpython-313.pyc
   │        ├─ six.cpython-313.pyc
   │        └─ typing_extensions.cpython-313.pyc
   ├─ pyvenv.cfg
   └─ Scripts
      ├─ activate
      ├─ activate.bat
      ├─ activate.fish
      ├─ Activate.ps1
      ├─ deactivate.bat
      ├─ dotenv.exe
      ├─ f2py.exe
      ├─ fastapi.exe
      ├─ httpx.exe
      ├─ markdown-it.exe
      ├─ normalizer.exe
      ├─ numpy-config.exe
      ├─ pip.exe
      ├─ pip3.13.exe
      ├─ pip3.exe
      ├─ pygmentize.exe
      ├─ pyiceberg.exe
      ├─ python.exe
      ├─ pythonw.exe
      ├─ uvicorn.exe
      └─ websockets.exe

```
```
edge-finder
├─ .env
├─ backend
│  ├─ analyzer.py
│  ├─ backfill_market_data.py
│  ├─ csv
│  │  ├─ 20260307_204028_SBI FXトレード.csv
│  │  ├─ 20260307_204152_SBI FXトレード.csv
│  │  ├─ 20260307_204242_SBI FXトレード.csv
│  │  ├─ DMMFX-TradeRecordList.csv
│  │  ├─ GMOクリック証券-TradeRecordList.csv
│  │  └─ SBI FXトレード.csv
│  ├─ csv-parse.py
│  ├─ fetch_chart.py
│  ├─ main.py
│  └─ parsers
│     ├─ base.py
│     ├─ sbi_parser.py
│     └─ __pycache__
│        ├─ base.cpython-313.pyc
│        └─ sbi_parser.cpython-313.pyc
├─ dummy_dmm.csv
├─ frontend
│  ├─ .next
│  │  └─ dev
│  │     ├─ build
│  │     │  ├─ chunks
│  │     │  │  ├─ 9e883_174fdf60._.js
│  │     │  │  ├─ 9e883_174fdf60._.js.map
│  │     │  │  ├─ [root-of-the-server]__188e9cb8._.js
│  │     │  │  ├─ [root-of-the-server]__188e9cb8._.js.map
│  │     │  │  ├─ [root-of-the-server]__3b54a99d._.js
│  │     │  │  ├─ [root-of-the-server]__3b54a99d._.js.map
│  │     │  │  ├─ [root-of-the-server]__6e020478._.js
│  │     │  │  ├─ [root-of-the-server]__6e020478._.js.map
│  │     │  │  ├─ [root-of-the-server]__c7ae8543._.js
│  │     │  │  ├─ [root-of-the-server]__c7ae8543._.js.map
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_c22fd416._.js
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_c22fd416._.js.map
│  │     │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_1efa112f._.js
│  │     │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_1efa112f._.js.map
│  │     │  │  ├─ [turbopack]_runtime.js
│  │     │  │  └─ [turbopack]_runtime.js.map
│  │     │  ├─ package.json
│  │     │  ├─ postcss.js
│  │     │  ├─ postcss.js.map
│  │     │  ├─ webpack-loaders.js
│  │     │  └─ webpack-loaders.js.map
│  │     ├─ build-manifest.json
│  │     ├─ cache
│  │     │  ├─ .rscinfo
│  │     │  ├─ chrome-devtools-workspace-uuid
│  │     │  ├─ next-devtools-config.json
│  │     │  └─ turbopack
│  │     │     └─ 23c46498
│  │     │        ├─ 00000001.sst
│  │     │        ├─ 00000002.sst
│  │     │        ├─ 00000003.sst
│  │     │        ├─ 00000004.sst
│  │     │        ├─ 00000005.sst
│  │     │        ├─ 00000006.meta
│  │     │        ├─ 00000007.meta
│  │     │        ├─ 00000008.meta
│  │     │        ├─ 00000009.meta
│  │     │        ├─ 00000010.meta
│  │     │        ├─ 00000011.sst
│  │     │        ├─ 00000012.sst
│  │     │        ├─ 00000013.sst
│  │     │        ├─ 00000014.sst
│  │     │        ├─ 00000015.sst
│  │     │        ├─ 00000016.sst
│  │     │        ├─ 00000017.sst
│  │     │        ├─ 00000018.sst
│  │     │        ├─ 00000019.meta
│  │     │        ├─ 00000020.meta
│  │     │        ├─ 00000021.meta
│  │     │        ├─ 00000022.meta
│  │     │        ├─ 00000023.meta
│  │     │        ├─ 00000024.sst
│  │     │        ├─ 00000025.sst
│  │     │        ├─ 00000026.sst
│  │     │        ├─ 00000027.meta
│  │     │        ├─ 00000028.meta
│  │     │        ├─ 00000029.meta
│  │     │        ├─ 00000030.sst
│  │     │        ├─ 00000031.sst
│  │     │        ├─ 00000032.sst
│  │     │        ├─ 00000033.meta
│  │     │        ├─ 00000034.meta
│  │     │        ├─ 00000035.meta
│  │     │        ├─ 00000036.sst
│  │     │        ├─ 00000037.sst
│  │     │        ├─ 00000038.sst
│  │     │        ├─ 00000039.sst
│  │     │        ├─ 00000040.sst
│  │     │        ├─ 00000041.meta
│  │     │        ├─ 00000042.meta
│  │     │        ├─ 00000043.meta
│  │     │        ├─ 00000044.meta
│  │     │        ├─ 00000045.meta
│  │     │        ├─ 00000046.sst
│  │     │        ├─ 00000047.sst
│  │     │        ├─ 00000048.sst
│  │     │        ├─ 00000049.meta
│  │     │        ├─ 00000050.meta
│  │     │        ├─ 00000051.meta
│  │     │        ├─ 00000052.sst
│  │     │        ├─ 00000053.sst
│  │     │        ├─ 00000054.sst
│  │     │        ├─ 00000055.meta
│  │     │        ├─ 00000056.meta
│  │     │        ├─ 00000057.meta
│  │     │        ├─ 00000058.sst
│  │     │        ├─ 00000059.sst
│  │     │        ├─ 00000060.sst
│  │     │        ├─ 00000061.meta
│  │     │        ├─ 00000062.meta
│  │     │        ├─ 00000063.meta
│  │     │        ├─ 00000064.sst
│  │     │        ├─ 00000065.sst
│  │     │        ├─ 00000066.sst
│  │     │        ├─ 00000067.meta
│  │     │        ├─ 00000068.meta
│  │     │        ├─ 00000069.meta
│  │     │        ├─ 00000070.sst
│  │     │        ├─ 00000071.sst
│  │     │        ├─ 00000072.sst
│  │     │        ├─ 00000073.meta
│  │     │        ├─ 00000074.meta
│  │     │        ├─ 00000075.meta
│  │     │        ├─ 00000076.sst
│  │     │        ├─ 00000077.sst
│  │     │        ├─ 00000078.sst
│  │     │        ├─ 00000079.meta
│  │     │        ├─ 00000080.meta
│  │     │        ├─ 00000081.meta
│  │     │        ├─ 00000082.sst
│  │     │        ├─ 00000083.sst
│  │     │        ├─ 00000084.sst
│  │     │        ├─ 00000085.meta
│  │     │        ├─ 00000086.meta
│  │     │        ├─ 00000087.meta
│  │     │        ├─ 00000088.sst
│  │     │        ├─ 00000089.sst
│  │     │        ├─ 00000090.sst
│  │     │        ├─ 00000091.meta
│  │     │        ├─ 00000092.meta
│  │     │        ├─ 00000093.meta
│  │     │        ├─ 00000094.sst
│  │     │        ├─ 00000095.sst
│  │     │        ├─ 00000096.sst
│  │     │        ├─ 00000097.meta
│  │     │        ├─ 00000098.meta
│  │     │        ├─ 00000099.meta
│  │     │        ├─ 00000100.sst
│  │     │        ├─ 00000101.sst
│  │     │        ├─ 00000102.sst
│  │     │        ├─ 00000103.meta
│  │     │        ├─ 00000104.meta
│  │     │        ├─ 00000105.meta
│  │     │        ├─ 00000106.sst
│  │     │        ├─ 00000107.sst
│  │     │        ├─ 00000108.sst
│  │     │        ├─ 00000109.meta
│  │     │        ├─ 00000110.meta
│  │     │        ├─ 00000111.meta
│  │     │        ├─ 00000112.sst
│  │     │        ├─ 00000113.sst
│  │     │        ├─ 00000114.sst
│  │     │        ├─ 00000115.meta
│  │     │        ├─ 00000116.meta
│  │     │        ├─ 00000117.meta
│  │     │        ├─ 00000118.sst
│  │     │        ├─ 00000119.sst
│  │     │        ├─ 00000120.sst
│  │     │        ├─ 00000121.meta
│  │     │        ├─ 00000122.meta
│  │     │        ├─ 00000123.meta
│  │     │        ├─ 00000124.sst
│  │     │        ├─ 00000125.sst
│  │     │        ├─ 00000126.sst
│  │     │        ├─ 00000127.meta
│  │     │        ├─ 00000128.meta
│  │     │        ├─ 00000129.meta
│  │     │        ├─ 00000130.sst
│  │     │        ├─ 00000131.sst
│  │     │        ├─ 00000132.sst
│  │     │        ├─ 00000133.meta
│  │     │        ├─ 00000134.meta
│  │     │        ├─ 00000135.meta
│  │     │        ├─ 00000136.sst
│  │     │        ├─ 00000137.sst
│  │     │        ├─ 00000138.sst
│  │     │        ├─ 00000139.meta
│  │     │        ├─ 00000140.meta
│  │     │        ├─ 00000141.meta
│  │     │        ├─ 00000142.sst
│  │     │        ├─ 00000143.sst
│  │     │        ├─ 00000144.sst
│  │     │        ├─ 00000145.meta
│  │     │        ├─ 00000146.meta
│  │     │        ├─ 00000147.meta
│  │     │        ├─ 00000148.sst
│  │     │        ├─ 00000149.sst
│  │     │        ├─ 00000150.sst
│  │     │        ├─ 00000151.meta
│  │     │        ├─ 00000152.meta
│  │     │        ├─ 00000153.meta
│  │     │        ├─ 00000154.sst
│  │     │        ├─ 00000155.sst
│  │     │        ├─ 00000156.sst
│  │     │        ├─ 00000157.meta
│  │     │        ├─ 00000158.meta
│  │     │        ├─ 00000159.meta
│  │     │        ├─ 00000160.sst
│  │     │        ├─ 00000161.sst
│  │     │        ├─ 00000162.sst
│  │     │        ├─ 00000163.meta
│  │     │        ├─ 00000164.meta
│  │     │        ├─ 00000165.meta
│  │     │        ├─ 00000166.sst
│  │     │        ├─ 00000167.sst
│  │     │        ├─ 00000168.sst
│  │     │        ├─ 00000169.meta
│  │     │        ├─ 00000170.meta
│  │     │        ├─ 00000171.meta
│  │     │        ├─ 00000172.sst
│  │     │        ├─ 00000173.sst
│  │     │        ├─ 00000174.sst
│  │     │        ├─ 00000175.meta
│  │     │        ├─ 00000176.meta
│  │     │        ├─ 00000177.meta
│  │     │        ├─ 00000178.sst
│  │     │        ├─ 00000179.sst
│  │     │        ├─ 00000180.sst
│  │     │        ├─ 00000181.meta
│  │     │        ├─ 00000182.meta
│  │     │        ├─ 00000183.meta
│  │     │        ├─ 00000184.sst
│  │     │        ├─ 00000185.sst
│  │     │        ├─ 00000186.sst
│  │     │        ├─ 00000187.meta
│  │     │        ├─ 00000188.meta
│  │     │        ├─ 00000189.meta
│  │     │        ├─ 00000190.sst
│  │     │        ├─ 00000191.sst
│  │     │        ├─ 00000192.sst
│  │     │        ├─ 00000193.meta
│  │     │        ├─ 00000194.meta
│  │     │        ├─ 00000195.meta
│  │     │        ├─ 00000196.sst
│  │     │        ├─ 00000197.sst
│  │     │        ├─ 00000198.sst
│  │     │        ├─ 00000199.meta
│  │     │        ├─ 00000200.meta
│  │     │        ├─ 00000201.meta
│  │     │        ├─ 00000202.sst
│  │     │        ├─ 00000203.sst
│  │     │        ├─ 00000204.sst
│  │     │        ├─ 00000205.sst
│  │     │        ├─ 00000206.sst
│  │     │        ├─ 00000207.meta
│  │     │        ├─ 00000208.meta
│  │     │        ├─ 00000209.meta
│  │     │        ├─ 00000210.meta
│  │     │        ├─ 00000211.meta
│  │     │        ├─ 00000212.sst
│  │     │        ├─ 00000213.sst
│  │     │        ├─ 00000214.sst
│  │     │        ├─ 00000215.meta
│  │     │        ├─ 00000216.meta
│  │     │        ├─ 00000217.meta
│  │     │        ├─ 00000218.sst
│  │     │        ├─ 00000219.sst
│  │     │        ├─ 00000220.sst
│  │     │        ├─ 00000221.meta
│  │     │        ├─ 00000222.meta
│  │     │        ├─ 00000223.meta
│  │     │        ├─ 00000224.sst
│  │     │        ├─ 00000225.sst
│  │     │        ├─ 00000226.sst
│  │     │        ├─ 00000227.meta
│  │     │        ├─ 00000228.meta
│  │     │        ├─ 00000229.meta
│  │     │        ├─ 00000230.sst
│  │     │        ├─ 00000231.sst
│  │     │        ├─ 00000232.sst
│  │     │        ├─ 00000233.meta
│  │     │        ├─ 00000234.meta
│  │     │        ├─ 00000235.meta
│  │     │        ├─ 00000236.sst
│  │     │        ├─ 00000237.sst
│  │     │        ├─ 00000238.sst
│  │     │        ├─ 00000239.meta
│  │     │        ├─ 00000240.meta
│  │     │        ├─ 00000241.meta
│  │     │        ├─ 00000242.sst
│  │     │        ├─ 00000243.sst
│  │     │        ├─ 00000244.sst
│  │     │        ├─ 00000245.meta
│  │     │        ├─ 00000246.meta
│  │     │        ├─ 00000247.meta
│  │     │        ├─ 00000248.sst
│  │     │        ├─ 00000249.sst
│  │     │        ├─ 00000250.sst
│  │     │        ├─ 00000251.meta
│  │     │        ├─ 00000252.meta
│  │     │        ├─ 00000253.meta
│  │     │        ├─ 00000254.sst
│  │     │        ├─ 00000255.sst
│  │     │        ├─ 00000256.sst
│  │     │        ├─ 00000257.meta
│  │     │        ├─ 00000258.meta
│  │     │        ├─ 00000259.meta
│  │     │        ├─ 00000260.sst
│  │     │        ├─ 00000261.sst
│  │     │        ├─ 00000262.sst
│  │     │        ├─ 00000263.meta
│  │     │        ├─ 00000264.meta
│  │     │        ├─ 00000265.meta
│  │     │        ├─ 00000266.sst
│  │     │        ├─ 00000267.sst
│  │     │        ├─ 00000268.sst
│  │     │        ├─ 00000269.meta
│  │     │        ├─ 00000270.meta
│  │     │        ├─ 00000271.meta
│  │     │        ├─ 00000272.sst
│  │     │        ├─ 00000273.sst
│  │     │        ├─ 00000274.sst
│  │     │        ├─ 00000275.meta
│  │     │        ├─ 00000276.meta
│  │     │        ├─ 00000277.meta
│  │     │        ├─ 00000278.sst
│  │     │        ├─ 00000279.sst
│  │     │        ├─ 00000280.sst
│  │     │        ├─ 00000281.meta
│  │     │        ├─ 00000282.meta
│  │     │        ├─ 00000283.meta
│  │     │        ├─ 00000284.sst
│  │     │        ├─ 00000285.sst
│  │     │        ├─ 00000286.sst
│  │     │        ├─ 00000287.meta
│  │     │        ├─ 00000288.meta
│  │     │        ├─ 00000289.meta
│  │     │        ├─ 00000290.sst
│  │     │        ├─ 00000291.sst
│  │     │        ├─ 00000292.sst
│  │     │        ├─ 00000293.meta
│  │     │        ├─ 00000294.meta
│  │     │        ├─ 00000295.meta
│  │     │        ├─ 00000296.sst
│  │     │        ├─ 00000297.sst
│  │     │        ├─ 00000298.sst
│  │     │        ├─ 00000299.meta
│  │     │        ├─ 00000300.meta
│  │     │        ├─ 00000301.meta
│  │     │        ├─ 00000302.sst
│  │     │        ├─ 00000303.sst
│  │     │        ├─ 00000304.sst
│  │     │        ├─ 00000305.meta
│  │     │        ├─ 00000306.meta
│  │     │        ├─ 00000307.meta
│  │     │        ├─ 00000308.sst
│  │     │        ├─ 00000309.sst
│  │     │        ├─ 00000310.sst
│  │     │        ├─ 00000311.meta
│  │     │        ├─ 00000312.meta
│  │     │        ├─ 00000313.meta
│  │     │        ├─ 00000314.sst
│  │     │        ├─ 00000315.sst
│  │     │        ├─ 00000316.sst
│  │     │        ├─ 00000317.meta
│  │     │        ├─ 00000318.meta
│  │     │        ├─ 00000319.meta
│  │     │        ├─ 00000320.sst
│  │     │        ├─ 00000321.sst
│  │     │        ├─ 00000322.sst
│  │     │        ├─ 00000323.meta
│  │     │        ├─ 00000324.meta
│  │     │        ├─ 00000325.meta
│  │     │        ├─ 00000326.sst
│  │     │        ├─ 00000327.sst
│  │     │        ├─ 00000328.sst
│  │     │        ├─ 00000329.meta
│  │     │        ├─ 00000330.meta
│  │     │        ├─ 00000331.meta
│  │     │        ├─ 00000332.sst
│  │     │        ├─ 00000333.sst
│  │     │        ├─ 00000334.sst
│  │     │        ├─ 00000335.meta
│  │     │        ├─ 00000336.meta
│  │     │        ├─ 00000337.meta
│  │     │        ├─ 00000338.sst
│  │     │        ├─ 00000339.sst
│  │     │        ├─ 00000340.sst
│  │     │        ├─ 00000341.meta
│  │     │        ├─ 00000342.meta
│  │     │        ├─ 00000343.meta
│  │     │        ├─ 00000344.sst
│  │     │        ├─ 00000345.sst
│  │     │        ├─ 00000346.sst
│  │     │        ├─ 00000347.meta
│  │     │        ├─ 00000348.meta
│  │     │        ├─ 00000349.meta
│  │     │        ├─ 00000350.sst
│  │     │        ├─ 00000351.sst
│  │     │        ├─ 00000352.sst
│  │     │        ├─ 00000353.meta
│  │     │        ├─ 00000354.meta
│  │     │        ├─ 00000355.meta
│  │     │        ├─ 00000356.sst
│  │     │        ├─ 00000357.sst
│  │     │        ├─ 00000358.sst
│  │     │        ├─ 00000359.meta
│  │     │        ├─ 00000360.meta
│  │     │        ├─ 00000361.meta
│  │     │        ├─ 00000362.sst
│  │     │        ├─ 00000363.sst
│  │     │        ├─ 00000364.sst
│  │     │        ├─ 00000365.meta
│  │     │        ├─ 00000366.meta
│  │     │        ├─ 00000367.meta
│  │     │        ├─ 00000368.sst
│  │     │        ├─ 00000369.sst
│  │     │        ├─ 00000370.sst
│  │     │        ├─ 00000371.meta
│  │     │        ├─ 00000372.meta
│  │     │        ├─ 00000373.meta
│  │     │        ├─ 00000374.sst
│  │     │        ├─ 00000375.sst
│  │     │        ├─ 00000376.sst
│  │     │        ├─ 00000377.meta
│  │     │        ├─ 00000378.meta
│  │     │        ├─ 00000379.meta
│  │     │        ├─ 00000380.sst
│  │     │        ├─ 00000381.sst
│  │     │        ├─ 00000382.sst
│  │     │        ├─ 00000383.meta
│  │     │        ├─ 00000384.meta
│  │     │        ├─ 00000385.meta
│  │     │        ├─ 00000386.sst
│  │     │        ├─ 00000387.sst
│  │     │        ├─ 00000388.sst
│  │     │        ├─ 00000389.meta
│  │     │        ├─ 00000390.meta
│  │     │        ├─ 00000391.meta
│  │     │        ├─ 00000392.sst
│  │     │        ├─ 00000393.sst
│  │     │        ├─ 00000394.sst
│  │     │        ├─ 00000395.meta
│  │     │        ├─ 00000396.meta
│  │     │        ├─ 00000397.meta
│  │     │        ├─ 00000398.sst
│  │     │        ├─ 00000399.sst
│  │     │        ├─ 00000400.sst
│  │     │        ├─ 00000401.meta
│  │     │        ├─ 00000402.meta
│  │     │        ├─ 00000403.meta
│  │     │        ├─ 00000404.sst
│  │     │        ├─ 00000405.sst
│  │     │        ├─ 00000406.sst
│  │     │        ├─ 00000407.meta
│  │     │        ├─ 00000408.meta
│  │     │        ├─ 00000409.meta
│  │     │        ├─ 00000410.sst
│  │     │        ├─ 00000411.sst
│  │     │        ├─ 00000412.sst
│  │     │        ├─ 00000413.meta
│  │     │        ├─ 00000414.meta
│  │     │        ├─ 00000415.meta
│  │     │        ├─ CURRENT
│  │     │        └─ LOG
│  │     ├─ fallback-build-manifest.json
│  │     ├─ logs
│  │     │  └─ next-development.log
│  │     ├─ package.json
│  │     ├─ prerender-manifest.json
│  │     ├─ routes-manifest.json
│  │     ├─ server
│  │     │  ├─ app
│  │     │  │  ├─ page
│  │     │  │  │  ├─ app-paths-manifest.json
│  │     │  │  │  ├─ build-manifest.json
│  │     │  │  │  ├─ next-font-manifest.json
│  │     │  │  │  ├─ react-loadable-manifest.json
│  │     │  │  │  └─ server-reference-manifest.json
│  │     │  │  ├─ page.js
│  │     │  │  ├─ page.js.map
│  │     │  │  └─ page_client-reference-manifest.js
│  │     │  ├─ app-paths-manifest.json
│  │     │  ├─ chunks
│  │     │  │  └─ ssr
│  │     │  │     ├─ 9e883_5deccbdc._.js
│  │     │  │     ├─ 9e883_5deccbdc._.js.map
│  │     │  │     ├─ 9e883_next_dist_568f344c._.js
│  │     │  │     ├─ 9e883_next_dist_568f344c._.js.map
│  │     │  │     ├─ 9e883_next_dist_c587e5ed._.js
│  │     │  │     ├─ 9e883_next_dist_c587e5ed._.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_34a976ba._.js
│  │     │  │     ├─ 9e883_next_dist_client_components_34a976ba._.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_forbidden_520cb951.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_forbidden_520cb951.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_global-error_c00881b3.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_global-error_c00881b3.js.map
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_unauthorized_62f331ea.js
│  │     │  │     ├─ 9e883_next_dist_client_components_builtin_unauthorized_62f331ea.js.map
│  │     │  │     ├─ frontend_77954a87._.js
│  │     │  │     ├─ frontend_77954a87._.js.map
│  │     │  │     ├─ frontend_src_app_b2335e1a._.js
│  │     │  │     ├─ frontend_src_app_b2335e1a._.js.map
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_dbbe3cd3.js
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_dbbe3cd3.js.map
│  │     │  │     ├─ [externals]_next_dist_c80f7c8f._.js
│  │     │  │     ├─ [externals]_next_dist_c80f7c8f._.js.map
│  │     │  │     ├─ [externals]__e8a2741f._.js
│  │     │  │     ├─ [externals]__e8a2741f._.js.map
│  │     │  │     ├─ [root-of-the-server]__a43d79ef._.js
│  │     │  │     ├─ [root-of-the-server]__a43d79ef._.js.map
│  │     │  │     ├─ [root-of-the-server]__ca5e358b._.js
│  │     │  │     ├─ [root-of-the-server]__ca5e358b._.js.map
│  │     │  │     ├─ [root-of-the-server]__e1699a90._.js
│  │     │  │     ├─ [root-of-the-server]__e1699a90._.js.map
│  │     │  │     ├─ [root-of-the-server]__fbc3344c._.js
│  │     │  │     ├─ [root-of-the-server]__fbc3344c._.js.map
│  │     │  │     ├─ [turbopack]_runtime.js
│  │     │  │     └─ [turbopack]_runtime.js.map
│  │     │  ├─ interception-route-rewrite-manifest.js
│  │     │  ├─ middleware-build-manifest.js
│  │     │  ├─ middleware-manifest.json
│  │     │  ├─ next-font-manifest.js
│  │     │  ├─ next-font-manifest.json
│  │     │  ├─ pages-manifest.json
│  │     │  ├─ server-reference-manifest.js
│  │     │  └─ server-reference-manifest.json
│  │     ├─ static
│  │     │  ├─ chunks
│  │     │  │  ├─ 9e883_@swc_helpers_cjs_c26b7a0e._.js
│  │     │  │  ├─ 9e883_@swc_helpers_cjs_c26b7a0e._.js.map
│  │     │  │  ├─ 9e883_next_dist_72742c92._.js
│  │     │  │  ├─ 9e883_next_dist_72742c92._.js.map
│  │     │  │  ├─ 9e883_next_dist_build_polyfills_polyfill-nomodule.js
│  │     │  │  ├─ 9e883_next_dist_build_polyfills_polyfill-nomodule.js.map
│  │     │  │  ├─ 9e883_next_dist_client_21c89b8d._.js
│  │     │  │  ├─ 9e883_next_dist_client_21c89b8d._.js.map
│  │     │  │  ├─ 9e883_next_dist_client_3dfe3bee._.js
│  │     │  │  ├─ 9e883_next_dist_client_3dfe3bee._.js.map
│  │     │  │  ├─ 9e883_next_dist_client_components_builtin_global-error_25e16fbd.js
│  │     │  │  ├─ 9e883_next_dist_compiled_8f5ebc08._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_8f5ebc08._.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_next-devtools_index_6915c2bc.js
│  │     │  │  ├─ 9e883_next_dist_compiled_next-devtools_index_6915c2bc.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_react-dom_33d456f8._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_react-dom_33d456f8._.js.map
│  │     │  │  ├─ 9e883_next_dist_compiled_react-server-dom-turbopack_6723cebf._.js
│  │     │  │  ├─ 9e883_next_dist_compiled_react-server-dom-turbopack_6723cebf._.js.map
│  │     │  │  ├─ 9e883_next_dist_e24ad472._.js
│  │     │  │  ├─ 9e883_next_dist_e24ad472._.js.map
│  │     │  │  ├─ frontend_66384c3f._.js.map
│  │     │  │  ├─ frontend_a0ff3932._.js
│  │     │  │  ├─ frontend_d7d55ff2._.js
│  │     │  │  ├─ frontend_d7d55ff2._.js.map
│  │     │  │  ├─ frontend_src_app_favicon_ico_mjs_dbd6f8a8._.js
│  │     │  │  ├─ frontend_src_app_globals_css_bad6b30c._.single.css
│  │     │  │  ├─ frontend_src_app_globals_css_bad6b30c._.single.css.map
│  │     │  │  ├─ frontend_src_app_layout_tsx_25e16fbd._.js
│  │     │  │  ├─ frontend_src_app_page_tsx_c864ef87._.js
│  │     │  │  ├─ turbopack-frontend_66384c3f._.js
│  │     │  │  ├─ [next]_internal_font_google_inter_5972bc34_module_css_bad6b30c._.single.css
│  │     │  │  ├─ [next]_internal_font_google_inter_5972bc34_module_css_bad6b30c._.single.css.map
│  │     │  │  ├─ [root-of-the-server]__ec717b67._.css
│  │     │  │  ├─ [root-of-the-server]__ec717b67._.css.map
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_3e6423ca._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js.map
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d169e285._.js
│  │     │  │  └─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d169e285._.js.map
│  │     │  ├─ development
│  │     │  │  ├─ _buildManifest.js
│  │     │  │  ├─ _clientMiddlewareManifest.json
│  │     │  │  └─ _ssgManifest.js
│  │     │  └─ media
│  │     │     ├─ 1bffadaabf893a1e-s.7cd81963.woff2
│  │     │     ├─ 2bbe8d2671613f1f-s.76dcb0b2.woff2
│  │     │     ├─ 2c55a0e60120577a-s.2a48534a.woff2
│  │     │     ├─ 5476f68d60460930-s.c995e352.woff2
│  │     │     ├─ 83afe278b6a6bb3c-s.p.3a6ba036.woff2
│  │     │     ├─ 9c72aa0f40e4eef8-s.18a48cbc.woff2
│  │     │     ├─ ad66f9afd8947f86-s.7a40eb73.woff2
│  │     │     └─ favicon.0b3bf435.ico
│  │     ├─ trace
│  │     └─ types
│  │        ├─ cache-life.d.ts
│  │        ├─ routes.d.ts
│  │        └─ validator.ts
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ components
│  │     └─ TradeChart.tsx
│  └─ tsconfig.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ temp_upload.csv
└─ venv
   ├─ Include
   ├─ Lib
   │  └─ site-packages
   │     ├─ annotated_doc
   │     │  ├─ main.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ main.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ annotated_doc-0.0.4.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ annotated_types
   │     │  ├─ py.typed
   │     │  ├─ test_cases.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ test_cases.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ annotated_types-0.7.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ anyio
   │     │  ├─ abc
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ from_thread.py
   │     │  ├─ functools.py
   │     │  ├─ lowlevel.py
   │     │  ├─ py.typed
   │     │  ├─ pytest_plugin.py
   │     │  ├─ streams
   │     │  │  ├─ buffered.py
   │     │  │  ├─ file.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ stapled.py
   │     │  │  ├─ text.py
   │     │  │  ├─ tls.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ buffered.cpython-313.pyc
   │     │  │     ├─ file.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ stapled.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ tls.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ to_interpreter.py
   │     │  ├─ to_process.py
   │     │  ├─ to_thread.py
   │     │  ├─ _backends
   │     │  │  ├─ _asyncio.py
   │     │  │  ├─ _trio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio.cpython-313.pyc
   │     │  │     ├─ _trio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _core
   │     │  │  ├─ _asyncio_selector_thread.py
   │     │  │  ├─ _contextmanagers.py
   │     │  │  ├─ _eventloop.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _fileio.py
   │     │  │  ├─ _resources.py
   │     │  │  ├─ _signals.py
   │     │  │  ├─ _sockets.py
   │     │  │  ├─ _streams.py
   │     │  │  ├─ _subprocesses.py
   │     │  │  ├─ _synchronization.py
   │     │  │  ├─ _tasks.py
   │     │  │  ├─ _tempfile.py
   │     │  │  ├─ _testing.py
   │     │  │  ├─ _typedattr.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
   │     │  │     ├─ _contextmanagers.cpython-313.pyc
   │     │  │     ├─ _eventloop.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _fileio.cpython-313.pyc
   │     │  │     ├─ _resources.cpython-313.pyc
   │     │  │     ├─ _signals.cpython-313.pyc
   │     │  │     ├─ _sockets.cpython-313.pyc
   │     │  │     ├─ _streams.cpython-313.pyc
   │     │  │     ├─ _subprocesses.cpython-313.pyc
   │     │  │     ├─ _synchronization.cpython-313.pyc
   │     │  │     ├─ _tasks.cpython-313.pyc
   │     │  │     ├─ _tempfile.cpython-313.pyc
   │     │  │     ├─ _testing.cpython-313.pyc
   │     │  │     ├─ _typedattr.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ from_thread.cpython-313.pyc
   │     │     ├─ functools.cpython-313.pyc
   │     │     ├─ lowlevel.cpython-313.pyc
   │     │     ├─ pytest_plugin.cpython-313.pyc
   │     │     ├─ to_interpreter.cpython-313.pyc
   │     │     ├─ to_process.cpython-313.pyc
   │     │     ├─ to_thread.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ anyio-4.12.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ cachetools
   │     │  ├─ func.py
   │     │  ├─ keys.py
   │     │  ├─ _cached.py
   │     │  ├─ _cachedmethod.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ func.cpython-313.pyc
   │     │     ├─ keys.cpython-313.pyc
   │     │     ├─ _cached.cpython-313.pyc
   │     │     ├─ _cachedmethod.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cachetools-6.2.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ certifi
   │     │  ├─ cacert.pem
   │     │  ├─ core.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ certifi-2026.2.25.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ cffi
   │     │  ├─ api.py
   │     │  ├─ backend_ctypes.py
   │     │  ├─ cffi_opcode.py
   │     │  ├─ commontypes.py
   │     │  ├─ cparser.py
   │     │  ├─ error.py
   │     │  ├─ ffiplatform.py
   │     │  ├─ lock.py
   │     │  ├─ model.py
   │     │  ├─ parse_c_type.h
   │     │  ├─ pkgconfig.py
   │     │  ├─ recompiler.py
   │     │  ├─ setuptools_ext.py
   │     │  ├─ vengine_cpy.py
   │     │  ├─ vengine_gen.py
   │     │  ├─ verifier.py
   │     │  ├─ _cffi_errors.h
   │     │  ├─ _cffi_include.h
   │     │  ├─ _embedding.h
   │     │  ├─ _imp_emulation.py
   │     │  ├─ _shimmed_dist_utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ backend_ctypes.cpython-313.pyc
   │     │     ├─ cffi_opcode.cpython-313.pyc
   │     │     ├─ commontypes.cpython-313.pyc
   │     │     ├─ cparser.cpython-313.pyc
   │     │     ├─ error.cpython-313.pyc
   │     │     ├─ ffiplatform.cpython-313.pyc
   │     │     ├─ lock.cpython-313.pyc
   │     │     ├─ model.cpython-313.pyc
   │     │     ├─ pkgconfig.cpython-313.pyc
   │     │     ├─ recompiler.cpython-313.pyc
   │     │     ├─ setuptools_ext.cpython-313.pyc
   │     │     ├─ vengine_cpy.cpython-313.pyc
   │     │     ├─ vengine_gen.cpython-313.pyc
   │     │     ├─ verifier.cpython-313.pyc
   │     │     ├─ _imp_emulation.cpython-313.pyc
   │     │     ├─ _shimmed_dist_utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cffi-2.0.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ charset_normalizer
   │     │  ├─ api.py
   │     │  ├─ cd.py
   │     │  ├─ cli
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ __init__.cpython-313.pyc
   │     │  │     └─ __main__.cpython-313.pyc
   │     │  ├─ constant.py
   │     │  ├─ legacy.py
   │     │  ├─ md.cp313-win_amd64.pyd
   │     │  ├─ md.py
   │     │  ├─ md__mypyc.cp313-win_amd64.pyd
   │     │  ├─ models.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ cd.cpython-313.pyc
   │     │     ├─ constant.cpython-313.pyc
   │     │     ├─ legacy.cpython-313.pyc
   │     │     ├─ md.cpython-313.pyc
   │     │     ├─ models.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ charset_normalizer-3.4.4.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ click
   │     │  ├─ core.py
   │     │  ├─ decorators.py
   │     │  ├─ exceptions.py
   │     │  ├─ formatting.py
   │     │  ├─ globals.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ shell_completion.py
   │     │  ├─ termui.py
   │     │  ├─ testing.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _termui_impl.py
   │     │  ├─ _textwrap.py
   │     │  ├─ _utils.py
   │     │  ├─ _winconsole.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ decorators.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formatting.cpython-313.pyc
   │     │     ├─ globals.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ shell_completion.cpython-313.pyc
   │     │     ├─ termui.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _termui_impl.cpython-313.pyc
   │     │     ├─ _textwrap.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     ├─ _winconsole.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ click-8.3.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ colorama
   │     │  ├─ ansi.py
   │     │  ├─ ansitowin32.py
   │     │  ├─ initialise.py
   │     │  ├─ tests
   │     │  │  ├─ ansitowin32_test.py
   │     │  │  ├─ ansi_test.py
   │     │  │  ├─ initialise_test.py
   │     │  │  ├─ isatty_test.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ winterm_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ansitowin32_test.cpython-313.pyc
   │     │  │     ├─ ansi_test.cpython-313.pyc
   │     │  │     ├─ initialise_test.cpython-313.pyc
   │     │  │     ├─ isatty_test.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ winterm_test.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ win32.py
   │     │  ├─ winterm.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ansi.cpython-313.pyc
   │     │     ├─ ansitowin32.cpython-313.pyc
   │     │     ├─ initialise.cpython-313.pyc
   │     │     ├─ win32.cpython-313.pyc
   │     │     ├─ winterm.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ colorama-0.4.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ cryptography
   │     │  ├─ exceptions.py
   │     │  ├─ fernet.py
   │     │  ├─ hazmat
   │     │  │  ├─ asn1
   │     │  │  │  ├─ asn1.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ asn1.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ backends
   │     │  │  │  ├─ openssl
   │     │  │  │  │  ├─ backend.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ backend.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ bindings
   │     │  │  │  ├─ openssl
   │     │  │  │  │  ├─ binding.py
   │     │  │  │  │  ├─ _conditional.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ binding.cpython-313.pyc
   │     │  │  │  │     ├─ _conditional.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _rust
   │     │  │  │  │  ├─ asn1.pyi
   │     │  │  │  │  ├─ declarative_asn1.pyi
   │     │  │  │  │  ├─ exceptions.pyi
   │     │  │  │  │  ├─ ocsp.pyi
   │     │  │  │  │  ├─ openssl
   │     │  │  │  │  │  ├─ aead.pyi
   │     │  │  │  │  │  ├─ ciphers.pyi
   │     │  │  │  │  │  ├─ cmac.pyi
   │     │  │  │  │  │  ├─ dh.pyi
   │     │  │  │  │  │  ├─ dsa.pyi
   │     │  │  │  │  │  ├─ ec.pyi
   │     │  │  │  │  │  ├─ ed25519.pyi
   │     │  │  │  │  │  ├─ ed448.pyi
   │     │  │  │  │  │  ├─ hashes.pyi
   │     │  │  │  │  │  ├─ hmac.pyi
   │     │  │  │  │  │  ├─ kdf.pyi
   │     │  │  │  │  │  ├─ keys.pyi
   │     │  │  │  │  │  ├─ poly1305.pyi
   │     │  │  │  │  │  ├─ rsa.pyi
   │     │  │  │  │  │  ├─ x25519.pyi
   │     │  │  │  │  │  ├─ x448.pyi
   │     │  │  │  │  │  └─ __init__.pyi
   │     │  │  │  │  ├─ pkcs12.pyi
   │     │  │  │  │  ├─ pkcs7.pyi
   │     │  │  │  │  ├─ test_support.pyi
   │     │  │  │  │  ├─ x509.pyi
   │     │  │  │  │  ├─ _openssl.pyi
   │     │  │  │  │  └─ __init__.pyi
   │     │  │  │  ├─ _rust.pyd
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ decrepit
   │     │  │  │  ├─ ciphers
   │     │  │  │  │  ├─ algorithms.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ algorithms.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ primitives
   │     │  │  │  ├─ asymmetric
   │     │  │  │  │  ├─ dh.py
   │     │  │  │  │  ├─ dsa.py
   │     │  │  │  │  ├─ ec.py
   │     │  │  │  │  ├─ ed25519.py
   │     │  │  │  │  ├─ ed448.py
   │     │  │  │  │  ├─ padding.py
   │     │  │  │  │  ├─ rsa.py
   │     │  │  │  │  ├─ types.py
   │     │  │  │  │  ├─ utils.py
   │     │  │  │  │  ├─ x25519.py
   │     │  │  │  │  ├─ x448.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ dh.cpython-313.pyc
   │     │  │  │  │     ├─ dsa.cpython-313.pyc
   │     │  │  │  │     ├─ ec.cpython-313.pyc
   │     │  │  │  │     ├─ ed25519.cpython-313.pyc
   │     │  │  │  │     ├─ ed448.cpython-313.pyc
   │     │  │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │  │     ├─ rsa.cpython-313.pyc
   │     │  │  │  │     ├─ types.cpython-313.pyc
   │     │  │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │  │     ├─ x25519.cpython-313.pyc
   │     │  │  │  │     ├─ x448.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ ciphers
   │     │  │  │  │  ├─ aead.py
   │     │  │  │  │  ├─ algorithms.py
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ modes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ aead.cpython-313.pyc
   │     │  │  │  │     ├─ algorithms.cpython-313.pyc
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ modes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ cmac.py
   │     │  │  │  ├─ constant_time.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ hmac.py
   │     │  │  │  ├─ kdf
   │     │  │  │  │  ├─ argon2.py
   │     │  │  │  │  ├─ concatkdf.py
   │     │  │  │  │  ├─ hkdf.py
   │     │  │  │  │  ├─ kbkdf.py
   │     │  │  │  │  ├─ pbkdf2.py
   │     │  │  │  │  ├─ scrypt.py
   │     │  │  │  │  ├─ x963kdf.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ argon2.cpython-313.pyc
   │     │  │  │  │     ├─ concatkdf.cpython-313.pyc
   │     │  │  │  │     ├─ hkdf.cpython-313.pyc
   │     │  │  │  │     ├─ kbkdf.cpython-313.pyc
   │     │  │  │  │     ├─ pbkdf2.cpython-313.pyc
   │     │  │  │  │     ├─ scrypt.cpython-313.pyc
   │     │  │  │  │     ├─ x963kdf.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ keywrap.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ poly1305.py
   │     │  │  │  ├─ serialization
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ pkcs12.py
   │     │  │  │  │  ├─ pkcs7.py
   │     │  │  │  │  ├─ ssh.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ pkcs12.cpython-313.pyc
   │     │  │  │  │     ├─ pkcs7.cpython-313.pyc
   │     │  │  │  │     ├─ ssh.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ twofactor
   │     │  │  │  │  ├─ hotp.py
   │     │  │  │  │  ├─ totp.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ hotp.cpython-313.pyc
   │     │  │  │  │     ├─ totp.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _asymmetric.py
   │     │  │  │  ├─ _cipheralgorithm.py
   │     │  │  │  ├─ _serialization.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cmac.cpython-313.pyc
   │     │  │  │     ├─ constant_time.cpython-313.pyc
   │     │  │  │     ├─ hashes.cpython-313.pyc
   │     │  │  │     ├─ hmac.cpython-313.pyc
   │     │  │  │     ├─ keywrap.cpython-313.pyc
   │     │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │     ├─ poly1305.cpython-313.pyc
   │     │  │  │     ├─ _asymmetric.cpython-313.pyc
   │     │  │  │     ├─ _cipheralgorithm.cpython-313.pyc
   │     │  │  │     ├─ _serialization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _oid.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _oid.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ x509
   │     │  │  ├─ base.py
   │     │  │  ├─ certificate_transparency.py
   │     │  │  ├─ extensions.py
   │     │  │  ├─ general_name.py
   │     │  │  ├─ name.py
   │     │  │  ├─ ocsp.py
   │     │  │  ├─ oid.py
   │     │  │  ├─ verification.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ certificate_transparency.cpython-313.pyc
   │     │  │     ├─ extensions.cpython-313.pyc
   │     │  │     ├─ general_name.cpython-313.pyc
   │     │  │     ├─ name.cpython-313.pyc
   │     │  │     ├─ ocsp.cpython-313.pyc
   │     │  │     ├─ oid.cpython-313.pyc
   │     │  │     ├─ verification.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __about__.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fernet.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ __about__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ cryptography-46.0.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  ├─ LICENSE.APACHE
   │     │  │  └─ LICENSE.BSD
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ dateutil
   │     │  ├─ easter.py
   │     │  ├─ parser
   │     │  │  ├─ isoparser.py
   │     │  │  ├─ _parser.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ isoparser.cpython-313.pyc
   │     │  │     ├─ _parser.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ relativedelta.py
   │     │  ├─ rrule.py
   │     │  ├─ tz
   │     │  │  ├─ tz.py
   │     │  │  ├─ win.py
   │     │  │  ├─ _common.py
   │     │  │  ├─ _factories.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ tz.cpython-313.pyc
   │     │  │     ├─ win.cpython-313.pyc
   │     │  │     ├─ _common.cpython-313.pyc
   │     │  │     ├─ _factories.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tzwin.py
   │     │  ├─ utils.py
   │     │  ├─ zoneinfo
   │     │  │  ├─ dateutil-zoneinfo.tar.gz
   │     │  │  ├─ rebuild.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ rebuild.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _common.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ easter.cpython-313.pyc
   │     │     ├─ relativedelta.cpython-313.pyc
   │     │     ├─ rrule.cpython-313.pyc
   │     │     ├─ tzwin.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _common.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ deprecation-2.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ deprecation.py
   │     ├─ dotenv
   │     │  ├─ cli.py
   │     │  ├─ ipython.py
   │     │  ├─ main.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ variables.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ ipython.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ variables.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fastapi
   │     │  ├─ .agents
   │     │  │  └─ skills
   │     │  │     └─ fastapi
   │     │  │        ├─ references
   │     │  │        │  ├─ dependencies.md
   │     │  │        │  ├─ other-tools.md
   │     │  │        │  └─ streaming.md
   │     │  │        └─ SKILL.md
   │     │  ├─ applications.py
   │     │  ├─ background.py
   │     │  ├─ cli.py
   │     │  ├─ concurrency.py
   │     │  ├─ datastructures.py
   │     │  ├─ dependencies
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ encoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ exception_handlers.py
   │     │  ├─ logger.py
   │     │  ├─ middleware
   │     │  │  ├─ asyncexitstack.py
   │     │  │  ├─ cors.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncexitstack.cpython-313.pyc
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ openapi
   │     │  │  ├─ constants.py
   │     │  │  ├─ docs.py
   │     │  │  ├─ models.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ constants.cpython-313.pyc
   │     │  │     ├─ docs.cpython-313.pyc
   │     │  │     ├─ models.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ params.py
   │     │  ├─ param_functions.py
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ security
   │     │  │  ├─ api_key.py
   │     │  │  ├─ base.py
   │     │  │  ├─ http.py
   │     │  │  ├─ oauth2.py
   │     │  │  ├─ open_id_connect_url.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api_key.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ oauth2.cpython-313.pyc
   │     │  │     ├─ open_id_connect_url.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ sse.py
   │     │  ├─ staticfiles.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ websockets.py
   │     │  ├─ _compat
   │     │  │  ├─ shared.py
   │     │  │  ├─ v2.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ shared.cpython-313.pyc
   │     │  │     ├─ v2.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ encoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ exception_handlers.cpython-313.pyc
   │     │     ├─ logger.cpython-313.pyc
   │     │     ├─ params.cpython-313.pyc
   │     │     ├─ param_functions.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ sse.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ fastapi-0.135.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ fb303
   │     │  ├─ constants.py
   │     │  ├─ FacebookService.py
   │     │  ├─ ttypes.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ FacebookService.cpython-313.pyc
   │     │     ├─ ttypes.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ fsspec
   │     │  ├─ archive.py
   │     │  ├─ asyn.py
   │     │  ├─ caching.py
   │     │  ├─ callbacks.py
   │     │  ├─ compression.py
   │     │  ├─ config.py
   │     │  ├─ conftest.py
   │     │  ├─ core.py
   │     │  ├─ dircache.py
   │     │  ├─ exceptions.py
   │     │  ├─ fuse.py
   │     │  ├─ generic.py
   │     │  ├─ gui.py
   │     │  ├─ implementations
   │     │  │  ├─ arrow.py
   │     │  │  ├─ asyn_wrapper.py
   │     │  │  ├─ cached.py
   │     │  │  ├─ cache_mapper.py
   │     │  │  ├─ cache_metadata.py
   │     │  │  ├─ chained.py
   │     │  │  ├─ dask.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dbfs.py
   │     │  │  ├─ dirfs.py
   │     │  │  ├─ ftp.py
   │     │  │  ├─ gist.py
   │     │  │  ├─ git.py
   │     │  │  ├─ github.py
   │     │  │  ├─ http.py
   │     │  │  ├─ http_sync.py
   │     │  │  ├─ jupyter.py
   │     │  │  ├─ libarchive.py
   │     │  │  ├─ local.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ reference.py
   │     │  │  ├─ sftp.py
   │     │  │  ├─ smb.py
   │     │  │  ├─ tar.py
   │     │  │  ├─ webhdfs.py
   │     │  │  ├─ zip.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ asyn_wrapper.cpython-313.pyc
   │     │  │     ├─ cached.cpython-313.pyc
   │     │  │     ├─ cache_mapper.cpython-313.pyc
   │     │  │     ├─ cache_metadata.cpython-313.pyc
   │     │  │     ├─ chained.cpython-313.pyc
   │     │  │     ├─ dask.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dbfs.cpython-313.pyc
   │     │  │     ├─ dirfs.cpython-313.pyc
   │     │  │     ├─ ftp.cpython-313.pyc
   │     │  │     ├─ gist.cpython-313.pyc
   │     │  │     ├─ git.cpython-313.pyc
   │     │  │     ├─ github.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ http_sync.cpython-313.pyc
   │     │  │     ├─ jupyter.cpython-313.pyc
   │     │  │     ├─ libarchive.cpython-313.pyc
   │     │  │     ├─ local.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ reference.cpython-313.pyc
   │     │  │     ├─ sftp.cpython-313.pyc
   │     │  │     ├─ smb.cpython-313.pyc
   │     │  │     ├─ tar.cpython-313.pyc
   │     │  │     ├─ webhdfs.cpython-313.pyc
   │     │  │     ├─ zip.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ json.py
   │     │  ├─ mapping.py
   │     │  ├─ parquet.py
   │     │  ├─ registry.py
   │     │  ├─ spec.py
   │     │  ├─ tests
   │     │  │  └─ abstract
   │     │  │     ├─ common.py
   │     │  │     ├─ copy.py
   │     │  │     ├─ get.py
   │     │  │     ├─ mv.py
   │     │  │     ├─ open.py
   │     │  │     ├─ pipe.py
   │     │  │     ├─ put.py
   │     │  │     ├─ __init__.py
   │     │  │     └─ __pycache__
   │     │  │        ├─ common.cpython-313.pyc
   │     │  │        ├─ copy.cpython-313.pyc
   │     │  │        ├─ get.cpython-313.pyc
   │     │  │        ├─ mv.cpython-313.pyc
   │     │  │        ├─ open.cpython-313.pyc
   │     │  │        ├─ pipe.cpython-313.pyc
   │     │  │        ├─ put.cpython-313.pyc
   │     │  │        └─ __init__.cpython-313.pyc
   │     │  ├─ transaction.py
   │     │  ├─ utils.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ archive.cpython-313.pyc
   │     │     ├─ asyn.cpython-313.pyc
   │     │     ├─ caching.cpython-313.pyc
   │     │     ├─ callbacks.cpython-313.pyc
   │     │     ├─ compression.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ dircache.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fuse.cpython-313.pyc
   │     │     ├─ generic.cpython-313.pyc
   │     │     ├─ gui.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ mapping.cpython-313.pyc
   │     │     ├─ parquet.cpython-313.pyc
   │     │     ├─ registry.cpython-313.pyc
   │     │     ├─ spec.cpython-313.pyc
   │     │     ├─ transaction.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ fsspec-2026.2.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ h11
   │     │  ├─ py.typed
   │     │  ├─ _abnf.py
   │     │  ├─ _connection.py
   │     │  ├─ _events.py
   │     │  ├─ _headers.py
   │     │  ├─ _readers.py
   │     │  ├─ _receivebuffer.py
   │     │  ├─ _state.py
   │     │  ├─ _util.py
   │     │  ├─ _version.py
   │     │  ├─ _writers.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _abnf.cpython-313.pyc
   │     │     ├─ _connection.cpython-313.pyc
   │     │     ├─ _events.cpython-313.pyc
   │     │     ├─ _headers.cpython-313.pyc
   │     │     ├─ _readers.cpython-313.pyc
   │     │     ├─ _receivebuffer.cpython-313.pyc
   │     │     ├─ _state.cpython-313.pyc
   │     │     ├─ _util.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _writers.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ h11-0.16.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ h2
   │     │  ├─ config.py
   │     │  ├─ connection.py
   │     │  ├─ errors.py
   │     │  ├─ events.py
   │     │  ├─ exceptions.py
   │     │  ├─ frame_buffer.py
   │     │  ├─ py.typed
   │     │  ├─ settings.py
   │     │  ├─ stream.py
   │     │  ├─ utilities.py
   │     │  ├─ windows.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ events.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ frame_buffer.cpython-313.pyc
   │     │     ├─ settings.cpython-313.pyc
   │     │     ├─ stream.cpython-313.pyc
   │     │     ├─ utilities.cpython-313.pyc
   │     │     ├─ windows.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ h2-4.3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ hive_metastore
   │     │  ├─ constants.py
   │     │  ├─ ThriftHiveMetastore.py
   │     │  ├─ ttypes.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ ThriftHiveMetastore.cpython-313.pyc
   │     │     ├─ ttypes.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hpack
   │     │  ├─ exceptions.py
   │     │  ├─ hpack.py
   │     │  ├─ huffman.py
   │     │  ├─ huffman_constants.py
   │     │  ├─ huffman_table.py
   │     │  ├─ py.typed
   │     │  ├─ struct.py
   │     │  ├─ table.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ hpack.cpython-313.pyc
   │     │     ├─ huffman.cpython-313.pyc
   │     │     ├─ huffman_constants.cpython-313.pyc
   │     │     ├─ huffman_table.cpython-313.pyc
   │     │     ├─ struct.cpython-313.pyc
   │     │     ├─ table.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hpack-4.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ httpcore
   │     │  ├─ py.typed
   │     │  ├─ _api.py
   │     │  ├─ _async
   │     │  │  ├─ connection.py
   │     │  │  ├─ connection_pool.py
   │     │  │  ├─ http11.py
   │     │  │  ├─ http2.py
   │     │  │  ├─ http_proxy.py
   │     │  │  ├─ interfaces.py
   │     │  │  ├─ socks_proxy.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ connection_pool.cpython-313.pyc
   │     │  │     ├─ http11.cpython-313.pyc
   │     │  │     ├─ http2.cpython-313.pyc
   │     │  │     ├─ http_proxy.cpython-313.pyc
   │     │  │     ├─ interfaces.cpython-313.pyc
   │     │  │     ├─ socks_proxy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _backends
   │     │  │  ├─ anyio.py
   │     │  │  ├─ auto.py
   │     │  │  ├─ base.py
   │     │  │  ├─ mock.py
   │     │  │  ├─ sync.py
   │     │  │  ├─ trio.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anyio.cpython-313.pyc
   │     │  │     ├─ auto.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ mock.cpython-313.pyc
   │     │  │     ├─ sync.cpython-313.pyc
   │     │  │     ├─ trio.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _exceptions.py
   │     │  ├─ _models.py
   │     │  ├─ _ssl.py
   │     │  ├─ _sync
   │     │  │  ├─ connection.py
   │     │  │  ├─ connection_pool.py
   │     │  │  ├─ http11.py
   │     │  │  ├─ http2.py
   │     │  │  ├─ http_proxy.py
   │     │  │  ├─ interfaces.py
   │     │  │  ├─ socks_proxy.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ connection_pool.cpython-313.pyc
   │     │  │     ├─ http11.cpython-313.pyc
   │     │  │     ├─ http2.cpython-313.pyc
   │     │  │     ├─ http_proxy.cpython-313.pyc
   │     │  │     ├─ interfaces.cpython-313.pyc
   │     │  │     ├─ socks_proxy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _synchronization.py
   │     │  ├─ _trace.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _api.cpython-313.pyc
   │     │     ├─ _exceptions.cpython-313.pyc
   │     │     ├─ _models.cpython-313.pyc
   │     │     ├─ _ssl.cpython-313.pyc
   │     │     ├─ _synchronization.cpython-313.pyc
   │     │     ├─ _trace.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ httpcore-1.0.9.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ httpx
   │     │  ├─ py.typed
   │     │  ├─ _api.py
   │     │  ├─ _auth.py
   │     │  ├─ _client.py
   │     │  ├─ _config.py
   │     │  ├─ _content.py
   │     │  ├─ _decoders.py
   │     │  ├─ _exceptions.py
   │     │  ├─ _main.py
   │     │  ├─ _models.py
   │     │  ├─ _multipart.py
   │     │  ├─ _status_codes.py
   │     │  ├─ _transports
   │     │  │  ├─ asgi.py
   │     │  │  ├─ base.py
   │     │  │  ├─ default.py
   │     │  │  ├─ mock.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asgi.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ mock.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _types.py
   │     │  ├─ _urlparse.py
   │     │  ├─ _urls.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ _api.cpython-313.pyc
   │     │  │  ├─ _auth.cpython-313.pyc
   │     │  │  ├─ _client.cpython-313.pyc
   │     │  │  ├─ _config.cpython-313.pyc
   │     │  │  ├─ _content.cpython-313.pyc
   │     │  │  ├─ _decoders.cpython-313.pyc
   │     │  │  ├─ _exceptions.cpython-313.pyc
   │     │  │  ├─ _main.cpython-313.pyc
   │     │  │  ├─ _models.cpython-313.pyc
   │     │  │  ├─ _multipart.cpython-313.pyc
   │     │  │  ├─ _status_codes.cpython-313.pyc
   │     │  │  ├─ _types.cpython-313.pyc
   │     │  │  ├─ _urlparse.cpython-313.pyc
   │     │  │  ├─ _urls.cpython-313.pyc
   │     │  │  ├─ _utils.cpython-313.pyc
   │     │  │  ├─ __init__.cpython-313.pyc
   │     │  │  └─ __version__.cpython-313.pyc
   │     │  └─ __version__.py
   │     ├─ httpx-0.28.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ hyperframe
   │     │  ├─ exceptions.py
   │     │  ├─ flags.py
   │     │  ├─ frame.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ flags.cpython-313.pyc
   │     │     ├─ frame.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ hyperframe-6.1.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ idna
   │     │  ├─ codec.py
   │     │  ├─ compat.py
   │     │  ├─ core.py
   │     │  ├─ idnadata.py
   │     │  ├─ intranges.py
   │     │  ├─ package_data.py
   │     │  ├─ py.typed
   │     │  ├─ uts46data.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ codec.cpython-313.pyc
   │     │     ├─ compat.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ idnadata.cpython-313.pyc
   │     │     ├─ intranges.cpython-313.pyc
   │     │     ├─ package_data.cpython-313.pyc
   │     │     ├─ uts46data.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ idna-3.11.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ jwt
   │     │  ├─ algorithms.py
   │     │  ├─ api_jwk.py
   │     │  ├─ api_jws.py
   │     │  ├─ api_jwt.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ jwks_client.py
   │     │  ├─ jwk_set_cache.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ warnings.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ algorithms.cpython-313.pyc
   │     │     ├─ api_jwk.cpython-313.pyc
   │     │     ├─ api_jws.cpython-313.pyc
   │     │     ├─ api_jwt.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ help.cpython-313.pyc
   │     │     ├─ jwks_client.cpython-313.pyc
   │     │     ├─ jwk_set_cache.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ markdown_it
   │     │  ├─ cli
   │     │  │  ├─ parse.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ common
   │     │  │  ├─ entities.py
   │     │  │  ├─ html_blocks.py
   │     │  │  ├─ html_re.py
   │     │  │  ├─ normalize_url.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ entities.cpython-313.pyc
   │     │  │     ├─ html_blocks.cpython-313.pyc
   │     │  │     ├─ html_re.cpython-313.pyc
   │     │  │     ├─ normalize_url.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ helpers
   │     │  │  ├─ parse_link_destination.py
   │     │  │  ├─ parse_link_label.py
   │     │  │  ├─ parse_link_title.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ parse_link_destination.cpython-313.pyc
   │     │  │     ├─ parse_link_label.cpython-313.pyc
   │     │  │     ├─ parse_link_title.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ main.py
   │     │  ├─ parser_block.py
   │     │  ├─ parser_core.py
   │     │  ├─ parser_inline.py
   │     │  ├─ port.yaml
   │     │  ├─ presets
   │     │  │  ├─ commonmark.py
   │     │  │  ├─ default.py
   │     │  │  ├─ zero.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ commonmark.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ zero.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ renderer.py
   │     │  ├─ ruler.py
   │     │  ├─ rules_block
   │     │  │  ├─ blockquote.py
   │     │  │  ├─ code.py
   │     │  │  ├─ fence.py
   │     │  │  ├─ heading.py
   │     │  │  ├─ hr.py
   │     │  │  ├─ html_block.py
   │     │  │  ├─ lheading.py
   │     │  │  ├─ list.py
   │     │  │  ├─ paragraph.py
   │     │  │  ├─ reference.py
   │     │  │  ├─ state_block.py
   │     │  │  ├─ table.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ blockquote.cpython-313.pyc
   │     │  │     ├─ code.cpython-313.pyc
   │     │  │     ├─ fence.cpython-313.pyc
   │     │  │     ├─ heading.cpython-313.pyc
   │     │  │     ├─ hr.cpython-313.pyc
   │     │  │     ├─ html_block.cpython-313.pyc
   │     │  │     ├─ lheading.cpython-313.pyc
   │     │  │     ├─ list.cpython-313.pyc
   │     │  │     ├─ paragraph.cpython-313.pyc
   │     │  │     ├─ reference.cpython-313.pyc
   │     │  │     ├─ state_block.cpython-313.pyc
   │     │  │     ├─ table.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rules_core
   │     │  │  ├─ block.py
   │     │  │  ├─ inline.py
   │     │  │  ├─ linkify.py
   │     │  │  ├─ normalize.py
   │     │  │  ├─ replacements.py
   │     │  │  ├─ smartquotes.py
   │     │  │  ├─ state_core.py
   │     │  │  ├─ text_join.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ block.cpython-313.pyc
   │     │  │     ├─ inline.cpython-313.pyc
   │     │  │     ├─ linkify.cpython-313.pyc
   │     │  │     ├─ normalize.cpython-313.pyc
   │     │  │     ├─ replacements.cpython-313.pyc
   │     │  │     ├─ smartquotes.cpython-313.pyc
   │     │  │     ├─ state_core.cpython-313.pyc
   │     │  │     ├─ text_join.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rules_inline
   │     │  │  ├─ autolink.py
   │     │  │  ├─ backticks.py
   │     │  │  ├─ balance_pairs.py
   │     │  │  ├─ emphasis.py
   │     │  │  ├─ entity.py
   │     │  │  ├─ escape.py
   │     │  │  ├─ fragments_join.py
   │     │  │  ├─ html_inline.py
   │     │  │  ├─ image.py
   │     │  │  ├─ link.py
   │     │  │  ├─ linkify.py
   │     │  │  ├─ newline.py
   │     │  │  ├─ state_inline.py
   │     │  │  ├─ strikethrough.py
   │     │  │  ├─ text.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ autolink.cpython-313.pyc
   │     │  │     ├─ backticks.cpython-313.pyc
   │     │  │     ├─ balance_pairs.cpython-313.pyc
   │     │  │     ├─ emphasis.cpython-313.pyc
   │     │  │     ├─ entity.cpython-313.pyc
   │     │  │     ├─ escape.cpython-313.pyc
   │     │  │     ├─ fragments_join.cpython-313.pyc
   │     │  │     ├─ html_inline.cpython-313.pyc
   │     │  │     ├─ image.cpython-313.pyc
   │     │  │     ├─ link.cpython-313.pyc
   │     │  │     ├─ linkify.cpython-313.pyc
   │     │  │     ├─ newline.cpython-313.pyc
   │     │  │     ├─ state_inline.cpython-313.pyc
   │     │  │     ├─ strikethrough.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ token.py
   │     │  ├─ tree.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _punycode.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ parser_block.cpython-313.pyc
   │     │     ├─ parser_core.cpython-313.pyc
   │     │     ├─ parser_inline.cpython-313.pyc
   │     │     ├─ renderer.cpython-313.pyc
   │     │     ├─ ruler.cpython-313.pyc
   │     │     ├─ token.cpython-313.pyc
   │     │     ├─ tree.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _punycode.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ markdown_it_py-4.0.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ LICENSE.markdown-it
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ mdurl
   │     │  ├─ py.typed
   │     │  ├─ _decode.py
   │     │  ├─ _encode.py
   │     │  ├─ _format.py
   │     │  ├─ _parse.py
   │     │  ├─ _url.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _decode.cpython-313.pyc
   │     │     ├─ _encode.cpython-313.pyc
   │     │     ├─ _format.cpython-313.pyc
   │     │     ├─ _parse.cpython-313.pyc
   │     │     ├─ _url.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ mdurl-0.1.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ mmh3
   │     │  ├─ hashlib.h
   │     │  ├─ mmh3module.c
   │     │  ├─ murmurhash3.c
   │     │  ├─ murmurhash3.h
   │     │  ├─ py.typed
   │     │  └─ __init__.pyi
   │     ├─ mmh3-5.2.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ mmh3.cp313-win_amd64.pyd
   │     ├─ multidict
   │     │  ├─ py.typed
   │     │  ├─ _abc.py
   │     │  ├─ _compat.py
   │     │  ├─ _multidict.cp313-win_amd64.pyd
   │     │  ├─ _multidict_py.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _abc.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _multidict_py.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ multidict-6.7.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ multipart
   │     │  ├─ decoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ multipart.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ decoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ multipart.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ numpy
   │     │  ├─ char
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ function_base.py
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ umath.py
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _multiarray_umath.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _multiarray_umath.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ctypeslib
   │     │  │  ├─ _ctypeslib.py
   │     │  │  ├─ _ctypeslib.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _ctypeslib.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ doc
   │     │  │  ├─ ufuncs.py
   │     │  │  └─ __pycache__
   │     │  │     └─ ufuncs.cpython-313.pyc
   │     │  ├─ dtypes.py
   │     │  ├─ dtypes.pyi
   │     │  ├─ exceptions.py
   │     │  ├─ exceptions.pyi
   │     │  ├─ f2py
   │     │  │  ├─ auxfuncs.py
   │     │  │  ├─ auxfuncs.pyi
   │     │  │  ├─ capi_maps.py
   │     │  │  ├─ capi_maps.pyi
   │     │  │  ├─ cb_rules.py
   │     │  │  ├─ cb_rules.pyi
   │     │  │  ├─ cfuncs.py
   │     │  │  ├─ cfuncs.pyi
   │     │  │  ├─ common_rules.py
   │     │  │  ├─ common_rules.pyi
   │     │  │  ├─ crackfortran.py
   │     │  │  ├─ crackfortran.pyi
   │     │  │  ├─ diagnose.py
   │     │  │  ├─ diagnose.pyi
   │     │  │  ├─ f2py2e.py
   │     │  │  ├─ f2py2e.pyi
   │     │  │  ├─ f90mod_rules.py
   │     │  │  ├─ f90mod_rules.pyi
   │     │  │  ├─ func2subr.py
   │     │  │  ├─ func2subr.pyi
   │     │  │  ├─ rules.py
   │     │  │  ├─ rules.pyi
   │     │  │  ├─ setup.cfg
   │     │  │  ├─ src
   │     │  │  │  ├─ fortranobject.c
   │     │  │  │  └─ fortranobject.h
   │     │  │  ├─ symbolic.py
   │     │  │  ├─ symbolic.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ src
   │     │  │  │  │  ├─ abstract_interface
   │     │  │  │  │  │  ├─ foo.f90
   │     │  │  │  │  │  └─ gh18403_mod.f90
   │     │  │  │  │  ├─ array_from_pyobj
   │     │  │  │  │  │  └─ wrapmodule.c
   │     │  │  │  │  ├─ assumed_shape
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  ├─ foo_free.f90
   │     │  │  │  │  │  ├─ foo_mod.f90
   │     │  │  │  │  │  ├─ foo_use.f90
   │     │  │  │  │  │  └─ precision.f90
   │     │  │  │  │  ├─ block_docstring
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ callback
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ gh17797.f90
   │     │  │  │  │  │  ├─ gh18335.f90
   │     │  │  │  │  │  ├─ gh25211.f
   │     │  │  │  │  │  ├─ gh25211.pyf
   │     │  │  │  │  │  └─ gh26681.f90
   │     │  │  │  │  ├─ cli
   │     │  │  │  │  │  ├─ gh_22819.pyf
   │     │  │  │  │  │  ├─ hi77.f
   │     │  │  │  │  │  └─ hiworld.f90
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ block.f
   │     │  │  │  │  │  └─ gh19161.f90
   │     │  │  │  │  ├─ crackfortran
   │     │  │  │  │  │  ├─ accesstype.f90
   │     │  │  │  │  │  ├─ common_with_division.f
   │     │  │  │  │  │  ├─ data_common.f
   │     │  │  │  │  │  ├─ data_multiplier.f
   │     │  │  │  │  │  ├─ data_stmts.f90
   │     │  │  │  │  │  ├─ data_with_comments.f
   │     │  │  │  │  │  ├─ foo_deps.f90
   │     │  │  │  │  │  ├─ gh15035.f
   │     │  │  │  │  │  ├─ gh17859.f
   │     │  │  │  │  │  ├─ gh22648.pyf
   │     │  │  │  │  │  ├─ gh23533.f
   │     │  │  │  │  │  ├─ gh23598.f90
   │     │  │  │  │  │  ├─ gh23598Warn.f90
   │     │  │  │  │  │  ├─ gh23879.f90
   │     │  │  │  │  │  ├─ gh27697.f90
   │     │  │  │  │  │  ├─ gh2848.f90
   │     │  │  │  │  │  ├─ operators.f90
   │     │  │  │  │  │  ├─ privatemod.f90
   │     │  │  │  │  │  ├─ publicmod.f90
   │     │  │  │  │  │  ├─ pubprivmod.f90
   │     │  │  │  │  │  └─ unicode_comment.f90
   │     │  │  │  │  ├─ f2cmap
   │     │  │  │  │  │  ├─ .f2py_f2cmap
   │     │  │  │  │  │  └─ isoFortranEnvMap.f90
   │     │  │  │  │  ├─ isocintrin
   │     │  │  │  │  │  └─ isoCtests.f90
   │     │  │  │  │  ├─ kind
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ mixed
   │     │  │  │  │  │  ├─ foo.f
   │     │  │  │  │  │  ├─ foo_fixed.f90
   │     │  │  │  │  │  └─ foo_free.f90
   │     │  │  │  │  ├─ modules
   │     │  │  │  │  │  ├─ gh25337
   │     │  │  │  │  │  │  ├─ data.f90
   │     │  │  │  │  │  │  └─ use_data.f90
   │     │  │  │  │  │  ├─ gh26920
   │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
   │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
   │     │  │  │  │  │  ├─ module_data_docstring.f90
   │     │  │  │  │  │  └─ use_modules.f90
   │     │  │  │  │  ├─ negative_bounds
   │     │  │  │  │  │  └─ issue_20853.f90
   │     │  │  │  │  ├─ parameter
   │     │  │  │  │  │  ├─ constant_array.f90
   │     │  │  │  │  │  ├─ constant_both.f90
   │     │  │  │  │  │  ├─ constant_compound.f90
   │     │  │  │  │  │  ├─ constant_integer.f90
   │     │  │  │  │  │  ├─ constant_non_compound.f90
   │     │  │  │  │  │  └─ constant_real.f90
   │     │  │  │  │  ├─ quoted_character
   │     │  │  │  │  │  └─ foo.f
   │     │  │  │  │  ├─ regression
   │     │  │  │  │  │  ├─ AB.inc
   │     │  │  │  │  │  ├─ assignOnlyModule.f90
   │     │  │  │  │  │  ├─ datonly.f90
   │     │  │  │  │  │  ├─ f77comments.f
   │     │  │  │  │  │  ├─ f77fixedform.f95
   │     │  │  │  │  │  ├─ f90continuation.f90
   │     │  │  │  │  │  ├─ incfile.f90
   │     │  │  │  │  │  ├─ inout.f90
   │     │  │  │  │  │  ├─ lower_f2py_fortran.f90
   │     │  │  │  │  │  └─ mod_derived_types.f90
   │     │  │  │  │  ├─ return_character
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_complex
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_integer
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_logical
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ return_real
   │     │  │  │  │  │  ├─ foo77.f
   │     │  │  │  │  │  └─ foo90.f90
   │     │  │  │  │  ├─ routines
   │     │  │  │  │  │  ├─ funcfortranname.f
   │     │  │  │  │  │  ├─ funcfortranname.pyf
   │     │  │  │  │  │  ├─ subrout.f
   │     │  │  │  │  │  └─ subrout.pyf
   │     │  │  │  │  ├─ size
   │     │  │  │  │  │  └─ foo.f90
   │     │  │  │  │  ├─ string
   │     │  │  │  │  │  ├─ char.f90
   │     │  │  │  │  │  ├─ fixed_string.f90
   │     │  │  │  │  │  ├─ gh24008.f
   │     │  │  │  │  │  ├─ gh24662.f90
   │     │  │  │  │  │  ├─ gh25286.f90
   │     │  │  │  │  │  ├─ gh25286.pyf
   │     │  │  │  │  │  ├─ gh25286_bc.pyf
   │     │  │  │  │  │  ├─ scalar_string.f90
   │     │  │  │  │  │  └─ string.f
   │     │  │  │  │  └─ value_attrspec
   │     │  │  │  │     └─ gh21665.f90
   │     │  │  │  ├─ test_abstract_interface.py
   │     │  │  │  ├─ test_array_from_pyobj.py
   │     │  │  │  ├─ test_assumed_shape.py
   │     │  │  │  ├─ test_block_docstring.py
   │     │  │  │  ├─ test_callback.py
   │     │  │  │  ├─ test_character.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_crackfortran.py
   │     │  │  │  ├─ test_data.py
   │     │  │  │  ├─ test_docs.py
   │     │  │  │  ├─ test_f2cmap.py
   │     │  │  │  ├─ test_f2py2e.py
   │     │  │  │  ├─ test_isoc.py
   │     │  │  │  ├─ test_kind.py
   │     │  │  │  ├─ test_mixed.py
   │     │  │  │  ├─ test_modules.py
   │     │  │  │  ├─ test_parameter.py
   │     │  │  │  ├─ test_pyf_src.py
   │     │  │  │  ├─ test_quoted_character.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_return_character.py
   │     │  │  │  ├─ test_return_complex.py
   │     │  │  │  ├─ test_return_integer.py
   │     │  │  │  ├─ test_return_logical.py
   │     │  │  │  ├─ test_return_real.py
   │     │  │  │  ├─ test_routines.py
   │     │  │  │  ├─ test_semicolon_split.py
   │     │  │  │  ├─ test_size.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ test_symbolic.py
   │     │  │  │  ├─ test_value_attrspec.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abstract_interface.cpython-313.pyc
   │     │  │  │     ├─ test_array_from_pyobj.cpython-313.pyc
   │     │  │  │     ├─ test_assumed_shape.cpython-313.pyc
   │     │  │  │     ├─ test_block_docstring.cpython-313.pyc
   │     │  │  │     ├─ test_callback.cpython-313.pyc
   │     │  │  │     ├─ test_character.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_crackfortran.cpython-313.pyc
   │     │  │  │     ├─ test_data.cpython-313.pyc
   │     │  │  │     ├─ test_docs.cpython-313.pyc
   │     │  │  │     ├─ test_f2cmap.cpython-313.pyc
   │     │  │  │     ├─ test_f2py2e.cpython-313.pyc
   │     │  │  │     ├─ test_isoc.cpython-313.pyc
   │     │  │  │     ├─ test_kind.cpython-313.pyc
   │     │  │  │     ├─ test_mixed.cpython-313.pyc
   │     │  │  │     ├─ test_modules.cpython-313.pyc
   │     │  │  │     ├─ test_parameter.cpython-313.pyc
   │     │  │  │     ├─ test_pyf_src.cpython-313.pyc
   │     │  │  │     ├─ test_quoted_character.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_return_character.cpython-313.pyc
   │     │  │  │     ├─ test_return_complex.cpython-313.pyc
   │     │  │  │     ├─ test_return_integer.cpython-313.pyc
   │     │  │  │     ├─ test_return_logical.cpython-313.pyc
   │     │  │  │     ├─ test_return_real.cpython-313.pyc
   │     │  │  │     ├─ test_routines.cpython-313.pyc
   │     │  │  │     ├─ test_semicolon_split.cpython-313.pyc
   │     │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     ├─ test_symbolic.cpython-313.pyc
   │     │  │  │     ├─ test_value_attrspec.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ use_rules.py
   │     │  │  ├─ use_rules.pyi
   │     │  │  ├─ _backends
   │     │  │  │  ├─ meson.build.template
   │     │  │  │  ├─ _backend.py
   │     │  │  │  ├─ _backend.pyi
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _distutils.pyi
   │     │  │  │  ├─ _meson.py
   │     │  │  │  ├─ _meson.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __init__.pyi
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _backend.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _meson.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _isocbind.py
   │     │  │  ├─ _isocbind.pyi
   │     │  │  ├─ _src_pyf.py
   │     │  │  ├─ _src_pyf.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  ├─ __main__.py
   │     │  │  ├─ __pycache__
   │     │  │  │  ├─ auxfuncs.cpython-313.pyc
   │     │  │  │  ├─ capi_maps.cpython-313.pyc
   │     │  │  │  ├─ cb_rules.cpython-313.pyc
   │     │  │  │  ├─ cfuncs.cpython-313.pyc
   │     │  │  │  ├─ common_rules.cpython-313.pyc
   │     │  │  │  ├─ crackfortran.cpython-313.pyc
   │     │  │  │  ├─ diagnose.cpython-313.pyc
   │     │  │  │  ├─ f2py2e.cpython-313.pyc
   │     │  │  │  ├─ f90mod_rules.cpython-313.pyc
   │     │  │  │  ├─ func2subr.cpython-313.pyc
   │     │  │  │  ├─ rules.cpython-313.pyc
   │     │  │  │  ├─ symbolic.cpython-313.pyc
   │     │  │  │  ├─ use_rules.cpython-313.pyc
   │     │  │  │  ├─ _isocbind.cpython-313.pyc
   │     │  │  │  ├─ _src_pyf.cpython-313.pyc
   │     │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __main__.cpython-313.pyc
   │     │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  ├─ __version__.py
   │     │  │  └─ __version__.pyi
   │     │  ├─ fft
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_helper.py
   │     │  │  │  ├─ test_pocketfft.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_helper.cpython-313.pyc
   │     │  │  │     ├─ test_pocketfft.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _helper.py
   │     │  │  ├─ _helper.pyi
   │     │  │  ├─ _pocketfft.py
   │     │  │  ├─ _pocketfft.pyi
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.lib
   │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _helper.cpython-313.pyc
   │     │  │     ├─ _pocketfft.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ lib
   │     │  │  ├─ array_utils.py
   │     │  │  ├─ array_utils.pyi
   │     │  │  ├─ format.py
   │     │  │  ├─ format.pyi
   │     │  │  ├─ introspect.py
   │     │  │  ├─ introspect.pyi
   │     │  │  ├─ mixins.py
   │     │  │  ├─ mixins.pyi
   │     │  │  ├─ npyio.py
   │     │  │  ├─ npyio.pyi
   │     │  │  ├─ recfunctions.py
   │     │  │  ├─ recfunctions.pyi
   │     │  │  ├─ scimath.py
   │     │  │  ├─ scimath.pyi
   │     │  │  ├─ stride_tricks.py
   │     │  │  ├─ stride_tricks.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ py2-np0-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npy
   │     │  │  │  │  ├─ py2-objarr.npz
   │     │  │  │  │  ├─ py3-objarr.npy
   │     │  │  │  │  ├─ py3-objarr.npz
   │     │  │  │  │  ├─ python3.npy
   │     │  │  │  │  └─ win64python2.npy
   │     │  │  │  ├─ test_arraypad.py
   │     │  │  │  ├─ test_arraysetops.py
   │     │  │  │  ├─ test_arrayterator.py
   │     │  │  │  ├─ test_array_utils.py
   │     │  │  │  ├─ test_format.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_histograms.py
   │     │  │  │  ├─ test_index_tricks.py
   │     │  │  │  ├─ test_io.py
   │     │  │  │  ├─ test_loadtxt.py
   │     │  │  │  ├─ test_mixins.py
   │     │  │  │  ├─ test_nanfunctions.py
   │     │  │  │  ├─ test_packbits.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_recfunctions.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_stride_tricks.py
   │     │  │  │  ├─ test_twodim_base.py
   │     │  │  │  ├─ test_type_check.py
   │     │  │  │  ├─ test_ufunclike.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ test__datasource.py
   │     │  │  │  ├─ test__iotools.py
   │     │  │  │  ├─ test__version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arraypad.cpython-313.pyc
   │     │  │  │     ├─ test_arraysetops.cpython-313.pyc
   │     │  │  │     ├─ test_arrayterator.cpython-313.pyc
   │     │  │  │     ├─ test_array_utils.cpython-313.pyc
   │     │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_histograms.cpython-313.pyc
   │     │  │  │     ├─ test_index_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_io.cpython-313.pyc
   │     │  │  │     ├─ test_loadtxt.cpython-313.pyc
   │     │  │  │     ├─ test_mixins.cpython-313.pyc
   │     │  │  │     ├─ test_nanfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_packbits.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_recfunctions.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_stride_tricks.cpython-313.pyc
   │     │  │  │     ├─ test_twodim_base.cpython-313.pyc
   │     │  │  │     ├─ test_type_check.cpython-313.pyc
   │     │  │  │     ├─ test_ufunclike.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     ├─ test__datasource.cpython-313.pyc
   │     │  │  │     ├─ test__iotools.cpython-313.pyc
   │     │  │  │     ├─ test__version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ user_array.py
   │     │  │  ├─ user_array.pyi
   │     │  │  ├─ _arraypad_impl.py
   │     │  │  ├─ _arraypad_impl.pyi
   │     │  │  ├─ _arraysetops_impl.py
   │     │  │  ├─ _arraysetops_impl.pyi
   │     │  │  ├─ _arrayterator_impl.py
   │     │  │  ├─ _arrayterator_impl.pyi
   │     │  │  ├─ _array_utils_impl.py
   │     │  │  ├─ _array_utils_impl.pyi
   │     │  │  ├─ _datasource.py
   │     │  │  ├─ _datasource.pyi
   │     │  │  ├─ _format_impl.py
   │     │  │  ├─ _format_impl.pyi
   │     │  │  ├─ _function_base_impl.py
   │     │  │  ├─ _function_base_impl.pyi
   │     │  │  ├─ _histograms_impl.py
   │     │  │  ├─ _histograms_impl.pyi
   │     │  │  ├─ _index_tricks_impl.py
   │     │  │  ├─ _index_tricks_impl.pyi
   │     │  │  ├─ _iotools.py
   │     │  │  ├─ _iotools.pyi
   │     │  │  ├─ _nanfunctions_impl.py
   │     │  │  ├─ _nanfunctions_impl.pyi
   │     │  │  ├─ _npyio_impl.py
   │     │  │  ├─ _npyio_impl.pyi
   │     │  │  ├─ _polynomial_impl.py
   │     │  │  ├─ _polynomial_impl.pyi
   │     │  │  ├─ _scimath_impl.py
   │     │  │  ├─ _scimath_impl.pyi
   │     │  │  ├─ _shape_base_impl.py
   │     │  │  ├─ _shape_base_impl.pyi
   │     │  │  ├─ _stride_tricks_impl.py
   │     │  │  ├─ _stride_tricks_impl.pyi
   │     │  │  ├─ _twodim_base_impl.py
   │     │  │  ├─ _twodim_base_impl.pyi
   │     │  │  ├─ _type_check_impl.py
   │     │  │  ├─ _type_check_impl.pyi
   │     │  │  ├─ _ufunclike_impl.py
   │     │  │  ├─ _ufunclike_impl.pyi
   │     │  │  ├─ _user_array_impl.py
   │     │  │  ├─ _user_array_impl.pyi
   │     │  │  ├─ _utils_impl.py
   │     │  │  ├─ _utils_impl.pyi
   │     │  │  ├─ _version.py
   │     │  │  ├─ _version.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ array_utils.cpython-313.pyc
   │     │  │     ├─ format.cpython-313.pyc
   │     │  │     ├─ introspect.cpython-313.pyc
   │     │  │     ├─ mixins.cpython-313.pyc
   │     │  │     ├─ npyio.cpython-313.pyc
   │     │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │     ├─ scimath.cpython-313.pyc
   │     │  │     ├─ stride_tricks.cpython-313.pyc
   │     │  │     ├─ user_array.cpython-313.pyc
   │     │  │     ├─ _arraypad_impl.cpython-313.pyc
   │     │  │     ├─ _arraysetops_impl.cpython-313.pyc
   │     │  │     ├─ _arrayterator_impl.cpython-313.pyc
   │     │  │     ├─ _array_utils_impl.cpython-313.pyc
   │     │  │     ├─ _datasource.cpython-313.pyc
   │     │  │     ├─ _format_impl.cpython-313.pyc
   │     │  │     ├─ _function_base_impl.cpython-313.pyc
   │     │  │     ├─ _histograms_impl.cpython-313.pyc
   │     │  │     ├─ _index_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _iotools.cpython-313.pyc
   │     │  │     ├─ _nanfunctions_impl.cpython-313.pyc
   │     │  │     ├─ _npyio_impl.cpython-313.pyc
   │     │  │     ├─ _polynomial_impl.cpython-313.pyc
   │     │  │     ├─ _scimath_impl.cpython-313.pyc
   │     │  │     ├─ _shape_base_impl.cpython-313.pyc
   │     │  │     ├─ _stride_tricks_impl.cpython-313.pyc
   │     │  │     ├─ _twodim_base_impl.cpython-313.pyc
   │     │  │     ├─ _type_check_impl.cpython-313.pyc
   │     │  │     ├─ _ufunclike_impl.cpython-313.pyc
   │     │  │     ├─ _user_array_impl.cpython-313.pyc
   │     │  │     ├─ _utils_impl.cpython-313.pyc
   │     │  │     ├─ _version.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ linalg
   │     │  │  ├─ lapack_lite.cp313-win_amd64.lib
   │     │  │  ├─ lapack_lite.cp313-win_amd64.pyd
   │     │  │  ├─ lapack_lite.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_linalg.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _linalg.py
   │     │  │  ├─ _linalg.pyi
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.lib
   │     │  │  ├─ _umath_linalg.cp313-win_amd64.pyd
   │     │  │  ├─ _umath_linalg.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _linalg.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ ma
   │     │  │  ├─ API_CHANGES.txt
   │     │  │  ├─ core.py
   │     │  │  ├─ core.pyi
   │     │  │  ├─ extras.py
   │     │  │  ├─ extras.pyi
   │     │  │  ├─ LICENSE
   │     │  │  ├─ mrecords.py
   │     │  │  ├─ mrecords.pyi
   │     │  │  ├─ README.rst
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_core.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_extras.py
   │     │  │  │  ├─ test_mrecords.py
   │     │  │  │  ├─ test_old_ma.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_subclassing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_core.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_extras.cpython-313.pyc
   │     │  │  │     ├─ test_mrecords.cpython-313.pyc
   │     │  │  │     ├─ test_old_ma.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_subclassing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ testutils.py
   │     │  │  ├─ testutils.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ core.cpython-313.pyc
   │     │  │     ├─ extras.cpython-313.pyc
   │     │  │     ├─ mrecords.cpython-313.pyc
   │     │  │     ├─ testutils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ matlib.py
   │     │  ├─ matlib.pyi
   │     │  ├─ matrixlib
   │     │  │  ├─ defmatrix.py
   │     │  │  ├─ defmatrix.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_defmatrix.py
   │     │  │  │  ├─ test_interaction.py
   │     │  │  │  ├─ test_masked_matrix.py
   │     │  │  │  ├─ test_matrix_linalg.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_defmatrix.cpython-313.pyc
   │     │  │  │     ├─ test_interaction.cpython-313.pyc
   │     │  │  │     ├─ test_masked_matrix.cpython-313.pyc
   │     │  │  │     ├─ test_matrix_linalg.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ defmatrix.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ polynomial
   │     │  │  ├─ chebyshev.py
   │     │  │  ├─ chebyshev.pyi
   │     │  │  ├─ hermite.py
   │     │  │  ├─ hermite.pyi
   │     │  │  ├─ hermite_e.py
   │     │  │  ├─ hermite_e.pyi
   │     │  │  ├─ laguerre.py
   │     │  │  ├─ laguerre.pyi
   │     │  │  ├─ legendre.py
   │     │  │  ├─ legendre.pyi
   │     │  │  ├─ polynomial.py
   │     │  │  ├─ polynomial.pyi
   │     │  │  ├─ polyutils.py
   │     │  │  ├─ polyutils.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_chebyshev.py
   │     │  │  │  ├─ test_classes.py
   │     │  │  │  ├─ test_hermite.py
   │     │  │  │  ├─ test_hermite_e.py
   │     │  │  │  ├─ test_laguerre.py
   │     │  │  │  ├─ test_legendre.py
   │     │  │  │  ├─ test_polynomial.py
   │     │  │  │  ├─ test_polyutils.py
   │     │  │  │  ├─ test_printing.py
   │     │  │  │  ├─ test_symbol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_chebyshev.cpython-313.pyc
   │     │  │  │     ├─ test_classes.cpython-313.pyc
   │     │  │  │     ├─ test_hermite.cpython-313.pyc
   │     │  │  │     ├─ test_hermite_e.cpython-313.pyc
   │     │  │  │     ├─ test_laguerre.cpython-313.pyc
   │     │  │  │     ├─ test_legendre.cpython-313.pyc
   │     │  │  │     ├─ test_polynomial.cpython-313.pyc
   │     │  │  │     ├─ test_polyutils.cpython-313.pyc
   │     │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │     ├─ test_symbol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _polybase.py
   │     │  │  ├─ _polybase.pyi
   │     │  │  ├─ _polytypes.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ chebyshev.cpython-313.pyc
   │     │  │     ├─ hermite.cpython-313.pyc
   │     │  │     ├─ hermite_e.cpython-313.pyc
   │     │  │     ├─ laguerre.cpython-313.pyc
   │     │  │     ├─ legendre.cpython-313.pyc
   │     │  │     ├─ polynomial.cpython-313.pyc
   │     │  │     ├─ polyutils.cpython-313.pyc
   │     │  │     ├─ _polybase.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ random
   │     │  │  ├─ bit_generator.cp313-win_amd64.lib
   │     │  │  ├─ bit_generator.cp313-win_amd64.pyd
   │     │  │  ├─ bit_generator.pxd
   │     │  │  ├─ bit_generator.pyi
   │     │  │  ├─ c_distributions.pxd
   │     │  │  ├─ lib
   │     │  │  │  └─ npyrandom.lib
   │     │  │  ├─ LICENSE.md
   │     │  │  ├─ mtrand.cp313-win_amd64.lib
   │     │  │  ├─ mtrand.cp313-win_amd64.pyd
   │     │  │  ├─ mtrand.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
   │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
   │     │  │  │  │  ├─ mt19937-testset-1.csv
   │     │  │  │  │  ├─ mt19937-testset-2.csv
   │     │  │  │  │  ├─ pcg64-testset-1.csv
   │     │  │  │  │  ├─ pcg64-testset-2.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
   │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
   │     │  │  │  │  ├─ philox-testset-1.csv
   │     │  │  │  │  ├─ philox-testset-2.csv
   │     │  │  │  │  ├─ sfc64-testset-1.csv
   │     │  │  │  │  ├─ sfc64-testset-2.csv
   │     │  │  │  │  ├─ sfc64_np126.pkl.gz
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_direct.py
   │     │  │  │  ├─ test_extending.py
   │     │  │  │  ├─ test_generator_mt19937.py
   │     │  │  │  ├─ test_generator_mt19937_regressions.py
   │     │  │  │  ├─ test_random.py
   │     │  │  │  ├─ test_randomstate.py
   │     │  │  │  ├─ test_randomstate_regression.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_seed_sequence.py
   │     │  │  │  ├─ test_smoke.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_direct.cpython-313.pyc
   │     │  │  │     ├─ test_extending.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937.cpython-313.pyc
   │     │  │  │     ├─ test_generator_mt19937_regressions.cpython-313.pyc
   │     │  │  │     ├─ test_random.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate.cpython-313.pyc
   │     │  │  │     ├─ test_randomstate_regression.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_seed_sequence.cpython-313.pyc
   │     │  │  │     ├─ test_smoke.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.lib
   │     │  │  ├─ _bounded_integers.cp313-win_amd64.pyd
   │     │  │  ├─ _bounded_integers.pxd
   │     │  │  ├─ _bounded_integers.pyi
   │     │  │  ├─ _common.cp313-win_amd64.lib
   │     │  │  ├─ _common.cp313-win_amd64.pyd
   │     │  │  ├─ _common.pxd
   │     │  │  ├─ _common.pyi
   │     │  │  ├─ _examples
   │     │  │  │  ├─ cffi
   │     │  │  │  │  ├─ extending.py
   │     │  │  │  │  ├─ parse.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ extending.cpython-313.pyc
   │     │  │  │  │     └─ parse.cpython-313.pyc
   │     │  │  │  ├─ cython
   │     │  │  │  │  ├─ extending.pyx
   │     │  │  │  │  ├─ extending_distributions.pyx
   │     │  │  │  │  └─ meson.build
   │     │  │  │  └─ numba
   │     │  │  │     ├─ extending.py
   │     │  │  │     ├─ extending_distributions.py
   │     │  │  │     └─ __pycache__
   │     │  │  │        ├─ extending.cpython-313.pyc
   │     │  │  │        └─ extending_distributions.cpython-313.pyc
   │     │  │  ├─ _generator.cp313-win_amd64.lib
   │     │  │  ├─ _generator.cp313-win_amd64.pyd
   │     │  │  ├─ _generator.pyi
   │     │  │  ├─ _mt19937.cp313-win_amd64.lib
   │     │  │  ├─ _mt19937.cp313-win_amd64.pyd
   │     │  │  ├─ _mt19937.pyi
   │     │  │  ├─ _pcg64.cp313-win_amd64.lib
   │     │  │  ├─ _pcg64.cp313-win_amd64.pyd
   │     │  │  ├─ _pcg64.pyi
   │     │  │  ├─ _philox.cp313-win_amd64.lib
   │     │  │  ├─ _philox.cp313-win_amd64.pyd
   │     │  │  ├─ _philox.pyi
   │     │  │  ├─ _pickle.py
   │     │  │  ├─ _pickle.pyi
   │     │  │  ├─ _sfc64.cp313-win_amd64.lib
   │     │  │  ├─ _sfc64.cp313-win_amd64.pyd
   │     │  │  ├─ _sfc64.pyi
   │     │  │  ├─ __init__.pxd
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _pickle.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ rec
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ strings
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ testing
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ print_coercion_tables.py
   │     │  │  ├─ print_coercion_tables.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _private
   │     │  │  │  ├─ extbuild.py
   │     │  │  │  ├─ extbuild.pyi
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ utils.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __init__.pyi
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ extbuild.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ print_coercion_tables.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tests
   │     │  │  ├─ test_configtool.py
   │     │  │  ├─ test_ctypeslib.py
   │     │  │  ├─ test_lazyloading.py
   │     │  │  ├─ test_matlib.py
   │     │  │  ├─ test_numpy_config.py
   │     │  │  ├─ test_numpy_version.py
   │     │  │  ├─ test_public_api.py
   │     │  │  ├─ test_reloading.py
   │     │  │  ├─ test_scripts.py
   │     │  │  ├─ test_warnings.py
   │     │  │  ├─ test__all__.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_configtool.cpython-313.pyc
   │     │  │     ├─ test_ctypeslib.cpython-313.pyc
   │     │  │     ├─ test_lazyloading.cpython-313.pyc
   │     │  │     ├─ test_matlib.cpython-313.pyc
   │     │  │     ├─ test_numpy_config.cpython-313.pyc
   │     │  │     ├─ test_numpy_version.cpython-313.pyc
   │     │  │     ├─ test_public_api.cpython-313.pyc
   │     │  │     ├─ test_reloading.cpython-313.pyc
   │     │  │     ├─ test_scripts.cpython-313.pyc
   │     │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │     ├─ test__all__.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing
   │     │  │  ├─ mypy_plugin.py
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ fail
   │     │  │  │  │  │  ├─ arithmetic.pyi
   │     │  │  │  │  │  ├─ arrayprint.pyi
   │     │  │  │  │  │  ├─ arrayterator.pyi
   │     │  │  │  │  │  ├─ array_constructors.pyi
   │     │  │  │  │  │  ├─ array_like.pyi
   │     │  │  │  │  │  ├─ array_pad.pyi
   │     │  │  │  │  │  ├─ bitwise_ops.pyi
   │     │  │  │  │  │  ├─ char.pyi
   │     │  │  │  │  │  ├─ chararray.pyi
   │     │  │  │  │  │  ├─ comparisons.pyi
   │     │  │  │  │  │  ├─ constants.pyi
   │     │  │  │  │  │  ├─ datasource.pyi
   │     │  │  │  │  │  ├─ dtype.pyi
   │     │  │  │  │  │  ├─ einsumfunc.pyi
   │     │  │  │  │  │  ├─ flatiter.pyi
   │     │  │  │  │  │  ├─ fromnumeric.pyi
   │     │  │  │  │  │  ├─ histograms.pyi
   │     │  │  │  │  │  ├─ index_tricks.pyi
   │     │  │  │  │  │  ├─ lib_function_base.pyi
   │     │  │  │  │  │  ├─ lib_polynomial.pyi
   │     │  │  │  │  │  ├─ lib_utils.pyi
   │     │  │  │  │  │  ├─ lib_version.pyi
   │     │  │  │  │  │  ├─ linalg.pyi
   │     │  │  │  │  │  ├─ ma.pyi
   │     │  │  │  │  │  ├─ memmap.pyi
   │     │  │  │  │  │  ├─ modules.pyi
   │     │  │  │  │  │  ├─ multiarray.pyi
   │     │  │  │  │  │  ├─ ndarray.pyi
   │     │  │  │  │  │  ├─ ndarray_misc.pyi
   │     │  │  │  │  │  ├─ nditer.pyi
   │     │  │  │  │  │  ├─ nested_sequence.pyi
   │     │  │  │  │  │  ├─ npyio.pyi
   │     │  │  │  │  │  ├─ numerictypes.pyi
   │     │  │  │  │  │  ├─ random.pyi
   │     │  │  │  │  │  ├─ rec.pyi
   │     │  │  │  │  │  ├─ scalars.pyi
   │     │  │  │  │  │  ├─ shape.pyi
   │     │  │  │  │  │  ├─ shape_base.pyi
   │     │  │  │  │  │  ├─ stride_tricks.pyi
   │     │  │  │  │  │  ├─ strings.pyi
   │     │  │  │  │  │  ├─ testing.pyi
   │     │  │  │  │  │  ├─ twodim_base.pyi
   │     │  │  │  │  │  ├─ type_check.pyi
   │     │  │  │  │  │  ├─ ufunclike.pyi
   │     │  │  │  │  │  ├─ ufuncs.pyi
   │     │  │  │  │  │  ├─ ufunc_config.pyi
   │     │  │  │  │  │  └─ warnings_and_errors.pyi
   │     │  │  │  │  ├─ misc
   │     │  │  │  │  │  └─ extended_precision.pyi
   │     │  │  │  │  ├─ mypy.ini
   │     │  │  │  │  ├─ pass
   │     │  │  │  │  │  ├─ arithmetic.py
   │     │  │  │  │  │  ├─ arrayprint.py
   │     │  │  │  │  │  ├─ arrayterator.py
   │     │  │  │  │  │  ├─ array_constructors.py
   │     │  │  │  │  │  ├─ array_like.py
   │     │  │  │  │  │  ├─ bitwise_ops.py
   │     │  │  │  │  │  ├─ comparisons.py
   │     │  │  │  │  │  ├─ dtype.py
   │     │  │  │  │  │  ├─ einsumfunc.py
   │     │  │  │  │  │  ├─ flatiter.py
   │     │  │  │  │  │  ├─ fromnumeric.py
   │     │  │  │  │  │  ├─ index_tricks.py
   │     │  │  │  │  │  ├─ lib_user_array.py
   │     │  │  │  │  │  ├─ lib_utils.py
   │     │  │  │  │  │  ├─ lib_version.py
   │     │  │  │  │  │  ├─ literal.py
   │     │  │  │  │  │  ├─ ma.py
   │     │  │  │  │  │  ├─ mod.py
   │     │  │  │  │  │  ├─ modules.py
   │     │  │  │  │  │  ├─ multiarray.py
   │     │  │  │  │  │  ├─ ndarray_conversion.py
   │     │  │  │  │  │  ├─ ndarray_misc.py
   │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
   │     │  │  │  │  │  ├─ nditer.py
   │     │  │  │  │  │  ├─ numeric.py
   │     │  │  │  │  │  ├─ numerictypes.py
   │     │  │  │  │  │  ├─ random.py
   │     │  │  │  │  │  ├─ recfunctions.py
   │     │  │  │  │  │  ├─ scalars.py
   │     │  │  │  │  │  ├─ shape.py
   │     │  │  │  │  │  ├─ simple.py
   │     │  │  │  │  │  ├─ ufunclike.py
   │     │  │  │  │  │  ├─ ufuncs.py
   │     │  │  │  │  │  ├─ ufunc_config.py
   │     │  │  │  │  │  ├─ warnings_and_errors.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ arithmetic.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │  │  │  │     ├─ arrayterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_constructors.cpython-313.pyc
   │     │  │  │  │  │     ├─ array_like.cpython-313.pyc
   │     │  │  │  │  │     ├─ bitwise_ops.cpython-313.pyc
   │     │  │  │  │  │     ├─ comparisons.cpython-313.pyc
   │     │  │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │  │  │  │     ├─ flatiter.cpython-313.pyc
   │     │  │  │  │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ index_tricks.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_user_array.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_utils.cpython-313.pyc
   │     │  │  │  │  │     ├─ lib_version.cpython-313.pyc
   │     │  │  │  │  │     ├─ literal.cpython-313.pyc
   │     │  │  │  │  │     ├─ ma.cpython-313.pyc
   │     │  │  │  │  │     ├─ mod.cpython-313.pyc
   │     │  │  │  │  │     ├─ modules.cpython-313.pyc
   │     │  │  │  │  │     ├─ multiarray.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_conversion.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_misc.cpython-313.pyc
   │     │  │  │  │  │     ├─ ndarray_shape_manipulation.cpython-313.pyc
   │     │  │  │  │  │     ├─ nditer.cpython-313.pyc
   │     │  │  │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │  │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │  │  │  │     ├─ random.cpython-313.pyc
   │     │  │  │  │  │     ├─ recfunctions.cpython-313.pyc
   │     │  │  │  │  │     ├─ scalars.cpython-313.pyc
   │     │  │  │  │  │     ├─ shape.cpython-313.pyc
   │     │  │  │  │  │     ├─ simple.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunclike.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufuncs.cpython-313.pyc
   │     │  │  │  │  │     ├─ ufunc_config.cpython-313.pyc
   │     │  │  │  │  │     └─ warnings_and_errors.cpython-313.pyc
   │     │  │  │  │  └─ reveal
   │     │  │  │  │     ├─ arithmetic.pyi
   │     │  │  │  │     ├─ arraypad.pyi
   │     │  │  │  │     ├─ arrayprint.pyi
   │     │  │  │  │     ├─ arraysetops.pyi
   │     │  │  │  │     ├─ arrayterator.pyi
   │     │  │  │  │     ├─ array_api_info.pyi
   │     │  │  │  │     ├─ array_constructors.pyi
   │     │  │  │  │     ├─ bitwise_ops.pyi
   │     │  │  │  │     ├─ char.pyi
   │     │  │  │  │     ├─ chararray.pyi
   │     │  │  │  │     ├─ comparisons.pyi
   │     │  │  │  │     ├─ constants.pyi
   │     │  │  │  │     ├─ ctypeslib.pyi
   │     │  │  │  │     ├─ datasource.pyi
   │     │  │  │  │     ├─ dtype.pyi
   │     │  │  │  │     ├─ einsumfunc.pyi
   │     │  │  │  │     ├─ emath.pyi
   │     │  │  │  │     ├─ fft.pyi
   │     │  │  │  │     ├─ flatiter.pyi
   │     │  │  │  │     ├─ fromnumeric.pyi
   │     │  │  │  │     ├─ getlimits.pyi
   │     │  │  │  │     ├─ histograms.pyi
   │     │  │  │  │     ├─ index_tricks.pyi
   │     │  │  │  │     ├─ lib_function_base.pyi
   │     │  │  │  │     ├─ lib_polynomial.pyi
   │     │  │  │  │     ├─ lib_utils.pyi
   │     │  │  │  │     ├─ lib_version.pyi
   │     │  │  │  │     ├─ linalg.pyi
   │     │  │  │  │     ├─ ma.pyi
   │     │  │  │  │     ├─ matrix.pyi
   │     │  │  │  │     ├─ memmap.pyi
   │     │  │  │  │     ├─ mod.pyi
   │     │  │  │  │     ├─ modules.pyi
   │     │  │  │  │     ├─ multiarray.pyi
   │     │  │  │  │     ├─ nbit_base_example.pyi
   │     │  │  │  │     ├─ ndarray_assignability.pyi
   │     │  │  │  │     ├─ ndarray_conversion.pyi
   │     │  │  │  │     ├─ ndarray_misc.pyi
   │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
   │     │  │  │  │     ├─ nditer.pyi
   │     │  │  │  │     ├─ nested_sequence.pyi
   │     │  │  │  │     ├─ npyio.pyi
   │     │  │  │  │     ├─ numeric.pyi
   │     │  │  │  │     ├─ numerictypes.pyi
   │     │  │  │  │     ├─ polynomial_polybase.pyi
   │     │  │  │  │     ├─ polynomial_polyutils.pyi
   │     │  │  │  │     ├─ polynomial_series.pyi
   │     │  │  │  │     ├─ random.pyi
   │     │  │  │  │     ├─ rec.pyi
   │     │  │  │  │     ├─ scalars.pyi
   │     │  │  │  │     ├─ shape.pyi
   │     │  │  │  │     ├─ shape_base.pyi
   │     │  │  │  │     ├─ stride_tricks.pyi
   │     │  │  │  │     ├─ strings.pyi
   │     │  │  │  │     ├─ testing.pyi
   │     │  │  │  │     ├─ twodim_base.pyi
   │     │  │  │  │     ├─ type_check.pyi
   │     │  │  │  │     ├─ ufunclike.pyi
   │     │  │  │  │     ├─ ufuncs.pyi
   │     │  │  │  │     ├─ ufunc_config.pyi
   │     │  │  │  │     └─ warnings_and_errors.pyi
   │     │  │  │  ├─ test_isfile.py
   │     │  │  │  ├─ test_runtime.py
   │     │  │  │  ├─ test_typing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_isfile.cpython-313.pyc
   │     │  │  │     ├─ test_runtime.cpython-313.pyc
   │     │  │  │     ├─ test_typing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ mypy_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ version.py
   │     │  ├─ version.pyi
   │     │  ├─ _array_api_info.py
   │     │  ├─ _array_api_info.pyi
   │     │  ├─ _configtool.py
   │     │  ├─ _configtool.pyi
   │     │  ├─ _core
   │     │  │  ├─ arrayprint.py
   │     │  │  ├─ arrayprint.pyi
   │     │  │  ├─ cversions.py
   │     │  │  ├─ defchararray.py
   │     │  │  ├─ defchararray.pyi
   │     │  │  ├─ einsumfunc.py
   │     │  │  ├─ einsumfunc.pyi
   │     │  │  ├─ fromnumeric.py
   │     │  │  ├─ fromnumeric.pyi
   │     │  │  ├─ function_base.py
   │     │  │  ├─ function_base.pyi
   │     │  │  ├─ getlimits.py
   │     │  │  ├─ getlimits.pyi
   │     │  │  ├─ include
   │     │  │  │  └─ numpy
   │     │  │  │     ├─ arrayobject.h
   │     │  │  │     ├─ arrayscalars.h
   │     │  │  │     ├─ dtype_api.h
   │     │  │  │     ├─ halffloat.h
   │     │  │  │     ├─ ndarrayobject.h
   │     │  │  │     ├─ ndarraytypes.h
   │     │  │  │     ├─ npy_2_compat.h
   │     │  │  │     ├─ npy_2_complexcompat.h
   │     │  │  │     ├─ npy_3kcompat.h
   │     │  │  │     ├─ npy_common.h
   │     │  │  │     ├─ npy_cpu.h
   │     │  │  │     ├─ npy_endian.h
   │     │  │  │     ├─ npy_math.h
   │     │  │  │     ├─ npy_no_deprecated_api.h
   │     │  │  │     ├─ npy_os.h
   │     │  │  │     ├─ numpyconfig.h
   │     │  │  │     ├─ random
   │     │  │  │     │  ├─ bitgen.h
   │     │  │  │     │  ├─ distributions.h
   │     │  │  │     │  ├─ libdivide.h
   │     │  │  │     │  └─ LICENSE.txt
   │     │  │  │     ├─ ufuncobject.h
   │     │  │  │     ├─ utils.h
   │     │  │  │     ├─ _neighborhood_iterator_imp.h
   │     │  │  │     ├─ _numpyconfig.h
   │     │  │  │     ├─ _public_dtype_api_table.h
   │     │  │  │     ├─ __multiarray_api.c
   │     │  │  │     ├─ __multiarray_api.h
   │     │  │  │     ├─ __ufunc_api.c
   │     │  │  │     └─ __ufunc_api.h
   │     │  │  ├─ lib
   │     │  │  │  ├─ npy-pkg-config
   │     │  │  │  │  ├─ mlib.ini
   │     │  │  │  │  └─ npymath.ini
   │     │  │  │  ├─ npymath.lib
   │     │  │  │  └─ pkgconfig
   │     │  │  │     └─ numpy.pc
   │     │  │  ├─ memmap.py
   │     │  │  ├─ memmap.pyi
   │     │  │  ├─ multiarray.py
   │     │  │  ├─ multiarray.pyi
   │     │  │  ├─ numeric.py
   │     │  │  ├─ numeric.pyi
   │     │  │  ├─ numerictypes.py
   │     │  │  ├─ numerictypes.pyi
   │     │  │  ├─ overrides.py
   │     │  │  ├─ overrides.pyi
   │     │  │  ├─ printoptions.py
   │     │  │  ├─ printoptions.pyi
   │     │  │  ├─ records.py
   │     │  │  ├─ records.pyi
   │     │  │  ├─ shape_base.py
   │     │  │  ├─ shape_base.pyi
   │     │  │  ├─ strings.py
   │     │  │  ├─ strings.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ data
   │     │  │  │  │  ├─ astype_copy.pkl
   │     │  │  │  │  ├─ generate_umath_validation_data.cpp
   │     │  │  │  │  ├─ recarray_from_file.fits
   │     │  │  │  │  ├─ umath-validation-set-arccos.csv
   │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
   │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
   │     │  │  │  │  ├─ umath-validation-set-arctan.csv
   │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
   │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
   │     │  │  │  │  ├─ umath-validation-set-cos.csv
   │     │  │  │  │  ├─ umath-validation-set-cosh.csv
   │     │  │  │  │  ├─ umath-validation-set-exp.csv
   │     │  │  │  │  ├─ umath-validation-set-exp2.csv
   │     │  │  │  │  ├─ umath-validation-set-expm1.csv
   │     │  │  │  │  ├─ umath-validation-set-log.csv
   │     │  │  │  │  ├─ umath-validation-set-log10.csv
   │     │  │  │  │  ├─ umath-validation-set-log1p.csv
   │     │  │  │  │  ├─ umath-validation-set-log2.csv
   │     │  │  │  │  ├─ umath-validation-set-README.txt
   │     │  │  │  │  ├─ umath-validation-set-sin.csv
   │     │  │  │  │  ├─ umath-validation-set-sinh.csv
   │     │  │  │  │  ├─ umath-validation-set-tan.csv
   │     │  │  │  │  └─ umath-validation-set-tanh.csv
   │     │  │  │  ├─ examples
   │     │  │  │  │  ├─ cython
   │     │  │  │  │  │  ├─ checks.pyx
   │     │  │  │  │  │  ├─ meson.build
   │     │  │  │  │  │  ├─ setup.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     └─ setup.cpython-313.pyc
   │     │  │  │  │  └─ limited_api
   │     │  │  │  │     ├─ limited_api1.c
   │     │  │  │  │     ├─ limited_api2.pyx
   │     │  │  │  │     ├─ limited_api_latest.c
   │     │  │  │  │     ├─ meson.build
   │     │  │  │  │     ├─ setup.py
   │     │  │  │  │     └─ __pycache__
   │     │  │  │  │        └─ setup.cpython-313.pyc
   │     │  │  │  ├─ test_abc.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_argparse.py
   │     │  │  │  ├─ test_arraymethod.py
   │     │  │  │  ├─ test_arrayobject.py
   │     │  │  │  ├─ test_arrayprint.py
   │     │  │  │  ├─ test_array_api_info.py
   │     │  │  │  ├─ test_array_coercion.py
   │     │  │  │  ├─ test_array_interface.py
   │     │  │  │  ├─ test_casting_floatingpoint_errors.py
   │     │  │  │  ├─ test_casting_unittests.py
   │     │  │  │  ├─ test_conversion_utils.py
   │     │  │  │  ├─ test_cpu_dispatcher.py
   │     │  │  │  ├─ test_cpu_features.py
   │     │  │  │  ├─ test_custom_dtypes.py
   │     │  │  │  ├─ test_cython.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_defchararray.py
   │     │  │  │  ├─ test_deprecations.py
   │     │  │  │  ├─ test_dlpack.py
   │     │  │  │  ├─ test_dtype.py
   │     │  │  │  ├─ test_einsum.py
   │     │  │  │  ├─ test_errstate.py
   │     │  │  │  ├─ test_extint128.py
   │     │  │  │  ├─ test_finfo.py
   │     │  │  │  ├─ test_function_base.py
   │     │  │  │  ├─ test_getlimits.py
   │     │  │  │  ├─ test_half.py
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_indexerrors.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_item_selection.py
   │     │  │  │  ├─ test_limited_api.py
   │     │  │  │  ├─ test_longdouble.py
   │     │  │  │  ├─ test_memmap.py
   │     │  │  │  ├─ test_mem_overlap.py
   │     │  │  │  ├─ test_mem_policy.py
   │     │  │  │  ├─ test_multiarray.py
   │     │  │  │  ├─ test_multiprocessing.py
   │     │  │  │  ├─ test_multithreading.py
   │     │  │  │  ├─ test_nditer.py
   │     │  │  │  ├─ test_nep50_promotions.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_numerictypes.py
   │     │  │  │  ├─ test_overrides.py
   │     │  │  │  ├─ test_print.py
   │     │  │  │  ├─ test_protocols.py
   │     │  │  │  ├─ test_records.py
   │     │  │  │  ├─ test_regression.py
   │     │  │  │  ├─ test_scalarbuffer.py
   │     │  │  │  ├─ test_scalarinherit.py
   │     │  │  │  ├─ test_scalarmath.py
   │     │  │  │  ├─ test_scalarprint.py
   │     │  │  │  ├─ test_scalar_ctors.py
   │     │  │  │  ├─ test_scalar_methods.py
   │     │  │  │  ├─ test_shape_base.py
   │     │  │  │  ├─ test_simd.py
   │     │  │  │  ├─ test_simd_module.py
   │     │  │  │  ├─ test_stringdtype.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_umath.py
   │     │  │  │  ├─ test_umath_accuracy.py
   │     │  │  │  ├─ test_umath_complex.py
   │     │  │  │  ├─ test_unicode.py
   │     │  │  │  ├─ test__exceptions.py
   │     │  │  │  ├─ _locales.py
   │     │  │  │  ├─ _natype.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_abc.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_argparse.cpython-313.pyc
   │     │  │  │     ├─ test_arraymethod.cpython-313.pyc
   │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
   │     │  │  │     ├─ test_arrayprint.cpython-313.pyc
   │     │  │  │     ├─ test_array_api_info.cpython-313.pyc
   │     │  │  │     ├─ test_array_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_array_interface.cpython-313.pyc
   │     │  │  │     ├─ test_casting_floatingpoint_errors.cpython-313.pyc
   │     │  │  │     ├─ test_casting_unittests.cpython-313.pyc
   │     │  │  │     ├─ test_conversion_utils.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_dispatcher.cpython-313.pyc
   │     │  │  │     ├─ test_cpu_features.cpython-313.pyc
   │     │  │  │     ├─ test_custom_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_defchararray.cpython-313.pyc
   │     │  │  │     ├─ test_deprecations.cpython-313.pyc
   │     │  │  │     ├─ test_dlpack.cpython-313.pyc
   │     │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │     ├─ test_einsum.cpython-313.pyc
   │     │  │  │     ├─ test_errstate.cpython-313.pyc
   │     │  │  │     ├─ test_extint128.cpython-313.pyc
   │     │  │  │     ├─ test_finfo.cpython-313.pyc
   │     │  │  │     ├─ test_function_base.cpython-313.pyc
   │     │  │  │     ├─ test_getlimits.cpython-313.pyc
   │     │  │  │     ├─ test_half.cpython-313.pyc
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_indexerrors.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_item_selection.cpython-313.pyc
   │     │  │  │     ├─ test_limited_api.cpython-313.pyc
   │     │  │  │     ├─ test_longdouble.cpython-313.pyc
   │     │  │  │     ├─ test_memmap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_overlap.cpython-313.pyc
   │     │  │  │     ├─ test_mem_policy.cpython-313.pyc
   │     │  │  │     ├─ test_multiarray.cpython-313.pyc
   │     │  │  │     ├─ test_multiprocessing.cpython-313.pyc
   │     │  │  │     ├─ test_multithreading.cpython-313.pyc
   │     │  │  │     ├─ test_nditer.cpython-313.pyc
   │     │  │  │     ├─ test_nep50_promotions.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_numerictypes.cpython-313.pyc
   │     │  │  │     ├─ test_overrides.cpython-313.pyc
   │     │  │  │     ├─ test_print.cpython-313.pyc
   │     │  │  │     ├─ test_protocols.cpython-313.pyc
   │     │  │  │     ├─ test_records.cpython-313.pyc
   │     │  │  │     ├─ test_regression.cpython-313.pyc
   │     │  │  │     ├─ test_scalarbuffer.cpython-313.pyc
   │     │  │  │     ├─ test_scalarinherit.cpython-313.pyc
   │     │  │  │     ├─ test_scalarmath.cpython-313.pyc
   │     │  │  │     ├─ test_scalarprint.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_ctors.cpython-313.pyc
   │     │  │  │     ├─ test_scalar_methods.cpython-313.pyc
   │     │  │  │     ├─ test_shape_base.cpython-313.pyc
   │     │  │  │     ├─ test_simd.cpython-313.pyc
   │     │  │  │     ├─ test_simd_module.cpython-313.pyc
   │     │  │  │     ├─ test_stringdtype.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_umath.cpython-313.pyc
   │     │  │  │     ├─ test_umath_accuracy.cpython-313.pyc
   │     │  │  │     ├─ test_umath_complex.cpython-313.pyc
   │     │  │  │     ├─ test_unicode.cpython-313.pyc
   │     │  │  │     ├─ test__exceptions.cpython-313.pyc
   │     │  │  │     ├─ _locales.cpython-313.pyc
   │     │  │  │     └─ _natype.cpython-313.pyc
   │     │  │  ├─ umath.py
   │     │  │  ├─ umath.pyi
   │     │  │  ├─ _add_newdocs.py
   │     │  │  ├─ _add_newdocs.pyi
   │     │  │  ├─ _add_newdocs_scalars.py
   │     │  │  ├─ _add_newdocs_scalars.pyi
   │     │  │  ├─ _asarray.py
   │     │  │  ├─ _asarray.pyi
   │     │  │  ├─ _dtype.py
   │     │  │  ├─ _dtype.pyi
   │     │  │  ├─ _dtype_ctypes.py
   │     │  │  ├─ _dtype_ctypes.pyi
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _exceptions.pyi
   │     │  │  ├─ _internal.py
   │     │  │  ├─ _internal.pyi
   │     │  │  ├─ _methods.py
   │     │  │  ├─ _methods.pyi
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.lib
   │     │  │  ├─ _multiarray_umath.cp313-win_amd64.pyd
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.lib
   │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _rational_tests.cp313-win_amd64.lib
   │     │  │  ├─ _rational_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.cp313-win_amd64.lib
   │     │  │  ├─ _simd.cp313-win_amd64.pyd
   │     │  │  ├─ _simd.pyi
   │     │  │  ├─ _string_helpers.py
   │     │  │  ├─ _string_helpers.pyi
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.lib
   │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _type_aliases.py
   │     │  │  ├─ _type_aliases.pyi
   │     │  │  ├─ _ufunc_config.py
   │     │  │  ├─ _ufunc_config.pyi
   │     │  │  ├─ _umath_tests.cp313-win_amd64.lib
   │     │  │  ├─ _umath_tests.cp313-win_amd64.pyd
   │     │  │  ├─ _umath_tests.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ arrayprint.cpython-313.pyc
   │     │  │     ├─ cversions.cpython-313.pyc
   │     │  │     ├─ defchararray.cpython-313.pyc
   │     │  │     ├─ einsumfunc.cpython-313.pyc
   │     │  │     ├─ fromnumeric.cpython-313.pyc
   │     │  │     ├─ function_base.cpython-313.pyc
   │     │  │     ├─ getlimits.cpython-313.pyc
   │     │  │     ├─ memmap.cpython-313.pyc
   │     │  │     ├─ multiarray.cpython-313.pyc
   │     │  │     ├─ numeric.cpython-313.pyc
   │     │  │     ├─ numerictypes.cpython-313.pyc
   │     │  │     ├─ overrides.cpython-313.pyc
   │     │  │     ├─ printoptions.cpython-313.pyc
   │     │  │     ├─ records.cpython-313.pyc
   │     │  │     ├─ shape_base.cpython-313.pyc
   │     │  │     ├─ strings.cpython-313.pyc
   │     │  │     ├─ umath.cpython-313.pyc
   │     │  │     ├─ _add_newdocs.cpython-313.pyc
   │     │  │     ├─ _add_newdocs_scalars.cpython-313.pyc
   │     │  │     ├─ _asarray.cpython-313.pyc
   │     │  │     ├─ _dtype.cpython-313.pyc
   │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _internal.cpython-313.pyc
   │     │  │     ├─ _methods.cpython-313.pyc
   │     │  │     ├─ _string_helpers.cpython-313.pyc
   │     │  │     ├─ _type_aliases.cpython-313.pyc
   │     │  │     ├─ _ufunc_config.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _distributor_init.py
   │     │  ├─ _distributor_init.pyi
   │     │  ├─ _expired_attrs_2_0.py
   │     │  ├─ _expired_attrs_2_0.pyi
   │     │  ├─ _globals.py
   │     │  ├─ _globals.pyi
   │     │  ├─ _pyinstaller
   │     │  │  ├─ hook-numpy.py
   │     │  │  ├─ hook-numpy.pyi
   │     │  │  ├─ tests
   │     │  │  │  ├─ pyinstaller-smoke.py
   │     │  │  │  ├─ test_pyinstaller.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ pyinstaller-smoke.cpython-313.pyc
   │     │  │  │     ├─ test_pyinstaller.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ hook-numpy.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _pytesttester.py
   │     │  ├─ _pytesttester.pyi
   │     │  ├─ _typing
   │     │  │  ├─ _add_docstring.py
   │     │  │  ├─ _array_like.py
   │     │  │  ├─ _char_codes.py
   │     │  │  ├─ _dtype_like.py
   │     │  │  ├─ _extended_precision.py
   │     │  │  ├─ _nbit.py
   │     │  │  ├─ _nbit_base.py
   │     │  │  ├─ _nbit_base.pyi
   │     │  │  ├─ _nested_sequence.py
   │     │  │  ├─ _scalars.py
   │     │  │  ├─ _shape.py
   │     │  │  ├─ _ufunc.py
   │     │  │  ├─ _ufunc.pyi
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _add_docstring.cpython-313.pyc
   │     │  │     ├─ _array_like.cpython-313.pyc
   │     │  │     ├─ _char_codes.cpython-313.pyc
   │     │  │     ├─ _dtype_like.cpython-313.pyc
   │     │  │     ├─ _extended_precision.cpython-313.pyc
   │     │  │     ├─ _nbit.cpython-313.pyc
   │     │  │     ├─ _nbit_base.cpython-313.pyc
   │     │  │     ├─ _nested_sequence.cpython-313.pyc
   │     │  │     ├─ _scalars.cpython-313.pyc
   │     │  │     ├─ _shape.cpython-313.pyc
   │     │  │     ├─ _ufunc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _utils
   │     │  │  ├─ _convertions.py
   │     │  │  ├─ _convertions.pyi
   │     │  │  ├─ _inspect.py
   │     │  │  ├─ _inspect.pyi
   │     │  │  ├─ _pep440.py
   │     │  │  ├─ _pep440.pyi
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __init__.pyi
   │     │  │  └─ __pycache__
   │     │  │     ├─ _convertions.cpython-313.pyc
   │     │  │     ├─ _inspect.cpython-313.pyc
   │     │  │     ├─ _pep440.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __config__.py
   │     │  ├─ __config__.pyi
   │     │  ├─ __init__.cython-30.pxd
   │     │  ├─ __init__.pxd
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ dtypes.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ matlib.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _array_api_info.cpython-313.pyc
   │     │     ├─ _configtool.cpython-313.pyc
   │     │     ├─ _distributor_init.cpython-313.pyc
   │     │     ├─ _expired_attrs_2_0.cpython-313.pyc
   │     │     ├─ _globals.cpython-313.pyc
   │     │     ├─ _pytesttester.cpython-313.pyc
   │     │     ├─ __config__.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ numpy-2.4.2.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE.txt
   │     │  │  └─ numpy
   │     │  │     ├─ fft
   │     │  │     │  └─ pocketfft
   │     │  │     │     └─ LICENSE.md
   │     │  │     ├─ linalg
   │     │  │     │  └─ lapack_lite
   │     │  │     │     └─ LICENSE.txt
   │     │  │     ├─ ma
   │     │  │     │  └─ LICENSE
   │     │  │     ├─ random
   │     │  │     │  ├─ LICENSE.md
   │     │  │     │  └─ src
   │     │  │     │     ├─ distributions
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ mt19937
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ pcg64
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ philox
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     ├─ sfc64
   │     │  │     │     │  └─ LICENSE.md
   │     │  │     │     └─ splitmix64
   │     │  │     │        └─ LICENSE.md
   │     │  │     └─ _core
   │     │  │        ├─ include
   │     │  │        │  └─ numpy
   │     │  │        │     └─ libdivide
   │     │  │        │        └─ LICENSE.txt
   │     │  │        └─ src
   │     │  │           ├─ common
   │     │  │           │  └─ pythoncapi-compat
   │     │  │           │     └─ COPYING
   │     │  │           ├─ highway
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ multiarray
   │     │  │           │  └─ dragon4_LICENSE.txt
   │     │  │           ├─ npysort
   │     │  │           │  └─ x86-simd-sort
   │     │  │           │     └─ LICENSE.md
   │     │  │           └─ umath
   │     │  │              └─ svml
   │     │  │                 └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ numpy.libs
   │     │  ├─ libscipy_openblas64_-74a408729250596b0973e69fdd954eea.dll
   │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
   │     ├─ oandapyV20
   │     │  ├─ contrib
   │     │  │  ├─ factories
   │     │  │  │  ├─ history.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ history.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generic.py
   │     │  │  ├─ requests
   │     │  │  │  ├─ baserequest.py
   │     │  │  │  ├─ extensions.py
   │     │  │  │  ├─ limitorder.py
   │     │  │  │  ├─ marketorder.py
   │     │  │  │  ├─ mitorder.py
   │     │  │  │  ├─ onfill.py
   │     │  │  │  ├─ positionclose.py
   │     │  │  │  ├─ stoplossorder.py
   │     │  │  │  ├─ stoporder.py
   │     │  │  │  ├─ takeprofitorder.py
   │     │  │  │  ├─ tradeclose.py
   │     │  │  │  ├─ trailingstoplossorder.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ baserequest.cpython-313.pyc
   │     │  │  │     ├─ extensions.cpython-313.pyc
   │     │  │  │     ├─ limitorder.cpython-313.pyc
   │     │  │  │     ├─ marketorder.cpython-313.pyc
   │     │  │  │     ├─ mitorder.cpython-313.pyc
   │     │  │  │     ├─ onfill.cpython-313.pyc
   │     │  │  │     ├─ positionclose.cpython-313.pyc
   │     │  │  │     ├─ stoplossorder.cpython-313.pyc
   │     │  │  │     ├─ stoporder.cpython-313.pyc
   │     │  │  │     ├─ takeprofitorder.cpython-313.pyc
   │     │  │  │     ├─ tradeclose.cpython-313.pyc
   │     │  │  │     ├─ trailingstoplossorder.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ generic.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ definitions
   │     │  │  ├─ accounts.py
   │     │  │  ├─ instruments.py
   │     │  │  ├─ orders.py
   │     │  │  ├─ pricing.py
   │     │  │  ├─ primitives.py
   │     │  │  ├─ trades.py
   │     │  │  ├─ transactions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accounts.cpython-313.pyc
   │     │  │     ├─ instruments.cpython-313.pyc
   │     │  │     ├─ orders.cpython-313.pyc
   │     │  │     ├─ pricing.cpython-313.pyc
   │     │  │     ├─ primitives.cpython-313.pyc
   │     │  │     ├─ trades.cpython-313.pyc
   │     │  │     ├─ transactions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ endpoints
   │     │  │  ├─ accounts.py
   │     │  │  ├─ apirequest.py
   │     │  │  ├─ decorators.py
   │     │  │  ├─ forexlabs.py
   │     │  │  ├─ instruments.py
   │     │  │  ├─ orders.py
   │     │  │  ├─ positions.py
   │     │  │  ├─ pricing.py
   │     │  │  ├─ responses
   │     │  │  │  ├─ accounts.py
   │     │  │  │  ├─ forexlabs.py
   │     │  │  │  ├─ instruments.py
   │     │  │  │  ├─ orders.py
   │     │  │  │  ├─ positions.py
   │     │  │  │  ├─ pricing.py
   │     │  │  │  ├─ trades.py
   │     │  │  │  ├─ transactions.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accounts.cpython-313.pyc
   │     │  │  │     ├─ forexlabs.cpython-313.pyc
   │     │  │  │     ├─ instruments.cpython-313.pyc
   │     │  │  │     ├─ orders.cpython-313.pyc
   │     │  │  │     ├─ positions.cpython-313.pyc
   │     │  │  │     ├─ pricing.cpython-313.pyc
   │     │  │  │     ├─ trades.cpython-313.pyc
   │     │  │  │     ├─ transactions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ trades.py
   │     │  │  ├─ transactions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accounts.cpython-313.pyc
   │     │  │     ├─ apirequest.cpython-313.pyc
   │     │  │     ├─ decorators.cpython-313.pyc
   │     │  │     ├─ forexlabs.cpython-313.pyc
   │     │  │     ├─ instruments.cpython-313.pyc
   │     │  │     ├─ orders.cpython-313.pyc
   │     │  │     ├─ positions.cpython-313.pyc
   │     │  │     ├─ pricing.cpython-313.pyc
   │     │  │     ├─ trades.cpython-313.pyc
   │     │  │     ├─ transactions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ oandapyV20.py
   │     │  ├─ types
   │     │  │  ├─ types.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ oandapyV20.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ oandapyv20-0.7.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ packaging
   │     │  ├─ licenses
   │     │  │  ├─ _spdx.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _spdx.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ markers.py
   │     │  ├─ metadata.py
   │     │  ├─ py.typed
   │     │  ├─ pylock.py
   │     │  ├─ requirements.py
   │     │  ├─ specifiers.py
   │     │  ├─ tags.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _elffile.py
   │     │  ├─ _manylinux.py
   │     │  ├─ _musllinux.py
   │     │  ├─ _parser.py
   │     │  ├─ _structures.py
   │     │  ├─ _tokenizer.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ markers.cpython-313.pyc
   │     │     ├─ metadata.cpython-313.pyc
   │     │     ├─ pylock.cpython-313.pyc
   │     │     ├─ requirements.cpython-313.pyc
   │     │     ├─ specifiers.cpython-313.pyc
   │     │     ├─ tags.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ _elffile.cpython-313.pyc
   │     │     ├─ _manylinux.cpython-313.pyc
   │     │     ├─ _musllinux.cpython-313.pyc
   │     │     ├─ _parser.cpython-313.pyc
   │     │     ├─ _structures.cpython-313.pyc
   │     │     ├─ _tokenizer.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ packaging-26.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  ├─ LICENSE.APACHE
   │     │  │  └─ LICENSE.BSD
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pandas
   │     │  ├─ api
   │     │  │  ├─ executors
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ extensions
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals.py
   │     │  │  ├─ types
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ typing
   │     │  │  │  ├─ aliases.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ aliases.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ internals.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ arrays
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ compat
   │     │  │  ├─ numpy
   │     │  │  │  ├─ function.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ function.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle_compat.py
   │     │  │  ├─ pyarrow.py
   │     │  │  ├─ _constants.py
   │     │  │  ├─ _optional.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pickle_compat.cpython-313.pyc
   │     │  │     ├─ pyarrow.cpython-313.pyc
   │     │  │     ├─ _constants.cpython-313.pyc
   │     │  │     ├─ _optional.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conftest.py
   │     │  ├─ core
   │     │  │  ├─ accessor.py
   │     │  │  ├─ algorithms.py
   │     │  │  ├─ api.py
   │     │  │  ├─ apply.py
   │     │  │  ├─ arraylike.py
   │     │  │  ├─ arrays
   │     │  │  │  ├─ arrow
   │     │  │  │  │  ├─ accessors.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ extension_types.py
   │     │  │  │  │  ├─ _arrow_utils.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ extension_types.cpython-313.pyc
   │     │  │  │  │     ├─ _arrow_utils.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ boolean.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ floating.py
   │     │  │  │  ├─ integer.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ masked.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ numpy_.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ accessor.py
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ scipy_sparse.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ scipy_sparse.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_.py
   │     │  │  │  ├─ string_arrow.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ _arrow_string_mixins.py
   │     │  │  │  ├─ _mixins.py
   │     │  │  │  ├─ _ranges.py
   │     │  │  │  ├─ _utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ boolean.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ floating.cpython-313.pyc
   │     │  │  │     ├─ integer.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ masked.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ numpy_.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ string_.cpython-313.pyc
   │     │  │  │     ├─ string_arrow.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ _arrow_string_mixins.cpython-313.pyc
   │     │  │  │     ├─ _mixins.cpython-313.pyc
   │     │  │  │     ├─ _ranges.cpython-313.pyc
   │     │  │  │     ├─ _utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ array_algos
   │     │  │  │  ├─ datetimelike_accumulations.py
   │     │  │  │  ├─ masked_accumulations.py
   │     │  │  │  ├─ masked_reductions.py
   │     │  │  │  ├─ putmask.py
   │     │  │  │  ├─ quantile.py
   │     │  │  │  ├─ replace.py
   │     │  │  │  ├─ take.py
   │     │  │  │  ├─ transforms.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimelike_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_accumulations.cpython-313.pyc
   │     │  │  │     ├─ masked_reductions.cpython-313.pyc
   │     │  │  │     ├─ putmask.cpython-313.pyc
   │     │  │  │     ├─ quantile.cpython-313.pyc
   │     │  │  │     ├─ replace.cpython-313.pyc
   │     │  │  │     ├─ take.cpython-313.pyc
   │     │  │  │     ├─ transforms.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base.py
   │     │  │  ├─ col.py
   │     │  │  ├─ common.py
   │     │  │  ├─ computation
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ engines.py
   │     │  │  │  ├─ eval.py
   │     │  │  │  ├─ expr.py
   │     │  │  │  ├─ expressions.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ parsing.py
   │     │  │  │  ├─ pytables.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ engines.cpython-313.pyc
   │     │  │  │     ├─ eval.cpython-313.pyc
   │     │  │  │     ├─ expr.cpython-313.pyc
   │     │  │  │     ├─ expressions.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     ├─ parsing.cpython-313.pyc
   │     │  │  │     ├─ pytables.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config_init.py
   │     │  │  ├─ construction.py
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ astype.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ cast.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ dtypes.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ inference.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ astype.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ cast.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ dtypes.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ inference.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ flags.py
   │     │  │  ├─ frame.py
   │     │  │  ├─ generic.py
   │     │  │  ├─ groupby
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ categorical.py
   │     │  │  │  ├─ generic.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ grouper.py
   │     │  │  │  ├─ indexing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ categorical.cpython-313.pyc
   │     │  │  │     ├─ generic.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ grouper.cpython-313.pyc
   │     │  │  │     ├─ indexing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexers
   │     │  │  │  ├─ objects.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ objects.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ accessors.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ category.py
   │     │  │  │  ├─ datetimelike.py
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ extension.py
   │     │  │  │  ├─ frozen.py
   │     │  │  │  ├─ interval.py
   │     │  │  │  ├─ multi.py
   │     │  │  │  ├─ period.py
   │     │  │  │  ├─ range.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessors.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ category.cpython-313.pyc
   │     │  │  │     ├─ datetimelike.cpython-313.pyc
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ extension.cpython-313.pyc
   │     │  │  │     ├─ frozen.cpython-313.pyc
   │     │  │  │     ├─ interval.cpython-313.pyc
   │     │  │  │     ├─ multi.cpython-313.pyc
   │     │  │  │     ├─ period.cpython-313.pyc
   │     │  │  │     ├─ range.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing.py
   │     │  │  ├─ interchange
   │     │  │  │  ├─ buffer.py
   │     │  │  │  ├─ column.py
   │     │  │  │  ├─ dataframe.py
   │     │  │  │  ├─ dataframe_protocol.py
   │     │  │  │  ├─ from_dataframe.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ buffer.cpython-313.pyc
   │     │  │  │     ├─ column.cpython-313.pyc
   │     │  │  │     ├─ dataframe.cpython-313.pyc
   │     │  │  │     ├─ dataframe_protocol.cpython-313.pyc
   │     │  │  │     ├─ from_dataframe.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ blocks.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ construction.py
   │     │  │  │  ├─ managers.py
   │     │  │  │  ├─ ops.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ blocks.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ construction.cpython-313.pyc
   │     │  │  │     ├─ managers.cpython-313.pyc
   │     │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ methods
   │     │  │  │  ├─ describe.py
   │     │  │  │  ├─ selectn.py
   │     │  │  │  ├─ to_dict.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ describe.cpython-313.pyc
   │     │  │  │     ├─ selectn.cpython-313.pyc
   │     │  │  │     ├─ to_dict.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ missing.py
   │     │  │  ├─ nanops.py
   │     │  │  ├─ ops
   │     │  │  │  ├─ array_ops.py
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ dispatch.py
   │     │  │  │  ├─ docstrings.py
   │     │  │  │  ├─ invalid.py
   │     │  │  │  ├─ mask_ops.py
   │     │  │  │  ├─ missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ array_ops.cpython-313.pyc
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ dispatch.cpython-313.pyc
   │     │  │  │     ├─ docstrings.cpython-313.pyc
   │     │  │  │     ├─ invalid.cpython-313.pyc
   │     │  │  │     ├─ mask_ops.cpython-313.pyc
   │     │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample.py
   │     │  │  ├─ reshape
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ concat.py
   │     │  │  │  ├─ encoding.py
   │     │  │  │  ├─ melt.py
   │     │  │  │  ├─ merge.py
   │     │  │  │  ├─ pivot.py
   │     │  │  │  ├─ reshape.py
   │     │  │  │  ├─ tile.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ concat.cpython-313.pyc
   │     │  │  │     ├─ encoding.cpython-313.pyc
   │     │  │  │     ├─ melt.cpython-313.pyc
   │     │  │  │     ├─ merge.cpython-313.pyc
   │     │  │  │     ├─ pivot.cpython-313.pyc
   │     │  │  │     ├─ reshape.cpython-313.pyc
   │     │  │  │     ├─ tile.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ roperator.py
   │     │  │  ├─ sample.py
   │     │  │  ├─ series.py
   │     │  │  ├─ shared_docs.py
   │     │  │  ├─ sorting.py
   │     │  │  ├─ sparse
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ accessor.py
   │     │  │  │  ├─ object_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ accessor.cpython-313.pyc
   │     │  │  │     ├─ object_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tools
   │     │  │  │  ├─ datetimes.py
   │     │  │  │  ├─ numeric.py
   │     │  │  │  ├─ timedeltas.py
   │     │  │  │  ├─ times.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ datetimes.cpython-313.pyc
   │     │  │  │     ├─ numeric.cpython-313.pyc
   │     │  │  │     ├─ timedeltas.cpython-313.pyc
   │     │  │  │     ├─ times.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ hashing.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ hashing.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ doc.py
   │     │  │  │  ├─ ewm.py
   │     │  │  │  ├─ expanding.py
   │     │  │  │  ├─ numba_.py
   │     │  │  │  ├─ online.py
   │     │  │  │  ├─ rolling.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ doc.cpython-313.pyc
   │     │  │  │     ├─ ewm.cpython-313.pyc
   │     │  │  │     ├─ expanding.cpython-313.pyc
   │     │  │  │     ├─ numba_.cpython-313.pyc
   │     │  │  │     ├─ online.cpython-313.pyc
   │     │  │  │     ├─ rolling.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _numba
   │     │  │  │  ├─ executor.py
   │     │  │  │  ├─ extensions.py
   │     │  │  │  ├─ kernels
   │     │  │  │  │  ├─ mean_.py
   │     │  │  │  │  ├─ min_max_.py
   │     │  │  │  │  ├─ shared.py
   │     │  │  │  │  ├─ sum_.py
   │     │  │  │  │  ├─ var_.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ mean_.cpython-313.pyc
   │     │  │  │  │     ├─ min_max_.cpython-313.pyc
   │     │  │  │  │     ├─ shared.cpython-313.pyc
   │     │  │  │  │     ├─ sum_.cpython-313.pyc
   │     │  │  │  │     ├─ var_.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ executor.cpython-313.pyc
   │     │  │  │     ├─ extensions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accessor.cpython-313.pyc
   │     │  │     ├─ algorithms.cpython-313.pyc
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ apply.cpython-313.pyc
   │     │  │     ├─ arraylike.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ col.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ config_init.cpython-313.pyc
   │     │  │     ├─ construction.cpython-313.pyc
   │     │  │     ├─ flags.cpython-313.pyc
   │     │  │     ├─ frame.cpython-313.pyc
   │     │  │     ├─ generic.cpython-313.pyc
   │     │  │     ├─ indexing.cpython-313.pyc
   │     │  │     ├─ missing.cpython-313.pyc
   │     │  │     ├─ nanops.cpython-313.pyc
   │     │  │     ├─ resample.cpython-313.pyc
   │     │  │     ├─ roperator.cpython-313.pyc
   │     │  │     ├─ sample.cpython-313.pyc
   │     │  │     ├─ series.cpython-313.pyc
   │     │  │     ├─ shared_docs.cpython-313.pyc
   │     │  │     ├─ sorting.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ errors
   │     │  │  ├─ cow.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cow.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ api.py
   │     │  │  ├─ clipboard
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ clipboards.py
   │     │  │  ├─ common.py
   │     │  │  ├─ excel
   │     │  │  │  ├─ _base.py
   │     │  │  │  ├─ _calamine.py
   │     │  │  │  ├─ _odfreader.py
   │     │  │  │  ├─ _odswriter.py
   │     │  │  │  ├─ _openpyxl.py
   │     │  │  │  ├─ _pyxlsb.py
   │     │  │  │  ├─ _util.py
   │     │  │  │  ├─ _xlrd.py
   │     │  │  │  ├─ _xlsxwriter.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _base.cpython-313.pyc
   │     │  │  │     ├─ _calamine.cpython-313.pyc
   │     │  │  │     ├─ _odfreader.cpython-313.pyc
   │     │  │  │     ├─ _odswriter.cpython-313.pyc
   │     │  │  │     ├─ _openpyxl.cpython-313.pyc
   │     │  │  │     ├─ _pyxlsb.cpython-313.pyc
   │     │  │  │     ├─ _util.cpython-313.pyc
   │     │  │  │     ├─ _xlrd.cpython-313.pyc
   │     │  │  │     ├─ _xlsxwriter.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ feather_format.py
   │     │  │  ├─ formats
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ css.py
   │     │  │  │  ├─ csvs.py
   │     │  │  │  ├─ excel.py
   │     │  │  │  ├─ format.py
   │     │  │  │  ├─ html.py
   │     │  │  │  ├─ info.py
   │     │  │  │  ├─ printing.py
   │     │  │  │  ├─ string.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ style_render.py
   │     │  │  │  ├─ templates
   │     │  │  │  │  ├─ html.tpl
   │     │  │  │  │  ├─ html_style.tpl
   │     │  │  │  │  ├─ html_table.tpl
   │     │  │  │  │  ├─ latex.tpl
   │     │  │  │  │  ├─ latex_longtable.tpl
   │     │  │  │  │  ├─ latex_table.tpl
   │     │  │  │  │  ├─ string.tpl
   │     │  │  │  │  └─ typst.tpl
   │     │  │  │  ├─ xml.py
   │     │  │  │  ├─ _color_data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ css.cpython-313.pyc
   │     │  │  │     ├─ csvs.cpython-313.pyc
   │     │  │  │     ├─ excel.cpython-313.pyc
   │     │  │  │     ├─ format.cpython-313.pyc
   │     │  │  │     ├─ html.cpython-313.pyc
   │     │  │  │     ├─ info.cpython-313.pyc
   │     │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │     ├─ string.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ style_render.cpython-313.pyc
   │     │  │  │     ├─ xml.cpython-313.pyc
   │     │  │  │     ├─ _color_data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ html.py
   │     │  │  ├─ iceberg.py
   │     │  │  ├─ json
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ _normalize.py
   │     │  │  │  ├─ _table_schema.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     ├─ _normalize.cpython-313.pyc
   │     │  │  │     ├─ _table_schema.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ orc.py
   │     │  │  ├─ parquet.py
   │     │  │  ├─ parsers
   │     │  │  │  ├─ arrow_parser_wrapper.py
   │     │  │  │  ├─ base_parser.py
   │     │  │  │  ├─ c_parser_wrapper.py
   │     │  │  │  ├─ python_parser.py
   │     │  │  │  ├─ readers.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ arrow_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ base_parser.cpython-313.pyc
   │     │  │  │     ├─ c_parser_wrapper.cpython-313.pyc
   │     │  │  │     ├─ python_parser.cpython-313.pyc
   │     │  │  │     ├─ readers.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pickle.py
   │     │  │  ├─ pytables.py
   │     │  │  ├─ sas
   │     │  │  │  ├─ sas7bdat.py
   │     │  │  │  ├─ sasreader.py
   │     │  │  │  ├─ sas_constants.py
   │     │  │  │  ├─ sas_xport.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ sas7bdat.cpython-313.pyc
   │     │  │  │     ├─ sasreader.cpython-313.pyc
   │     │  │  │     ├─ sas_constants.cpython-313.pyc
   │     │  │  │     ├─ sas_xport.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ spss.py
   │     │  │  ├─ sql.py
   │     │  │  ├─ stata.py
   │     │  │  ├─ xml.py
   │     │  │  ├─ _util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ clipboards.cpython-313.pyc
   │     │  │     ├─ common.cpython-313.pyc
   │     │  │     ├─ feather_format.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ iceberg.cpython-313.pyc
   │     │  │     ├─ orc.cpython-313.pyc
   │     │  │     ├─ parquet.cpython-313.pyc
   │     │  │     ├─ pickle.cpython-313.pyc
   │     │  │     ├─ pytables.cpython-313.pyc
   │     │  │     ├─ spss.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     ├─ stata.cpython-313.pyc
   │     │  │     ├─ xml.cpython-313.pyc
   │     │  │     ├─ _util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ plotting
   │     │  │  ├─ _core.py
   │     │  │  ├─ _matplotlib
   │     │  │  │  ├─ boxplot.py
   │     │  │  │  ├─ converter.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ groupby.py
   │     │  │  │  ├─ hist.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ timeseries.py
   │     │  │  │  ├─ tools.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ boxplot.cpython-313.pyc
   │     │  │  │     ├─ converter.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │     ├─ hist.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ timeseries.cpython-313.pyc
   │     │  │  │     ├─ tools.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _misc.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _core.cpython-313.pyc
   │     │  │     ├─ _misc.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ pyproject.toml
   │     │  ├─ testing.py
   │     │  ├─ tests
   │     │  │  ├─ api
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ apply
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_frame_apply.py
   │     │  │  │  ├─ test_frame_apply_relabeling.py
   │     │  │  │  ├─ test_frame_transform.py
   │     │  │  │  ├─ test_invalid_arg.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_series_apply.py
   │     │  │  │  ├─ test_series_apply_relabeling.py
   │     │  │  │  ├─ test_series_transform.py
   │     │  │  │  ├─ test_str.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply.cpython-313.pyc
   │     │  │  │     ├─ test_frame_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_frame_transform.cpython-313.pyc
   │     │  │  │     ├─ test_invalid_arg.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply.cpython-313.pyc
   │     │  │  │     ├─ test_series_apply_relabeling.cpython-313.pyc
   │     │  │  │     ├─ test_series_transform.cpython-313.pyc
   │     │  │  │     ├─ test_str.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arithmetic
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_array_ops.py
   │     │  │  │  ├─ test_bool.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_datetime64.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_numeric.py
   │     │  │  │  ├─ test_object.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ test_timedelta64.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_array_ops.cpython-313.pyc
   │     │  │  │     ├─ test_bool.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_datetime64.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_object.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta64.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ arrays
   │     │  │  │  ├─ boolean
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_logical.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_logical.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_algos.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_api.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_operators.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_warnings.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_algos.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_operators.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_warnings.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ floating
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ integer
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparison.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_construction.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_reduction.py
   │     │  │  │  │  ├─ test_repr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparison.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_construction.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
   │     │  │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_pyarrow.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_pyarrow.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_function.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_function.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ masked_shared.py
   │     │  │  │  ├─ numpy_
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_numpy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arrow_compat.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arrow_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sparse
   │     │  │  │  │  ├─ test_accessor.py
   │     │  │  │  │  ├─ test_arithmetics.py
   │     │  │  │  │  ├─ test_array.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_combine_concat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_dtype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_libsparse.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ test_unary.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_arithmetics.cpython-313.pyc
   │     │  │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_libsparse.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string_
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_string.py
   │     │  │  │  │  ├─ test_string_arrow.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_string_arrow.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_datetimes.py
   │     │  │  │  ├─ test_ndarray_backed.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_cumulative.py
   │     │  │  │  │  ├─ test_reductions.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ masked_shared.cpython-313.pyc
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │     ├─ test_ndarray_backed.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ base
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fillna.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_transpose.py
   │     │  │  │  ├─ test_unique.py
   │     │  │  │  ├─ test_value_counts.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ computation
   │     │  │  │  ├─ test_compat.py
   │     │  │  │  ├─ test_eval.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │     ├─ test_eval.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ config
   │     │  │  │  ├─ test_config.py
   │     │  │  │  ├─ test_localization.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_config.cpython-313.pyc
   │     │  │  │     ├─ test_localization.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ construction
   │     │  │  │  ├─ test_extract_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_extract_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ copy_view
   │     │  │  │  ├─ index
   │     │  │  │  │  ├─ test_datetimeindex.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_intervalindex.py
   │     │  │  │  │  ├─ test_periodindex.py
   │     │  │  │  │  ├─ test_timedeltaindex.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetimeindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_intervalindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_periodindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedeltaindex.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_array.py
   │     │  │  │  ├─ test_astype.py
   │     │  │  │  ├─ test_chained_assignment_deprecation.py
   │     │  │  │  ├─ test_clip.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_copy_deprecation.py
   │     │  │  │  ├─ test_core_functionalities.py
   │     │  │  │  ├─ test_functions.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ test_interp_fillna.py
   │     │  │  │  ├─ test_methods.py
   │     │  │  │  ├─ test_replace.py
   │     │  │  │  ├─ test_setitem.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_array.cpython-313.pyc
   │     │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │     ├─ test_chained_assignment_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_copy_deprecation.cpython-313.pyc
   │     │  │  │     ├─ test_core_functionalities.cpython-313.pyc
   │     │  │  │     ├─ test_functions.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     ├─ test_interp_fillna.cpython-313.pyc
   │     │  │  │     ├─ test_methods.cpython-313.pyc
   │     │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ dtypes
   │     │  │  │  ├─ cast
   │     │  │  │  │  ├─ test_box_unbox.py
   │     │  │  │  │  ├─ test_can_hold_element.py
   │     │  │  │  │  ├─ test_construct_from_scalar.py
   │     │  │  │  │  ├─ test_construct_ndarray.py
   │     │  │  │  │  ├─ test_construct_object_arr.py
   │     │  │  │  │  ├─ test_dict_compat.py
   │     │  │  │  │  ├─ test_downcast.py
   │     │  │  │  │  ├─ test_find_common_type.py
   │     │  │  │  │  ├─ test_infer_datetimelike.py
   │     │  │  │  │  ├─ test_infer_dtype.py
   │     │  │  │  │  ├─ test_promote.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_box_unbox.cpython-313.pyc
   │     │  │  │  │     ├─ test_can_hold_element.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_from_scalar.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_ndarray.cpython-313.pyc
   │     │  │  │  │     ├─ test_construct_object_arr.cpython-313.pyc
   │     │  │  │  │     ├─ test_dict_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_downcast.cpython-313.pyc
   │     │  │  │  │     ├─ test_find_common_type.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_datetimelike.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_promote.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_concat.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_inference.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ extension
   │     │  │  │  ├─ array_with_attr
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_array_with_attr.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_array_with_attr.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ base
   │     │  │  │  │  ├─ accumulate.py
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ casting.py
   │     │  │  │  │  ├─ constructors.py
   │     │  │  │  │  ├─ dim2.py
   │     │  │  │  │  ├─ dtype.py
   │     │  │  │  │  ├─ getitem.py
   │     │  │  │  │  ├─ groupby.py
   │     │  │  │  │  ├─ index.py
   │     │  │  │  │  ├─ interface.py
   │     │  │  │  │  ├─ io.py
   │     │  │  │  │  ├─ methods.py
   │     │  │  │  │  ├─ missing.py
   │     │  │  │  │  ├─ ops.py
   │     │  │  │  │  ├─ printing.py
   │     │  │  │  │  ├─ reduce.py
   │     │  │  │  │  ├─ reshaping.py
   │     │  │  │  │  ├─ setitem.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ accumulate.cpython-313.pyc
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ casting.cpython-313.pyc
   │     │  │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │  │     ├─ dim2.cpython-313.pyc
   │     │  │  │  │     ├─ dtype.cpython-313.pyc
   │     │  │  │  │     ├─ getitem.cpython-313.pyc
   │     │  │  │  │     ├─ groupby.cpython-313.pyc
   │     │  │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │  │     ├─ interface.cpython-313.pyc
   │     │  │  │  │     ├─ io.cpython-313.pyc
   │     │  │  │  │     ├─ methods.cpython-313.pyc
   │     │  │  │  │     ├─ missing.cpython-313.pyc
   │     │  │  │  │     ├─ ops.cpython-313.pyc
   │     │  │  │  │     ├─ printing.cpython-313.pyc
   │     │  │  │  │     ├─ reduce.cpython-313.pyc
   │     │  │  │  │     ├─ reshaping.cpython-313.pyc
   │     │  │  │  │     ├─ setitem.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ date
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ decimal
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_json.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_json.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ list
   │     │  │  │  │  ├─ array.py
   │     │  │  │  │  ├─ test_list.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ array.cpython-313.pyc
   │     │  │  │  │     ├─ test_list.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_arrow.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_extension.py
   │     │  │  │  ├─ test_interval.py
   │     │  │  │  ├─ test_masked.py
   │     │  │  │  ├─ test_numpy.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_sparse.py
   │     │  │  │  ├─ test_string.py
   │     │  │  │  ├─ uuid
   │     │  │  │  │  ├─ test_uuid.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_uuid.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_arrow.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_extension.cpython-313.pyc
   │     │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │     ├─ test_masked.cpython-313.pyc
   │     │  │  │     ├─ test_numpy.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_sparse.cpython-313.pyc
   │     │  │  │     ├─ test_string.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ frame
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ constructors
   │     │  │  │  │  ├─ test_from_dict.py
   │     │  │  │  │  ├─ test_from_records.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_from_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_from_records.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_coercion.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_get_value.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_assign.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_at_time.py
   │     │  │  │  │  ├─ test_between_time.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_dot.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_droplevel.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_filter.py
   │     │  │  │  │  ├─ test_first_valid_index.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isetitem.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_is_homogeneous_dtype.py
   │     │  │  │  │  ├─ test_iterrows.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pipe.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_reorder_levels.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_select_dtypes.py
   │     │  │  │  │  ├─ test_set_axis.py
   │     │  │  │  │  ├─ test_set_index.py
   │     │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_swaplevel.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_dict_of_blocks.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  ├─ test_to_records.py
   │     │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  ├─ test_transpose.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_assign.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_at_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_between_time.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_dot.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_droplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_filter.cpython-313.pyc
   │     │  │  │  │     ├─ test_first_valid_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isetitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_homogeneous_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_iterrows.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_reorder_levels.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_select_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_swaplevel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict_of_blocks.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_records.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_transpose.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_alter_axes.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_arrow_interface.py
   │     │  │  │  ├─ test_block_internals.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_nonunique_indexes.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_query_eval.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_repr.py
   │     │  │  │  ├─ test_stack_unstack.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_alter_axes.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_arrow_interface.cpython-313.pyc
   │     │  │  │     ├─ test_block_internals.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_nonunique_indexes.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_query_eval.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_repr.cpython-313.pyc
   │     │  │  │     ├─ test_stack_unstack.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ generic
   │     │  │  │  ├─ test_duplicate_labels.py
   │     │  │  │  ├─ test_finalize.py
   │     │  │  │  ├─ test_frame.py
   │     │  │  │  ├─ test_generic.py
   │     │  │  │  ├─ test_label_or_level_utils.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_to_xarray.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_duplicate_labels.cpython-313.pyc
   │     │  │  │     ├─ test_finalize.cpython-313.pyc
   │     │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │     ├─ test_generic.cpython-313.pyc
   │     │  │  │     ├─ test_label_or_level_utils.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_to_xarray.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ groupby
   │     │  │  │  ├─ aggregate
   │     │  │  │  │  ├─ test_aggregate.py
   │     │  │  │  │  ├─ test_cython.py
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_other.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_aggregate.cpython-313.pyc
   │     │  │  │  │     ├─ test_cython.cpython-313.pyc
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_other.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_groupby_shift_diff.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_kurt.py
   │     │  │  │  │  ├─ test_nlargest_nsmallest.py
   │     │  │  │  │  ├─ test_nth.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_sample.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_skew.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_groupby_shift_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_kurt.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest_nsmallest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nth.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_sample.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_skew.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_all_methods.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_bin_groupby.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_counting.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_filters.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_groupby_dropna.py
   │     │  │  │  ├─ test_groupby_subclass.py
   │     │  │  │  ├─ test_grouping.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_as_string.py
   │     │  │  │  ├─ test_libgroupby.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_numeric_only.py
   │     │  │  │  ├─ test_pipe.py
   │     │  │  │  ├─ test_raises.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_timegrouper.py
   │     │  │  │  ├─ transform
   │     │  │  │  │  ├─ test_numba.py
   │     │  │  │  │  ├─ test_transform.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │  │     ├─ test_transform.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_all_methods.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_bin_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_counting.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_filters.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_dropna.cpython-313.pyc
   │     │  │  │     ├─ test_groupby_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_grouping.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_as_string.cpython-313.pyc
   │     │  │  │     ├─ test_libgroupby.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_numeric_only.cpython-313.pyc
   │     │  │  │     ├─ test_pipe.cpython-313.pyc
   │     │  │  │     ├─ test_raises.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_timegrouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexes
   │     │  │  │  ├─ base_class
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ categorical
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_category.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_category.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ datetimelike_
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_nat.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ datetimes
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_isocalendar.py
   │     │  │  │  │  │  ├─ test_map.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_snap.py
   │     │  │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_period.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_to_series.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_isocalendar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_snap.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_period.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_series.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_date_range.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_iter.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_npfuncs.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_date_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_iter.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_range.py
   │     │  │  │  │  ├─ test_interval_tree.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_tree.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multi
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_analytics.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_conversion.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_duplicates.py
   │     │  │  │  │  ├─ test_equivalence.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_get_level_values.py
   │     │  │  │  │  ├─ test_get_set.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_integrity.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_lexsort.py
   │     │  │  │  │  ├─ test_missing.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_names.py
   │     │  │  │  │  ├─ test_partial_indexing.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reshape.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_sorting.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_util.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_analytics.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_equivalence.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_level_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_set.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_integrity.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_lexsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_names.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reshape.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ numeric
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_numeric.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_numeric.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ object
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_is_full.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ test_to_timestamp.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_is_full.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_timestamp.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_monotonic.py
   │     │  │  │  │  ├─ test_partial_slicing.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ test_period_range.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_resolution.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_tools.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial_slicing.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     ├─ test_period_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_tools.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ ranges
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_range.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_range.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ string
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_any_index.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_engines.py
   │     │  │  │  ├─ test_frozen.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_index_new.py
   │     │  │  │  ├─ test_numpy_compat.py
   │     │  │  │  ├─ test_old_base.py
   │     │  │  │  ├─ test_setops.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ timedeltas
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  │  ├─ test_factorize.py
   │     │  │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  │  ├─ test_insert.py
   │     │  │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  │  ├─ test_shift.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_factorize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_insert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_shift.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_delete.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_freq_attr.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_ops.py
   │     │  │  │  │  ├─ test_pickle.py
   │     │  │  │  │  ├─ test_scalar_compat.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_setops.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ test_timedelta_range.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_delete.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_attr.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_ops.cpython-313.pyc
   │     │  │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │  │     ├─ test_scalar_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta_range.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_any_index.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_engines.cpython-313.pyc
   │     │  │  │     ├─ test_frozen.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_index_new.cpython-313.pyc
   │     │  │  │     ├─ test_numpy_compat.cpython-313.pyc
   │     │  │  │     ├─ test_old_base.cpython-313.pyc
   │     │  │  │     ├─ test_setops.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ indexing
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_interval_new.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval_new.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ multiindex
   │     │  │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_iloc.py
   │     │  │  │  │  ├─ test_indexing_slow.py
   │     │  │  │  │  ├─ test_loc.py
   │     │  │  │  │  ├─ test_multiindex.py
   │     │  │  │  │  ├─ test_partial.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_slice.py
   │     │  │  │  │  ├─ test_sorted.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing_slow.cpython-313.pyc
   │     │  │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │  │     ├─ test_multiindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_slice.cpython-313.pyc
   │     │  │  │  │     ├─ test_sorted.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_at.py
   │     │  │  │  ├─ test_categorical.py
   │     │  │  │  ├─ test_chaining_and_caching.py
   │     │  │  │  ├─ test_check_indexer.py
   │     │  │  │  ├─ test_coercion.py
   │     │  │  │  ├─ test_datetime.py
   │     │  │  │  ├─ test_floats.py
   │     │  │  │  ├─ test_iat.py
   │     │  │  │  ├─ test_iloc.py
   │     │  │  │  ├─ test_indexers.py
   │     │  │  │  ├─ test_indexing.py
   │     │  │  │  ├─ test_loc.py
   │     │  │  │  ├─ test_na_indexing.py
   │     │  │  │  ├─ test_partial.py
   │     │  │  │  ├─ test_scalar.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ test_at.cpython-313.pyc
   │     │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │     ├─ test_chaining_and_caching.cpython-313.pyc
   │     │  │  │     ├─ test_check_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_coercion.cpython-313.pyc
   │     │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_floats.cpython-313.pyc
   │     │  │  │     ├─ test_iat.cpython-313.pyc
   │     │  │  │     ├─ test_iloc.cpython-313.pyc
   │     │  │  │     ├─ test_indexers.cpython-313.pyc
   │     │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_loc.cpython-313.pyc
   │     │  │  │     ├─ test_na_indexing.cpython-313.pyc
   │     │  │  │     ├─ test_partial.cpython-313.pyc
   │     │  │  │     ├─ test_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ interchange
   │     │  │  │  ├─ test_impl.py
   │     │  │  │  ├─ test_spec_conformance.py
   │     │  │  │  ├─ test_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_impl.cpython-313.pyc
   │     │  │  │     ├─ test_spec_conformance.cpython-313.pyc
   │     │  │  │     ├─ test_utils.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ internals
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_internals.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_internals.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ io
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ excel
   │     │  │  │  │  ├─ test_odf.py
   │     │  │  │  │  ├─ test_odswriter.py
   │     │  │  │  │  ├─ test_openpyxl.py
   │     │  │  │  │  ├─ test_readers.py
   │     │  │  │  │  ├─ test_style.py
   │     │  │  │  │  ├─ test_writers.py
   │     │  │  │  │  ├─ test_xlrd.py
   │     │  │  │  │  ├─ test_xlsxwriter.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_odf.cpython-313.pyc
   │     │  │  │  │     ├─ test_odswriter.cpython-313.pyc
   │     │  │  │  │     ├─ test_openpyxl.cpython-313.pyc
   │     │  │  │  │     ├─ test_readers.cpython-313.pyc
   │     │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │     ├─ test_writers.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlrd.cpython-313.pyc
   │     │  │  │  │     ├─ test_xlsxwriter.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formats
   │     │  │  │  │  ├─ style
   │     │  │  │  │  │  ├─ test_bar.py
   │     │  │  │  │  │  ├─ test_exceptions.py
   │     │  │  │  │  │  ├─ test_format.py
   │     │  │  │  │  │  ├─ test_highlight.py
   │     │  │  │  │  │  ├─ test_html.py
   │     │  │  │  │  │  ├─ test_matplotlib.py
   │     │  │  │  │  │  ├─ test_non_unique.py
   │     │  │  │  │  │  ├─ test_style.py
   │     │  │  │  │  │  ├─ test_tooltip.py
   │     │  │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  │  ├─ test_to_typst.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_bar.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_exceptions.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_highlight.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_matplotlib.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_non_unique.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tooltip.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_typst.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_console.py
   │     │  │  │  │  ├─ test_css.py
   │     │  │  │  │  ├─ test_eng_formatting.py
   │     │  │  │  │  ├─ test_format.py
   │     │  │  │  │  ├─ test_ipython_compat.py
   │     │  │  │  │  ├─ test_printing.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_excel.py
   │     │  │  │  │  ├─ test_to_html.py
   │     │  │  │  │  ├─ test_to_latex.py
   │     │  │  │  │  ├─ test_to_markdown.py
   │     │  │  │  │  ├─ test_to_string.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_console.cpython-313.pyc
   │     │  │  │  │     ├─ test_css.cpython-313.pyc
   │     │  │  │  │     ├─ test_eng_formatting.cpython-313.pyc
   │     │  │  │  │     ├─ test_format.cpython-313.pyc
   │     │  │  │  │     ├─ test_ipython_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_printing.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_excel.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_html.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_latex.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_markdown.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_string.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ generate_legacy_storage_files.py
   │     │  │  │  ├─ json
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_deprecated_kwargs.py
   │     │  │  │  │  ├─ test_json_table_schema.py
   │     │  │  │  │  ├─ test_json_table_schema_ext_dtype.py
   │     │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  ├─ test_pandas.py
   │     │  │  │  │  ├─ test_readlines.py
   │     │  │  │  │  ├─ test_ujson.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_deprecated_kwargs.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema.cpython-313.pyc
   │     │  │  │  │     ├─ test_json_table_schema_ext_dtype.cpython-313.pyc
   │     │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │     ├─ test_pandas.cpython-313.pyc
   │     │  │  │  │     ├─ test_readlines.cpython-313.pyc
   │     │  │  │  │     ├─ test_ujson.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ parser
   │     │  │  │  │  ├─ common
   │     │  │  │  │  │  ├─ test_chunksize.py
   │     │  │  │  │  │  ├─ test_common_basic.py
   │     │  │  │  │  │  ├─ test_data_list.py
   │     │  │  │  │  │  ├─ test_decimal.py
   │     │  │  │  │  │  ├─ test_file_buffer_url.py
   │     │  │  │  │  │  ├─ test_float.py
   │     │  │  │  │  │  ├─ test_index.py
   │     │  │  │  │  │  ├─ test_inf.py
   │     │  │  │  │  │  ├─ test_ints.py
   │     │  │  │  │  │  ├─ test_iterator.py
   │     │  │  │  │  │  ├─ test_read_errors.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_chunksize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_common_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_data_list.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_decimal.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_file_buffer_url.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_float.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_inf.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_ints.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_iterator.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_read_errors.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ dtypes
   │     │  │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  │  ├─ test_dtypes_basic.py
   │     │  │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_dtypes_basic.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_comment.py
   │     │  │  │  │  ├─ test_compression.py
   │     │  │  │  │  ├─ test_concatenate_chunks.py
   │     │  │  │  │  ├─ test_converters.py
   │     │  │  │  │  ├─ test_c_parser_only.py
   │     │  │  │  │  ├─ test_dialect.py
   │     │  │  │  │  ├─ test_encoding.py
   │     │  │  │  │  ├─ test_header.py
   │     │  │  │  │  ├─ test_index_col.py
   │     │  │  │  │  ├─ test_mangle_dupes.py
   │     │  │  │  │  ├─ test_multi_thread.py
   │     │  │  │  │  ├─ test_na_values.py
   │     │  │  │  │  ├─ test_network.py
   │     │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  ├─ test_python_parser_only.py
   │     │  │  │  │  ├─ test_quoting.py
   │     │  │  │  │  ├─ test_read_fwf.py
   │     │  │  │  │  ├─ test_skiprows.py
   │     │  │  │  │  ├─ test_textreader.py
   │     │  │  │  │  ├─ test_unsupported.py
   │     │  │  │  │  ├─ test_upcast.py
   │     │  │  │  │  ├─ usecols
   │     │  │  │  │  │  ├─ test_parse_dates.py
   │     │  │  │  │  │  ├─ test_strings.py
   │     │  │  │  │  │  ├─ test_usecols_basic.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_usecols_basic.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_comment.cpython-313.pyc
   │     │  │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │  │     ├─ test_concatenate_chunks.cpython-313.pyc
   │     │  │  │  │     ├─ test_converters.cpython-313.pyc
   │     │  │  │  │     ├─ test_c_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_dialect.cpython-313.pyc
   │     │  │  │  │     ├─ test_encoding.cpython-313.pyc
   │     │  │  │  │     ├─ test_header.cpython-313.pyc
   │     │  │  │  │     ├─ test_index_col.cpython-313.pyc
   │     │  │  │  │     ├─ test_mangle_dupes.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi_thread.cpython-313.pyc
   │     │  │  │  │     ├─ test_na_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_network.cpython-313.pyc
   │     │  │  │  │     ├─ test_parse_dates.cpython-313.pyc
   │     │  │  │  │     ├─ test_python_parser_only.cpython-313.pyc
   │     │  │  │  │     ├─ test_quoting.cpython-313.pyc
   │     │  │  │  │     ├─ test_read_fwf.cpython-313.pyc
   │     │  │  │  │     ├─ test_skiprows.cpython-313.pyc
   │     │  │  │  │     ├─ test_textreader.cpython-313.pyc
   │     │  │  │  │     ├─ test_unsupported.cpython-313.pyc
   │     │  │  │  │     ├─ test_upcast.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pytables
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_compat.py
   │     │  │  │  │  ├─ test_complex.py
   │     │  │  │  │  ├─ test_errors.py
   │     │  │  │  │  ├─ test_file_handling.py
   │     │  │  │  │  ├─ test_keys.py
   │     │  │  │  │  ├─ test_put.py
   │     │  │  │  │  ├─ test_pytables_missing.py
   │     │  │  │  │  ├─ test_read.py
   │     │  │  │  │  ├─ test_retain_attributes.py
   │     │  │  │  │  ├─ test_round_trip.py
   │     │  │  │  │  ├─ test_select.py
   │     │  │  │  │  ├─ test_store.py
   │     │  │  │  │  ├─ test_subclass.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ test_time_series.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_compat.cpython-313.pyc
   │     │  │  │  │     ├─ test_complex.cpython-313.pyc
   │     │  │  │  │     ├─ test_errors.cpython-313.pyc
   │     │  │  │  │     ├─ test_file_handling.cpython-313.pyc
   │     │  │  │  │     ├─ test_keys.cpython-313.pyc
   │     │  │  │  │     ├─ test_put.cpython-313.pyc
   │     │  │  │  │     ├─ test_pytables_missing.cpython-313.pyc
   │     │  │  │  │     ├─ test_read.cpython-313.pyc
   │     │  │  │  │     ├─ test_retain_attributes.cpython-313.pyc
   │     │  │  │  │     ├─ test_round_trip.cpython-313.pyc
   │     │  │  │  │     ├─ test_select.cpython-313.pyc
   │     │  │  │  │     ├─ test_store.cpython-313.pyc
   │     │  │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     ├─ test_time_series.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ sas
   │     │  │  │  │  ├─ test_byteswap.py
   │     │  │  │  │  ├─ test_sas.py
   │     │  │  │  │  ├─ test_sas7bdat.py
   │     │  │  │  │  ├─ test_xport.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_byteswap.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas.cpython-313.pyc
   │     │  │  │  │     ├─ test_sas7bdat.cpython-313.pyc
   │     │  │  │  │     ├─ test_xport.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_clipboard.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_compression.py
   │     │  │  │  ├─ test_feather.py
   │     │  │  │  ├─ test_fsspec.py
   │     │  │  │  ├─ test_gcs.py
   │     │  │  │  ├─ test_html.py
   │     │  │  │  ├─ test_http_headers.py
   │     │  │  │  ├─ test_iceberg.py
   │     │  │  │  ├─ test_orc.py
   │     │  │  │  ├─ test_parquet.py
   │     │  │  │  ├─ test_pickle.py
   │     │  │  │  ├─ test_s3.py
   │     │  │  │  ├─ test_spss.py
   │     │  │  │  ├─ test_sql.py
   │     │  │  │  ├─ test_stata.py
   │     │  │  │  ├─ xml
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_to_xml.py
   │     │  │  │  │  ├─ test_xml.py
   │     │  │  │  │  ├─ test_xml_dtypes.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml.cpython-313.pyc
   │     │  │  │  │     ├─ test_xml_dtypes.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ generate_legacy_storage_files.cpython-313.pyc
   │     │  │  │     ├─ test_clipboard.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_compression.cpython-313.pyc
   │     │  │  │     ├─ test_feather.cpython-313.pyc
   │     │  │  │     ├─ test_fsspec.cpython-313.pyc
   │     │  │  │     ├─ test_gcs.cpython-313.pyc
   │     │  │  │     ├─ test_html.cpython-313.pyc
   │     │  │  │     ├─ test_http_headers.cpython-313.pyc
   │     │  │  │     ├─ test_iceberg.cpython-313.pyc
   │     │  │  │     ├─ test_orc.cpython-313.pyc
   │     │  │  │     ├─ test_parquet.cpython-313.pyc
   │     │  │  │     ├─ test_pickle.cpython-313.pyc
   │     │  │  │     ├─ test_s3.cpython-313.pyc
   │     │  │  │     ├─ test_spss.cpython-313.pyc
   │     │  │  │     ├─ test_sql.cpython-313.pyc
   │     │  │  │     ├─ test_stata.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ libs
   │     │  │  │  ├─ test_hashtable.py
   │     │  │  │  ├─ test_join.py
   │     │  │  │  ├─ test_lib.py
   │     │  │  │  ├─ test_libalgos.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_hashtable.cpython-313.pyc
   │     │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │     ├─ test_lib.cpython-313.pyc
   │     │  │  │     ├─ test_libalgos.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ plotting
   │     │  │  │  ├─ common.py
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ frame
   │     │  │  │  │  ├─ test_frame.py
   │     │  │  │  │  ├─ test_frame_color.py
   │     │  │  │  │  ├─ test_frame_groupby.py
   │     │  │  │  │  ├─ test_frame_legend.py
   │     │  │  │  │  ├─ test_frame_subplots.py
   │     │  │  │  │  ├─ test_hist_box_by.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_color.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_groupby.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_legend.cpython-313.pyc
   │     │  │  │  │     ├─ test_frame_subplots.cpython-313.pyc
   │     │  │  │  │     ├─ test_hist_box_by.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_backend.py
   │     │  │  │  ├─ test_boxplot_method.py
   │     │  │  │  ├─ test_common.py
   │     │  │  │  ├─ test_converter.py
   │     │  │  │  ├─ test_datetimelike.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_hist_method.py
   │     │  │  │  ├─ test_misc.py
   │     │  │  │  ├─ test_series.py
   │     │  │  │  ├─ test_style.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_backend.cpython-313.pyc
   │     │  │  │     ├─ test_boxplot_method.cpython-313.pyc
   │     │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │     ├─ test_converter.cpython-313.pyc
   │     │  │  │     ├─ test_datetimelike.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_hist_method.cpython-313.pyc
   │     │  │  │     ├─ test_misc.cpython-313.pyc
   │     │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │     ├─ test_style.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reductions
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_stat_reductions.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_stat_reductions.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resample
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_base.py
   │     │  │  │  ├─ test_datetime_index.py
   │     │  │  │  ├─ test_period_index.py
   │     │  │  │  ├─ test_resampler_grouper.py
   │     │  │  │  ├─ test_resample_api.py
   │     │  │  │  ├─ test_timedelta.py
   │     │  │  │  ├─ test_time_grouper.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_base.cpython-313.pyc
   │     │  │  │     ├─ test_datetime_index.cpython-313.pyc
   │     │  │  │     ├─ test_period_index.cpython-313.pyc
   │     │  │  │     ├─ test_resampler_grouper.cpython-313.pyc
   │     │  │  │     ├─ test_resample_api.cpython-313.pyc
   │     │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │     ├─ test_time_grouper.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ reshape
   │     │  │  │  ├─ concat
   │     │  │  │  │  ├─ test_append.py
   │     │  │  │  │  ├─ test_append_common.py
   │     │  │  │  │  ├─ test_categorical.py
   │     │  │  │  │  ├─ test_concat.py
   │     │  │  │  │  ├─ test_dataframe.py
   │     │  │  │  │  ├─ test_datetimes.py
   │     │  │  │  │  ├─ test_empty.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_invalid.py
   │     │  │  │  │  ├─ test_series.py
   │     │  │  │  │  ├─ test_sort.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_append.cpython-313.pyc
   │     │  │  │  │     ├─ test_append_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_categorical.cpython-313.pyc
   │     │  │  │  │     ├─ test_concat.cpython-313.pyc
   │     │  │  │  │     ├─ test_dataframe.cpython-313.pyc
   │     │  │  │  │     ├─ test_datetimes.cpython-313.pyc
   │     │  │  │  │     ├─ test_empty.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_invalid.cpython-313.pyc
   │     │  │  │  │     ├─ test_series.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ merge
   │     │  │  │  │  ├─ test_join.py
   │     │  │  │  │  ├─ test_merge.py
   │     │  │  │  │  ├─ test_merge_antijoin.py
   │     │  │  │  │  ├─ test_merge_asof.py
   │     │  │  │  │  ├─ test_merge_cross.py
   │     │  │  │  │  ├─ test_merge_index_as_string.py
   │     │  │  │  │  ├─ test_merge_ordered.py
   │     │  │  │  │  ├─ test_multi.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_join.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_antijoin.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_cross.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_index_as_string.cpython-313.pyc
   │     │  │  │  │     ├─ test_merge_ordered.cpython-313.pyc
   │     │  │  │  │     ├─ test_multi.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_crosstab.py
   │     │  │  │  ├─ test_cut.py
   │     │  │  │  ├─ test_from_dummies.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_melt.py
   │     │  │  │  ├─ test_pivot.py
   │     │  │  │  ├─ test_pivot_multilevel.py
   │     │  │  │  ├─ test_qcut.py
   │     │  │  │  ├─ test_union_categoricals.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_crosstab.cpython-313.pyc
   │     │  │  │     ├─ test_cut.cpython-313.pyc
   │     │  │  │     ├─ test_from_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_melt.cpython-313.pyc
   │     │  │  │     ├─ test_pivot.cpython-313.pyc
   │     │  │  │     ├─ test_pivot_multilevel.cpython-313.pyc
   │     │  │  │     ├─ test_qcut.cpython-313.pyc
   │     │  │  │     ├─ test_union_categoricals.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ scalar
   │     │  │  │  ├─ interval
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_contains.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_interval.py
   │     │  │  │  │  ├─ test_overlaps.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_contains.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_interval.cpython-313.pyc
   │     │  │  │  │     ├─ test_overlaps.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ period
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_asfreq.py
   │     │  │  │  │  ├─ test_period.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_asfreq.cpython-313.pyc
   │     │  │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_nat.py
   │     │  │  │  ├─ test_na_scalar.py
   │     │  │  │  ├─ timedelta
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timedelta.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timedelta.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ timestamp
   │     │  │  │  │  ├─ methods
   │     │  │  │  │  │  ├─ test_as_unit.py
   │     │  │  │  │  │  ├─ test_normalize.py
   │     │  │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  │  ├─ test_round.py
   │     │  │  │  │  │  ├─ test_timestamp_method.py
   │     │  │  │  │  │  ├─ test_to_julian_date.py
   │     │  │  │  │  │  ├─ test_to_pydatetime.py
   │     │  │  │  │  │  ├─ test_tz_convert.py
   │     │  │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ test_as_unit.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_normalize.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_timestamp_method.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_julian_date.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_to_pydatetime.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_convert.cpython-313.pyc
   │     │  │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ test_arithmetic.py
   │     │  │  │  │  ├─ test_comparisons.py
   │     │  │  │  │  ├─ test_constructors.py
   │     │  │  │  │  ├─ test_formats.py
   │     │  │  │  │  ├─ test_timestamp.py
   │     │  │  │  │  ├─ test_timezones.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │  │     ├─ test_comparisons.cpython-313.pyc
   │     │  │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │  │     ├─ test_timestamp.cpython-313.pyc
   │     │  │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_nat.cpython-313.pyc
   │     │  │  │     ├─ test_na_scalar.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ series
   │     │  │  │  ├─ accessors
   │     │  │  │  │  ├─ test_cat_accessor.py
   │     │  │  │  │  ├─ test_dt_accessor.py
   │     │  │  │  │  ├─ test_list_accessor.py
   │     │  │  │  │  ├─ test_sparse_accessor.py
   │     │  │  │  │  ├─ test_struct_accessor.py
   │     │  │  │  │  ├─ test_str_accessor.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_cat_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_dt_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_list_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_sparse_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_struct_accessor.cpython-313.pyc
   │     │  │  │  │     ├─ test_str_accessor.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ indexing
   │     │  │  │  │  ├─ test_datetime.py
   │     │  │  │  │  ├─ test_delitem.py
   │     │  │  │  │  ├─ test_get.py
   │     │  │  │  │  ├─ test_getitem.py
   │     │  │  │  │  ├─ test_indexing.py
   │     │  │  │  │  ├─ test_mask.py
   │     │  │  │  │  ├─ test_setitem.py
   │     │  │  │  │  ├─ test_set_value.py
   │     │  │  │  │  ├─ test_take.py
   │     │  │  │  │  ├─ test_where.py
   │     │  │  │  │  ├─ test_xs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
   │     │  │  │  │     ├─ test_delitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_get.cpython-313.pyc
   │     │  │  │  │     ├─ test_getitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_indexing.cpython-313.pyc
   │     │  │  │  │     ├─ test_mask.cpython-313.pyc
   │     │  │  │  │     ├─ test_setitem.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_value.cpython-313.pyc
   │     │  │  │  │     ├─ test_take.cpython-313.pyc
   │     │  │  │  │     ├─ test_where.cpython-313.pyc
   │     │  │  │  │     ├─ test_xs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ methods
   │     │  │  │  │  ├─ test_add_prefix_suffix.py
   │     │  │  │  │  ├─ test_align.py
   │     │  │  │  │  ├─ test_argsort.py
   │     │  │  │  │  ├─ test_asof.py
   │     │  │  │  │  ├─ test_astype.py
   │     │  │  │  │  ├─ test_autocorr.py
   │     │  │  │  │  ├─ test_between.py
   │     │  │  │  │  ├─ test_case_when.py
   │     │  │  │  │  ├─ test_clip.py
   │     │  │  │  │  ├─ test_combine.py
   │     │  │  │  │  ├─ test_combine_first.py
   │     │  │  │  │  ├─ test_compare.py
   │     │  │  │  │  ├─ test_convert_dtypes.py
   │     │  │  │  │  ├─ test_copy.py
   │     │  │  │  │  ├─ test_count.py
   │     │  │  │  │  ├─ test_cov_corr.py
   │     │  │  │  │  ├─ test_describe.py
   │     │  │  │  │  ├─ test_diff.py
   │     │  │  │  │  ├─ test_drop.py
   │     │  │  │  │  ├─ test_dropna.py
   │     │  │  │  │  ├─ test_drop_duplicates.py
   │     │  │  │  │  ├─ test_dtypes.py
   │     │  │  │  │  ├─ test_duplicated.py
   │     │  │  │  │  ├─ test_equals.py
   │     │  │  │  │  ├─ test_explode.py
   │     │  │  │  │  ├─ test_fillna.py
   │     │  │  │  │  ├─ test_get_numeric_data.py
   │     │  │  │  │  ├─ test_head_tail.py
   │     │  │  │  │  ├─ test_infer_objects.py
   │     │  │  │  │  ├─ test_info.py
   │     │  │  │  │  ├─ test_interpolate.py
   │     │  │  │  │  ├─ test_isin.py
   │     │  │  │  │  ├─ test_isna.py
   │     │  │  │  │  ├─ test_is_monotonic.py
   │     │  │  │  │  ├─ test_is_unique.py
   │     │  │  │  │  ├─ test_item.py
   │     │  │  │  │  ├─ test_map.py
   │     │  │  │  │  ├─ test_matmul.py
   │     │  │  │  │  ├─ test_nlargest.py
   │     │  │  │  │  ├─ test_nunique.py
   │     │  │  │  │  ├─ test_pct_change.py
   │     │  │  │  │  ├─ test_pop.py
   │     │  │  │  │  ├─ test_quantile.py
   │     │  │  │  │  ├─ test_rank.py
   │     │  │  │  │  ├─ test_reindex.py
   │     │  │  │  │  ├─ test_reindex_like.py
   │     │  │  │  │  ├─ test_rename.py
   │     │  │  │  │  ├─ test_rename_axis.py
   │     │  │  │  │  ├─ test_repeat.py
   │     │  │  │  │  ├─ test_replace.py
   │     │  │  │  │  ├─ test_reset_index.py
   │     │  │  │  │  ├─ test_round.py
   │     │  │  │  │  ├─ test_searchsorted.py
   │     │  │  │  │  ├─ test_set_name.py
   │     │  │  │  │  ├─ test_size.py
   │     │  │  │  │  ├─ test_sort_index.py
   │     │  │  │  │  ├─ test_sort_values.py
   │     │  │  │  │  ├─ test_tolist.py
   │     │  │  │  │  ├─ test_to_csv.py
   │     │  │  │  │  ├─ test_to_dict.py
   │     │  │  │  │  ├─ test_to_frame.py
   │     │  │  │  │  ├─ test_to_numpy.py
   │     │  │  │  │  ├─ test_truncate.py
   │     │  │  │  │  ├─ test_tz_localize.py
   │     │  │  │  │  ├─ test_unique.py
   │     │  │  │  │  ├─ test_unstack.py
   │     │  │  │  │  ├─ test_update.py
   │     │  │  │  │  ├─ test_values.py
   │     │  │  │  │  ├─ test_value_counts.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_add_prefix_suffix.cpython-313.pyc
   │     │  │  │  │     ├─ test_align.cpython-313.pyc
   │     │  │  │  │     ├─ test_argsort.cpython-313.pyc
   │     │  │  │  │     ├─ test_asof.cpython-313.pyc
   │     │  │  │  │     ├─ test_astype.cpython-313.pyc
   │     │  │  │  │     ├─ test_autocorr.cpython-313.pyc
   │     │  │  │  │     ├─ test_between.cpython-313.pyc
   │     │  │  │  │     ├─ test_case_when.cpython-313.pyc
   │     │  │  │  │     ├─ test_clip.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine.cpython-313.pyc
   │     │  │  │  │     ├─ test_combine_first.cpython-313.pyc
   │     │  │  │  │     ├─ test_compare.cpython-313.pyc
   │     │  │  │  │     ├─ test_convert_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_copy.cpython-313.pyc
   │     │  │  │  │     ├─ test_count.cpython-313.pyc
   │     │  │  │  │     ├─ test_cov_corr.cpython-313.pyc
   │     │  │  │  │     ├─ test_describe.cpython-313.pyc
   │     │  │  │  │     ├─ test_diff.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop.cpython-313.pyc
   │     │  │  │  │     ├─ test_dropna.cpython-313.pyc
   │     │  │  │  │     ├─ test_drop_duplicates.cpython-313.pyc
   │     │  │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │  │     ├─ test_duplicated.cpython-313.pyc
   │     │  │  │  │     ├─ test_equals.cpython-313.pyc
   │     │  │  │  │     ├─ test_explode.cpython-313.pyc
   │     │  │  │  │     ├─ test_fillna.cpython-313.pyc
   │     │  │  │  │     ├─ test_get_numeric_data.cpython-313.pyc
   │     │  │  │  │     ├─ test_head_tail.cpython-313.pyc
   │     │  │  │  │     ├─ test_infer_objects.cpython-313.pyc
   │     │  │  │  │     ├─ test_info.cpython-313.pyc
   │     │  │  │  │     ├─ test_interpolate.cpython-313.pyc
   │     │  │  │  │     ├─ test_isin.cpython-313.pyc
   │     │  │  │  │     ├─ test_isna.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_monotonic.cpython-313.pyc
   │     │  │  │  │     ├─ test_is_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_item.cpython-313.pyc
   │     │  │  │  │     ├─ test_map.cpython-313.pyc
   │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
   │     │  │  │  │     ├─ test_nlargest.cpython-313.pyc
   │     │  │  │  │     ├─ test_nunique.cpython-313.pyc
   │     │  │  │  │     ├─ test_pct_change.cpython-313.pyc
   │     │  │  │  │     ├─ test_pop.cpython-313.pyc
   │     │  │  │  │     ├─ test_quantile.cpython-313.pyc
   │     │  │  │  │     ├─ test_rank.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex.cpython-313.pyc
   │     │  │  │  │     ├─ test_reindex_like.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename.cpython-313.pyc
   │     │  │  │  │     ├─ test_rename_axis.cpython-313.pyc
   │     │  │  │  │     ├─ test_repeat.cpython-313.pyc
   │     │  │  │  │     ├─ test_replace.cpython-313.pyc
   │     │  │  │  │     ├─ test_reset_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_round.cpython-313.pyc
   │     │  │  │  │     ├─ test_searchsorted.cpython-313.pyc
   │     │  │  │  │     ├─ test_set_name.cpython-313.pyc
   │     │  │  │  │     ├─ test_size.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_sort_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_tolist.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_csv.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_dict.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_frame.cpython-313.pyc
   │     │  │  │  │     ├─ test_to_numpy.cpython-313.pyc
   │     │  │  │  │     ├─ test_truncate.cpython-313.pyc
   │     │  │  │  │     ├─ test_tz_localize.cpython-313.pyc
   │     │  │  │  │     ├─ test_unique.cpython-313.pyc
   │     │  │  │  │     ├─ test_unstack.cpython-313.pyc
   │     │  │  │  │     ├─ test_update.cpython-313.pyc
   │     │  │  │  │     ├─ test_values.cpython-313.pyc
   │     │  │  │  │     ├─ test_value_counts.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_arithmetic.py
   │     │  │  │  ├─ test_arrow_interface.py
   │     │  │  │  ├─ test_constructors.py
   │     │  │  │  ├─ test_cumulative.py
   │     │  │  │  ├─ test_formats.py
   │     │  │  │  ├─ test_iteration.py
   │     │  │  │  ├─ test_logical_ops.py
   │     │  │  │  ├─ test_missing.py
   │     │  │  │  ├─ test_npfuncs.py
   │     │  │  │  ├─ test_reductions.py
   │     │  │  │  ├─ test_subclass.py
   │     │  │  │  ├─ test_ufunc.py
   │     │  │  │  ├─ test_unary.py
   │     │  │  │  ├─ test_validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_arithmetic.cpython-313.pyc
   │     │  │  │     ├─ test_arrow_interface.cpython-313.pyc
   │     │  │  │     ├─ test_constructors.cpython-313.pyc
   │     │  │  │     ├─ test_cumulative.cpython-313.pyc
   │     │  │  │     ├─ test_formats.cpython-313.pyc
   │     │  │  │     ├─ test_iteration.cpython-313.pyc
   │     │  │  │     ├─ test_logical_ops.cpython-313.pyc
   │     │  │  │     ├─ test_missing.cpython-313.pyc
   │     │  │  │     ├─ test_npfuncs.cpython-313.pyc
   │     │  │  │     ├─ test_reductions.cpython-313.pyc
   │     │  │  │     ├─ test_subclass.cpython-313.pyc
   │     │  │  │     ├─ test_ufunc.cpython-313.pyc
   │     │  │  │     ├─ test_unary.cpython-313.pyc
   │     │  │  │     ├─ test_validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ strings
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_case_justify.py
   │     │  │  │  ├─ test_cat.py
   │     │  │  │  ├─ test_extract.py
   │     │  │  │  ├─ test_find_replace.py
   │     │  │  │  ├─ test_get_dummies.py
   │     │  │  │  ├─ test_split_partition.py
   │     │  │  │  ├─ test_strings.py
   │     │  │  │  ├─ test_string_array.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_case_justify.cpython-313.pyc
   │     │  │  │     ├─ test_cat.cpython-313.pyc
   │     │  │  │     ├─ test_extract.cpython-313.pyc
   │     │  │  │     ├─ test_find_replace.cpython-313.pyc
   │     │  │  │     ├─ test_get_dummies.cpython-313.pyc
   │     │  │  │     ├─ test_split_partition.cpython-313.pyc
   │     │  │  │     ├─ test_strings.cpython-313.pyc
   │     │  │  │     ├─ test_string_array.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ test_aggregation.py
   │     │  │  ├─ test_algos.py
   │     │  │  ├─ test_col.py
   │     │  │  ├─ test_common.py
   │     │  │  ├─ test_downstream.py
   │     │  │  ├─ test_errors.py
   │     │  │  ├─ test_expressions.py
   │     │  │  ├─ test_flags.py
   │     │  │  ├─ test_multilevel.py
   │     │  │  ├─ test_nanops.py
   │     │  │  ├─ test_optional_dependency.py
   │     │  │  ├─ test_register_accessor.py
   │     │  │  ├─ test_sorting.py
   │     │  │  ├─ test_take.py
   │     │  │  ├─ tools
   │     │  │  │  ├─ test_to_datetime.py
   │     │  │  │  ├─ test_to_numeric.py
   │     │  │  │  ├─ test_to_time.py
   │     │  │  │  ├─ test_to_timedelta.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_to_numeric.cpython-313.pyc
   │     │  │  │     ├─ test_to_time.cpython-313.pyc
   │     │  │  │     ├─ test_to_timedelta.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tseries
   │     │  │  │  ├─ frequencies
   │     │  │  │  │  ├─ test_frequencies.py
   │     │  │  │  │  ├─ test_freq_code.py
   │     │  │  │  │  ├─ test_inference.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_frequencies.cpython-313.pyc
   │     │  │  │  │     ├─ test_freq_code.cpython-313.pyc
   │     │  │  │  │     ├─ test_inference.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ holiday
   │     │  │  │  │  ├─ test_calendar.py
   │     │  │  │  │  ├─ test_federal.py
   │     │  │  │  │  ├─ test_holiday.py
   │     │  │  │  │  ├─ test_observance.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ test_calendar.cpython-313.pyc
   │     │  │  │  │     ├─ test_federal.cpython-313.pyc
   │     │  │  │  │     ├─ test_holiday.cpython-313.pyc
   │     │  │  │  │     ├─ test_observance.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ offsets
   │     │  │  │  │  ├─ common.py
   │     │  │  │  │  ├─ test_business_day.py
   │     │  │  │  │  ├─ test_business_halfyear.py
   │     │  │  │  │  ├─ test_business_hour.py
   │     │  │  │  │  ├─ test_business_month.py
   │     │  │  │  │  ├─ test_business_quarter.py
   │     │  │  │  │  ├─ test_business_year.py
   │     │  │  │  │  ├─ test_common.py
   │     │  │  │  │  ├─ test_custom_business_day.py
   │     │  │  │  │  ├─ test_custom_business_hour.py
   │     │  │  │  │  ├─ test_custom_business_month.py
   │     │  │  │  │  ├─ test_dst.py
   │     │  │  │  │  ├─ test_easter.py
   │     │  │  │  │  ├─ test_fiscal.py
   │     │  │  │  │  ├─ test_halfyear.py
   │     │  │  │  │  ├─ test_index.py
   │     │  │  │  │  ├─ test_month.py
   │     │  │  │  │  ├─ test_offsets.py
   │     │  │  │  │  ├─ test_offsets_properties.py
   │     │  │  │  │  ├─ test_quarter.py
   │     │  │  │  │  ├─ test_ticks.py
   │     │  │  │  │  ├─ test_week.py
   │     │  │  │  │  ├─ test_year.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ common.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_halfyear.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_business_year.cpython-313.pyc
   │     │  │  │  │     ├─ test_common.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_day.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_hour.cpython-313.pyc
   │     │  │  │  │     ├─ test_custom_business_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_dst.cpython-313.pyc
   │     │  │  │  │     ├─ test_easter.cpython-313.pyc
   │     │  │  │  │     ├─ test_fiscal.cpython-313.pyc
   │     │  │  │  │     ├─ test_halfyear.cpython-313.pyc
   │     │  │  │  │     ├─ test_index.cpython-313.pyc
   │     │  │  │  │     ├─ test_month.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets.cpython-313.pyc
   │     │  │  │  │     ├─ test_offsets_properties.cpython-313.pyc
   │     │  │  │  │     ├─ test_quarter.cpython-313.pyc
   │     │  │  │  │     ├─ test_ticks.cpython-313.pyc
   │     │  │  │  │     ├─ test_week.cpython-313.pyc
   │     │  │  │  │     ├─ test_year.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_array_to_datetime.py
   │     │  │  │  ├─ test_ccalendar.py
   │     │  │  │  ├─ test_conversion.py
   │     │  │  │  ├─ test_fields.py
   │     │  │  │  ├─ test_libfrequencies.py
   │     │  │  │  ├─ test_liboffsets.py
   │     │  │  │  ├─ test_npy_units.py
   │     │  │  │  ├─ test_np_datetime.py
   │     │  │  │  ├─ test_parse_iso8601.py
   │     │  │  │  ├─ test_parsing.py
   │     │  │  │  ├─ test_period.py
   │     │  │  │  ├─ test_resolution.py
   │     │  │  │  ├─ test_strptime.py
   │     │  │  │  ├─ test_timedeltas.py
   │     │  │  │  ├─ test_timezones.py
   │     │  │  │  ├─ test_to_offset.py
   │     │  │  │  ├─ test_tzconversion.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_array_to_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_ccalendar.cpython-313.pyc
   │     │  │  │     ├─ test_conversion.cpython-313.pyc
   │     │  │  │     ├─ test_fields.cpython-313.pyc
   │     │  │  │     ├─ test_libfrequencies.cpython-313.pyc
   │     │  │  │     ├─ test_liboffsets.cpython-313.pyc
   │     │  │  │     ├─ test_npy_units.cpython-313.pyc
   │     │  │  │     ├─ test_np_datetime.cpython-313.pyc
   │     │  │  │     ├─ test_parse_iso8601.cpython-313.pyc
   │     │  │  │     ├─ test_parsing.cpython-313.pyc
   │     │  │  │     ├─ test_period.cpython-313.pyc
   │     │  │  │     ├─ test_resolution.cpython-313.pyc
   │     │  │  │     ├─ test_strptime.cpython-313.pyc
   │     │  │  │     ├─ test_timedeltas.cpython-313.pyc
   │     │  │  │     ├─ test_timezones.cpython-313.pyc
   │     │  │  │     ├─ test_to_offset.cpython-313.pyc
   │     │  │  │     ├─ test_tzconversion.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ util
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ test_assert_almost_equal.py
   │     │  │  │  ├─ test_assert_attr_equal.py
   │     │  │  │  ├─ test_assert_categorical_equal.py
   │     │  │  │  ├─ test_assert_extension_array_equal.py
   │     │  │  │  ├─ test_assert_frame_equal.py
   │     │  │  │  ├─ test_assert_index_equal.py
   │     │  │  │  ├─ test_assert_interval_array_equal.py
   │     │  │  │  ├─ test_assert_numpy_array_equal.py
   │     │  │  │  ├─ test_assert_produces_warning.py
   │     │  │  │  ├─ test_assert_series_equal.py
   │     │  │  │  ├─ test_deprecate.py
   │     │  │  │  ├─ test_deprecate_kwarg.py
   │     │  │  │  ├─ test_deprecate_nonkeyword_arguments.py
   │     │  │  │  ├─ test_doc.py
   │     │  │  │  ├─ test_hashing.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_rewrite_warning.py
   │     │  │  │  ├─ test_shares_memory.py
   │     │  │  │  ├─ test_show_versions.py
   │     │  │  │  ├─ test_util.py
   │     │  │  │  ├─ test_validate_args.py
   │     │  │  │  ├─ test_validate_args_and_kwargs.py
   │     │  │  │  ├─ test_validate_inclusive.py
   │     │  │  │  ├─ test_validate_kwargs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_assert_almost_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_attr_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_categorical_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_extension_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_frame_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_index_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_interval_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_numpy_array_equal.cpython-313.pyc
   │     │  │  │     ├─ test_assert_produces_warning.cpython-313.pyc
   │     │  │  │     ├─ test_assert_series_equal.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_kwarg.cpython-313.pyc
   │     │  │  │     ├─ test_deprecate_nonkeyword_arguments.cpython-313.pyc
   │     │  │  │     ├─ test_doc.cpython-313.pyc
   │     │  │  │     ├─ test_hashing.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_rewrite_warning.cpython-313.pyc
   │     │  │  │     ├─ test_shares_memory.cpython-313.pyc
   │     │  │  │     ├─ test_show_versions.cpython-313.pyc
   │     │  │  │     ├─ test_util.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args.cpython-313.pyc
   │     │  │  │     ├─ test_validate_args_and_kwargs.cpython-313.pyc
   │     │  │  │     ├─ test_validate_inclusive.cpython-313.pyc
   │     │  │  │     ├─ test_validate_kwargs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ conftest.py
   │     │  │  │  ├─ moments
   │     │  │  │  │  ├─ conftest.py
   │     │  │  │  │  ├─ test_moments_consistency_ewm.py
   │     │  │  │  │  ├─ test_moments_consistency_expanding.py
   │     │  │  │  │  ├─ test_moments_consistency_rolling.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_ewm.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_expanding.cpython-313.pyc
   │     │  │  │  │     ├─ test_moments_consistency_rolling.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ test_api.py
   │     │  │  │  ├─ test_apply.py
   │     │  │  │  ├─ test_base_indexer.py
   │     │  │  │  ├─ test_cython_aggregations.py
   │     │  │  │  ├─ test_dtypes.py
   │     │  │  │  ├─ test_ewm.py
   │     │  │  │  ├─ test_expanding.py
   │     │  │  │  ├─ test_groupby.py
   │     │  │  │  ├─ test_numba.py
   │     │  │  │  ├─ test_online.py
   │     │  │  │  ├─ test_pairwise.py
   │     │  │  │  ├─ test_rolling.py
   │     │  │  │  ├─ test_rolling_functions.py
   │     │  │  │  ├─ test_rolling_quantile.py
   │     │  │  │  ├─ test_rolling_skew_kurt.py
   │     │  │  │  ├─ test_timeseries_window.py
   │     │  │  │  ├─ test_win_type.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ conftest.cpython-313.pyc
   │     │  │  │     ├─ test_api.cpython-313.pyc
   │     │  │  │     ├─ test_apply.cpython-313.pyc
   │     │  │  │     ├─ test_base_indexer.cpython-313.pyc
   │     │  │  │     ├─ test_cython_aggregations.cpython-313.pyc
   │     │  │  │     ├─ test_dtypes.cpython-313.pyc
   │     │  │  │     ├─ test_ewm.cpython-313.pyc
   │     │  │  │     ├─ test_expanding.cpython-313.pyc
   │     │  │  │     ├─ test_groupby.cpython-313.pyc
   │     │  │  │     ├─ test_numba.cpython-313.pyc
   │     │  │  │     ├─ test_online.cpython-313.pyc
   │     │  │  │     ├─ test_pairwise.cpython-313.pyc
   │     │  │  │     ├─ test_rolling.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_functions.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_quantile.cpython-313.pyc
   │     │  │  │     ├─ test_rolling_skew_kurt.cpython-313.pyc
   │     │  │  │     ├─ test_timeseries_window.cpython-313.pyc
   │     │  │  │     ├─ test_win_type.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ test_aggregation.cpython-313.pyc
   │     │  │     ├─ test_algos.cpython-313.pyc
   │     │  │     ├─ test_col.cpython-313.pyc
   │     │  │     ├─ test_common.cpython-313.pyc
   │     │  │     ├─ test_downstream.cpython-313.pyc
   │     │  │     ├─ test_errors.cpython-313.pyc
   │     │  │     ├─ test_expressions.cpython-313.pyc
   │     │  │     ├─ test_flags.cpython-313.pyc
   │     │  │     ├─ test_multilevel.cpython-313.pyc
   │     │  │     ├─ test_nanops.cpython-313.pyc
   │     │  │     ├─ test_optional_dependency.cpython-313.pyc
   │     │  │     ├─ test_register_accessor.cpython-313.pyc
   │     │  │     ├─ test_sorting.cpython-313.pyc
   │     │  │     ├─ test_take.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ tseries
   │     │  │  ├─ api.py
   │     │  │  ├─ frequencies.py
   │     │  │  ├─ holiday.py
   │     │  │  ├─ offsets.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ api.cpython-313.pyc
   │     │  │     ├─ frequencies.cpython-313.pyc
   │     │  │     ├─ holiday.cpython-313.pyc
   │     │  │     ├─ offsets.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ util
   │     │  │  ├─ version
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _doctools.py
   │     │  │  ├─ _exceptions.py
   │     │  │  ├─ _print_versions.py
   │     │  │  ├─ _tester.py
   │     │  │  ├─ _test_decorators.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _doctools.cpython-313.pyc
   │     │  │     ├─ _exceptions.cpython-313.pyc
   │     │  │     ├─ _print_versions.cpython-313.pyc
   │     │  │     ├─ _tester.cpython-313.pyc
   │     │  │     ├─ _test_decorators.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _config
   │     │  │  ├─ config.py
   │     │  │  ├─ dates.py
   │     │  │  ├─ display.py
   │     │  │  ├─ localization.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dates.cpython-313.pyc
   │     │  │     ├─ display.cpython-313.pyc
   │     │  │     ├─ localization.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _libs
   │     │  │  ├─ algos.cp313-win_amd64.lib
   │     │  │  ├─ algos.cp313-win_amd64.pyd
   │     │  │  ├─ algos.pyi
   │     │  │  ├─ arrays.cp313-win_amd64.lib
   │     │  │  ├─ arrays.cp313-win_amd64.pyd
   │     │  │  ├─ arrays.pyi
   │     │  │  ├─ byteswap.cp313-win_amd64.lib
   │     │  │  ├─ byteswap.cp313-win_amd64.pyd
   │     │  │  ├─ byteswap.pyi
   │     │  │  ├─ groupby.cp313-win_amd64.lib
   │     │  │  ├─ groupby.cp313-win_amd64.pyd
   │     │  │  ├─ groupby.pyi
   │     │  │  ├─ hashing.cp313-win_amd64.lib
   │     │  │  ├─ hashing.cp313-win_amd64.pyd
   │     │  │  ├─ hashing.pyi
   │     │  │  ├─ hashtable.cp313-win_amd64.lib
   │     │  │  ├─ hashtable.cp313-win_amd64.pyd
   │     │  │  ├─ hashtable.pyi
   │     │  │  ├─ index.cp313-win_amd64.lib
   │     │  │  ├─ index.cp313-win_amd64.pyd
   │     │  │  ├─ index.pyi
   │     │  │  ├─ indexing.cp313-win_amd64.lib
   │     │  │  ├─ indexing.cp313-win_amd64.pyd
   │     │  │  ├─ indexing.pyi
   │     │  │  ├─ internals.cp313-win_amd64.lib
   │     │  │  ├─ internals.cp313-win_amd64.pyd
   │     │  │  ├─ internals.pyi
   │     │  │  ├─ interval.cp313-win_amd64.lib
   │     │  │  ├─ interval.cp313-win_amd64.pyd
   │     │  │  ├─ interval.pyi
   │     │  │  ├─ join.cp313-win_amd64.lib
   │     │  │  ├─ join.cp313-win_amd64.pyd
   │     │  │  ├─ join.pyi
   │     │  │  ├─ json.cp313-win_amd64.lib
   │     │  │  ├─ json.cp313-win_amd64.pyd
   │     │  │  ├─ json.pyi
   │     │  │  ├─ lib.cp313-win_amd64.lib
   │     │  │  ├─ lib.cp313-win_amd64.pyd
   │     │  │  ├─ lib.pyi
   │     │  │  ├─ missing.cp313-win_amd64.lib
   │     │  │  ├─ missing.cp313-win_amd64.pyd
   │     │  │  ├─ missing.pyi
   │     │  │  ├─ ops.cp313-win_amd64.lib
   │     │  │  ├─ ops.cp313-win_amd64.pyd
   │     │  │  ├─ ops.pyi
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.lib
   │     │  │  ├─ ops_dispatch.cp313-win_amd64.pyd
   │     │  │  ├─ ops_dispatch.pyi
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.lib
   │     │  │  ├─ pandas_datetime.cp313-win_amd64.pyd
   │     │  │  ├─ pandas_parser.cp313-win_amd64.lib
   │     │  │  ├─ pandas_parser.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.cp313-win_amd64.lib
   │     │  │  ├─ parsers.cp313-win_amd64.pyd
   │     │  │  ├─ parsers.pyi
   │     │  │  ├─ properties.cp313-win_amd64.lib
   │     │  │  ├─ properties.cp313-win_amd64.pyd
   │     │  │  ├─ properties.pyi
   │     │  │  ├─ reshape.cp313-win_amd64.lib
   │     │  │  ├─ reshape.cp313-win_amd64.pyd
   │     │  │  ├─ reshape.pyi
   │     │  │  ├─ sas.cp313-win_amd64.lib
   │     │  │  ├─ sas.cp313-win_amd64.pyd
   │     │  │  ├─ sas.pyi
   │     │  │  ├─ sparse.cp313-win_amd64.lib
   │     │  │  ├─ sparse.cp313-win_amd64.pyd
   │     │  │  ├─ sparse.pyi
   │     │  │  ├─ testing.cp313-win_amd64.lib
   │     │  │  ├─ testing.cp313-win_amd64.pyd
   │     │  │  ├─ testing.pyi
   │     │  │  ├─ tslib.cp313-win_amd64.lib
   │     │  │  ├─ tslib.cp313-win_amd64.pyd
   │     │  │  ├─ tslib.pyi
   │     │  │  ├─ tslibs
   │     │  │  │  ├─ base.cp313-win_amd64.lib
   │     │  │  │  ├─ base.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.lib
   │     │  │  │  ├─ ccalendar.cp313-win_amd64.pyd
   │     │  │  │  ├─ ccalendar.pyi
   │     │  │  │  ├─ conversion.cp313-win_amd64.lib
   │     │  │  │  ├─ conversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ conversion.pyi
   │     │  │  │  ├─ dtypes.cp313-win_amd64.lib
   │     │  │  │  ├─ dtypes.cp313-win_amd64.pyd
   │     │  │  │  ├─ dtypes.pyi
   │     │  │  │  ├─ fields.cp313-win_amd64.lib
   │     │  │  │  ├─ fields.cp313-win_amd64.pyd
   │     │  │  │  ├─ fields.pyi
   │     │  │  │  ├─ nattype.cp313-win_amd64.lib
   │     │  │  │  ├─ nattype.cp313-win_amd64.pyd
   │     │  │  │  ├─ nattype.pyi
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.lib
   │     │  │  │  ├─ np_datetime.cp313-win_amd64.pyd
   │     │  │  │  ├─ np_datetime.pyi
   │     │  │  │  ├─ offsets.cp313-win_amd64.lib
   │     │  │  │  ├─ offsets.cp313-win_amd64.pyd
   │     │  │  │  ├─ offsets.pyi
   │     │  │  │  ├─ parsing.cp313-win_amd64.lib
   │     │  │  │  ├─ parsing.cp313-win_amd64.pyd
   │     │  │  │  ├─ parsing.pyi
   │     │  │  │  ├─ period.cp313-win_amd64.lib
   │     │  │  │  ├─ period.cp313-win_amd64.pyd
   │     │  │  │  ├─ period.pyi
   │     │  │  │  ├─ strptime.cp313-win_amd64.lib
   │     │  │  │  ├─ strptime.cp313-win_amd64.pyd
   │     │  │  │  ├─ strptime.pyi
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.lib
   │     │  │  │  ├─ timedeltas.cp313-win_amd64.pyd
   │     │  │  │  ├─ timedeltas.pyi
   │     │  │  │  ├─ timestamps.cp313-win_amd64.lib
   │     │  │  │  ├─ timestamps.cp313-win_amd64.pyd
   │     │  │  │  ├─ timestamps.pyi
   │     │  │  │  ├─ timezones.cp313-win_amd64.lib
   │     │  │  │  ├─ timezones.cp313-win_amd64.pyd
   │     │  │  │  ├─ timezones.pyi
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.lib
   │     │  │  │  ├─ tzconversion.cp313-win_amd64.pyd
   │     │  │  │  ├─ tzconversion.pyi
   │     │  │  │  ├─ vectorized.cp313-win_amd64.lib
   │     │  │  │  ├─ vectorized.cp313-win_amd64.pyd
   │     │  │  │  ├─ vectorized.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ window
   │     │  │  │  ├─ aggregations.cp313-win_amd64.lib
   │     │  │  │  ├─ aggregations.cp313-win_amd64.pyd
   │     │  │  │  ├─ aggregations.pyi
   │     │  │  │  ├─ indexers.cp313-win_amd64.lib
   │     │  │  │  ├─ indexers.cp313-win_amd64.pyd
   │     │  │  │  ├─ indexers.pyi
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ writers.cp313-win_amd64.lib
   │     │  │  ├─ writers.cp313-win_amd64.pyd
   │     │  │  ├─ writers.pyi
   │     │  │  ├─ _cyutility.cp313-win_amd64.lib
   │     │  │  ├─ _cyutility.cp313-win_amd64.pyd
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _testing
   │     │  │  ├─ asserters.py
   │     │  │  ├─ compat.py
   │     │  │  ├─ contexts.py
   │     │  │  ├─ _hypothesis.py
   │     │  │  ├─ _io.py
   │     │  │  ├─ _warnings.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asserters.cpython-313.pyc
   │     │  │     ├─ compat.cpython-313.pyc
   │     │  │     ├─ contexts.cpython-313.pyc
   │     │  │     ├─ _hypothesis.cpython-313.pyc
   │     │  │     ├─ _io.cpython-313.pyc
   │     │  │     ├─ _warnings.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _typing.py
   │     │  ├─ _version.py
   │     │  ├─ _version_meson.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conftest.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ _typing.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     ├─ _version_meson.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pandas-3.0.1.dist-info
   │     │  ├─ DELVEWHEEL
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ pandas.libs
   │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
   │     ├─ pip
   │     │  ├─ py.typed
   │     │  ├─ _internal
   │     │  │  ├─ build_env.py
   │     │  │  ├─ cache.py
   │     │  │  ├─ cli
   │     │  │  │  ├─ autocompletion.py
   │     │  │  │  ├─ base_command.py
   │     │  │  │  ├─ cmdoptions.py
   │     │  │  │  ├─ command_context.py
   │     │  │  │  ├─ index_command.py
   │     │  │  │  ├─ main.py
   │     │  │  │  ├─ main_parser.py
   │     │  │  │  ├─ parser.py
   │     │  │  │  ├─ progress_bars.py
   │     │  │  │  ├─ req_command.py
   │     │  │  │  ├─ spinners.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ autocompletion.cpython-313.pyc
   │     │  │  │     ├─ base_command.cpython-313.pyc
   │     │  │  │     ├─ cmdoptions.cpython-313.pyc
   │     │  │  │     ├─ command_context.cpython-313.pyc
   │     │  │  │     ├─ index_command.cpython-313.pyc
   │     │  │  │     ├─ main.cpython-313.pyc
   │     │  │  │     ├─ main_parser.cpython-313.pyc
   │     │  │  │     ├─ parser.cpython-313.pyc
   │     │  │  │     ├─ progress_bars.cpython-313.pyc
   │     │  │  │     ├─ req_command.cpython-313.pyc
   │     │  │  │     ├─ spinners.cpython-313.pyc
   │     │  │  │     ├─ status_codes.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ commands
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ completion.py
   │     │  │  │  ├─ configuration.py
   │     │  │  │  ├─ debug.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ hash.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ inspect.py
   │     │  │  │  ├─ install.py
   │     │  │  │  ├─ list.py
   │     │  │  │  ├─ lock.py
   │     │  │  │  ├─ search.py
   │     │  │  │  ├─ show.py
   │     │  │  │  ├─ uninstall.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ completion.cpython-313.pyc
   │     │  │  │     ├─ configuration.cpython-313.pyc
   │     │  │  │     ├─ debug.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ hash.cpython-313.pyc
   │     │  │  │     ├─ help.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ inspect.cpython-313.pyc
   │     │  │  │     ├─ install.cpython-313.pyc
   │     │  │  │     ├─ list.cpython-313.pyc
   │     │  │  │     ├─ lock.cpython-313.pyc
   │     │  │  │     ├─ search.cpython-313.pyc
   │     │  │  │     ├─ show.cpython-313.pyc
   │     │  │  │     ├─ uninstall.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ configuration.py
   │     │  │  ├─ distributions
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ installed.py
   │     │  │  │  ├─ sdist.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ installed.cpython-313.pyc
   │     │  │  │     ├─ sdist.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ index
   │     │  │  │  ├─ collector.py
   │     │  │  │  ├─ package_finder.py
   │     │  │  │  ├─ sources.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ collector.cpython-313.pyc
   │     │  │  │     ├─ package_finder.cpython-313.pyc
   │     │  │  │     ├─ sources.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ locations
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _sysconfig.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ _distutils.cpython-313.pyc
   │     │  │  │     ├─ _sysconfig.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ main.py
   │     │  │  ├─ metadata
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ importlib
   │     │  │  │  │  ├─ _compat.py
   │     │  │  │  │  ├─ _dists.py
   │     │  │  │  │  ├─ _envs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _compat.cpython-313.pyc
   │     │  │  │  │     ├─ _dists.cpython-313.pyc
   │     │  │  │  │     ├─ _envs.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ pkg_resources.py
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     ├─ pkg_resources.cpython-313.pyc
   │     │  │  │     ├─ _json.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ models
   │     │  │  │  ├─ candidate.py
   │     │  │  │  ├─ direct_url.py
   │     │  │  │  ├─ format_control.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ installation_report.py
   │     │  │  │  ├─ link.py
   │     │  │  │  ├─ release_control.py
   │     │  │  │  ├─ scheme.py
   │     │  │  │  ├─ search_scope.py
   │     │  │  │  ├─ selection_prefs.py
   │     │  │  │  ├─ target_python.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ candidate.cpython-313.pyc
   │     │  │  │     ├─ direct_url.cpython-313.pyc
   │     │  │  │     ├─ format_control.cpython-313.pyc
   │     │  │  │     ├─ index.cpython-313.pyc
   │     │  │  │     ├─ installation_report.cpython-313.pyc
   │     │  │  │     ├─ link.cpython-313.pyc
   │     │  │  │     ├─ release_control.cpython-313.pyc
   │     │  │  │     ├─ scheme.cpython-313.pyc
   │     │  │  │     ├─ search_scope.cpython-313.pyc
   │     │  │  │     ├─ selection_prefs.cpython-313.pyc
   │     │  │  │     ├─ target_python.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ network
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ lazy_wheel.py
   │     │  │  │  ├─ session.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ xmlrpc.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ download.cpython-313.pyc
   │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
   │     │  │  │     ├─ session.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ xmlrpc.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ operations
   │     │  │  │  ├─ build
   │     │  │  │  │  ├─ build_tracker.py
   │     │  │  │  │  ├─ metadata.py
   │     │  │  │  │  ├─ metadata_editable.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ wheel_editable.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
   │     │  │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ install
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ prepare.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ check.cpython-313.pyc
   │     │  │  │     ├─ freeze.cpython-313.pyc
   │     │  │  │     ├─ prepare.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyproject.py
   │     │  │  ├─ req
   │     │  │  │  ├─ constructors.py
   │     │  │  │  ├─ pep723.py
   │     │  │  │  ├─ req_dependency_group.py
   │     │  │  │  ├─ req_file.py
   │     │  │  │  ├─ req_install.py
   │     │  │  │  ├─ req_set.py
   │     │  │  │  ├─ req_uninstall.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ constructors.cpython-313.pyc
   │     │  │  │     ├─ pep723.cpython-313.pyc
   │     │  │  │     ├─ req_dependency_group.cpython-313.pyc
   │     │  │  │     ├─ req_file.cpython-313.pyc
   │     │  │  │     ├─ req_install.cpython-313.pyc
   │     │  │  │     ├─ req_set.cpython-313.pyc
   │     │  │  │     ├─ req_uninstall.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ resolution
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ legacy
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ resolvelib
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ candidates.py
   │     │  │  │  │  ├─ factory.py
   │     │  │  │  │  ├─ found_candidates.py
   │     │  │  │  │  ├─ provider.py
   │     │  │  │  │  ├─ reporter.py
   │     │  │  │  │  ├─ requirements.py
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │  │     ├─ candidates.cpython-313.pyc
   │     │  │  │  │     ├─ factory.cpython-313.pyc
   │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
   │     │  │  │  │     ├─ provider.cpython-313.pyc
   │     │  │  │  │     ├─ reporter.cpython-313.pyc
   │     │  │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │  │     ├─ resolver.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ self_outdated_check.py
   │     │  │  ├─ utils
   │     │  │  │  ├─ appdirs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ compatibility_tags.py
   │     │  │  │  ├─ datetime.py
   │     │  │  │  ├─ deprecation.py
   │     │  │  │  ├─ direct_url_helpers.py
   │     │  │  │  ├─ egg_link.py
   │     │  │  │  ├─ entrypoints.py
   │     │  │  │  ├─ filesystem.py
   │     │  │  │  ├─ filetypes.py
   │     │  │  │  ├─ glibc.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ packaging.py
   │     │  │  │  ├─ pylock.py
   │     │  │  │  ├─ retry.py
   │     │  │  │  ├─ subprocess.py
   │     │  │  │  ├─ temp_dir.py
   │     │  │  │  ├─ unpacking.py
   │     │  │  │  ├─ urls.py
   │     │  │  │  ├─ virtualenv.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ _jaraco_text.py
   │     │  │  │  ├─ _log.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ appdirs.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
   │     │  │  │     ├─ datetime.cpython-313.pyc
   │     │  │  │     ├─ deprecation.cpython-313.pyc
   │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
   │     │  │  │     ├─ egg_link.cpython-313.pyc
   │     │  │  │     ├─ entrypoints.cpython-313.pyc
   │     │  │  │     ├─ filesystem.cpython-313.pyc
   │     │  │  │     ├─ filetypes.cpython-313.pyc
   │     │  │  │     ├─ glibc.cpython-313.pyc
   │     │  │  │     ├─ hashes.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ misc.cpython-313.pyc
   │     │  │  │     ├─ packaging.cpython-313.pyc
   │     │  │  │     ├─ pylock.cpython-313.pyc
   │     │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │     ├─ subprocess.cpython-313.pyc
   │     │  │  │     ├─ temp_dir.cpython-313.pyc
   │     │  │  │     ├─ unpacking.cpython-313.pyc
   │     │  │  │     ├─ urls.cpython-313.pyc
   │     │  │  │     ├─ virtualenv.cpython-313.pyc
   │     │  │  │     ├─ wheel.cpython-313.pyc
   │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
   │     │  │  │     ├─ _log.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vcs
   │     │  │  │  ├─ bazaar.py
   │     │  │  │  ├─ git.py
   │     │  │  │  ├─ mercurial.py
   │     │  │  │  ├─ subversion.py
   │     │  │  │  ├─ versioncontrol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bazaar.cpython-313.pyc
   │     │  │  │     ├─ git.cpython-313.pyc
   │     │  │  │     ├─ mercurial.cpython-313.pyc
   │     │  │  │     ├─ subversion.cpython-313.pyc
   │     │  │  │     ├─ versioncontrol.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ wheel_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ build_env.cpython-313.pyc
   │     │  │     ├─ cache.cpython-313.pyc
   │     │  │     ├─ configuration.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ pyproject.cpython-313.pyc
   │     │  │     ├─ self_outdated_check.cpython-313.pyc
   │     │  │     ├─ wheel_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _vendor
   │     │  │  ├─ cachecontrol
   │     │  │  │  ├─ adapter.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ caches
   │     │  │  │  │  ├─ file_cache.py
   │     │  │  │  │  ├─ redis_cache.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ file_cache.cpython-313.pyc
   │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ controller.py
   │     │  │  │  ├─ filewrapper.py
   │     │  │  │  ├─ heuristics.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ serialize.py
   │     │  │  │  ├─ wrapper.py
   │     │  │  │  ├─ _cmd.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ adapter.cpython-313.pyc
   │     │  │  │     ├─ cache.cpython-313.pyc
   │     │  │  │     ├─ controller.cpython-313.pyc
   │     │  │  │     ├─ filewrapper.cpython-313.pyc
   │     │  │  │     ├─ heuristics.cpython-313.pyc
   │     │  │  │     ├─ serialize.cpython-313.pyc
   │     │  │  │     ├─ wrapper.cpython-313.pyc
   │     │  │  │     ├─ _cmd.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ certifi
   │     │  │  │  ├─ cacert.pem
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ dependency_groups
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _implementation.py
   │     │  │  │  ├─ _lint_dependency_groups.py
   │     │  │  │  ├─ _pip_wrapper.py
   │     │  │  │  ├─ _toml_compat.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _implementation.cpython-313.pyc
   │     │  │  │     ├─ _lint_dependency_groups.cpython-313.pyc
   │     │  │  │     ├─ _pip_wrapper.cpython-313.pyc
   │     │  │  │     ├─ _toml_compat.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ distlib
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ resources.py
   │     │  │  │  ├─ scripts.py
   │     │  │  │  ├─ t32.exe
   │     │  │  │  ├─ t64-arm.exe
   │     │  │  │  ├─ t64.exe
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ w32.exe
   │     │  │  │  ├─ w64-arm.exe
   │     │  │  │  ├─ w64.exe
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ resources.cpython-313.pyc
   │     │  │  │     ├─ scripts.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ distro
   │     │  │  │  ├─ distro.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ distro.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ idna
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ idnadata.py
   │     │  │  │  ├─ intranges.py
   │     │  │  │  ├─ LICENSE.md
   │     │  │  │  ├─ package_data.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ uts46data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ codec.cpython-313.pyc
   │     │  │  │     ├─ compat.cpython-313.pyc
   │     │  │  │     ├─ core.cpython-313.pyc
   │     │  │  │     ├─ idnadata.cpython-313.pyc
   │     │  │  │     ├─ intranges.cpython-313.pyc
   │     │  │  │     ├─ package_data.cpython-313.pyc
   │     │  │  │     ├─ uts46data.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ msgpack
   │     │  │  │  ├─ COPYING
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ ext.py
   │     │  │  │  ├─ fallback.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ ext.cpython-313.pyc
   │     │  │  │     ├─ fallback.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ packaging
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ LICENSE.APACHE
   │     │  │  │  ├─ LICENSE.BSD
   │     │  │  │  ├─ licenses
   │     │  │  │  │  ├─ _spdx.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _spdx.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ pylock.py
   │     │  │  │  ├─ requirements.py
   │     │  │  │  ├─ specifiers.py
   │     │  │  │  ├─ tags.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ _elffile.py
   │     │  │  │  ├─ _manylinux.py
   │     │  │  │  ├─ _musllinux.py
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _structures.py
   │     │  │  │  ├─ _tokenizer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ markers.cpython-313.pyc
   │     │  │  │     ├─ metadata.cpython-313.pyc
   │     │  │  │     ├─ pylock.cpython-313.pyc
   │     │  │  │     ├─ requirements.cpython-313.pyc
   │     │  │  │     ├─ specifiers.cpython-313.pyc
   │     │  │  │     ├─ tags.cpython-313.pyc
   │     │  │  │     ├─ utils.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ _elffile.cpython-313.pyc
   │     │  │  │     ├─ _manylinux.cpython-313.pyc
   │     │  │  │     ├─ _musllinux.cpython-313.pyc
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _structures.cpython-313.pyc
   │     │  │  │     ├─ _tokenizer.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pkg_resources
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ platformdirs
   │     │  │  │  ├─ android.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ macos.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ unix.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ android.cpython-313.pyc
   │     │  │  │     ├─ api.cpython-313.pyc
   │     │  │  │     ├─ macos.cpython-313.pyc
   │     │  │  │     ├─ unix.cpython-313.pyc
   │     │  │  │     ├─ version.cpython-313.pyc
   │     │  │  │     ├─ windows.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pygments
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ filter.py
   │     │  │  │  ├─ filters
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ formatter.py
   │     │  │  │  ├─ formatters
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ lexer.py
   │     │  │  │  ├─ lexers
   │     │  │  │  │  ├─ python.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ python.cpython-313.pyc
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ modeline.py
   │     │  │  │  ├─ plugin.py
   │     │  │  │  ├─ regexopt.py
   │     │  │  │  ├─ scanner.py
   │     │  │  │  ├─ sphinxext.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styles
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ token.py
   │     │  │  │  ├─ unistring.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ filter.cpython-313.pyc
   │     │  │  │     ├─ formatter.cpython-313.pyc
   │     │  │  │     ├─ lexer.cpython-313.pyc
   │     │  │  │     ├─ modeline.cpython-313.pyc
   │     │  │  │     ├─ plugin.cpython-313.pyc
   │     │  │  │     ├─ regexopt.cpython-313.pyc
   │     │  │  │     ├─ scanner.cpython-313.pyc
   │     │  │  │     ├─ sphinxext.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ token.cpython-313.pyc
   │     │  │  │     ├─ unistring.cpython-313.pyc
   │     │  │  │     ├─ util.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ pyproject_hooks
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _impl.py
   │     │  │  │  ├─ _in_process
   │     │  │  │  │  ├─ _in_process.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _in_process.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ README.rst
   │     │  │  ├─ requests
   │     │  │  │  ├─ adapters.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ certs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ cookies.py
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ hooks.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ models.py
   │     │  │  │  ├─ packages.py
   │     │  │  │  ├─ sessions.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ structures.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ _internal_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __pycache__
   │     │  │  │  │  ├─ adapters.cpython-313.pyc
   │     │  │  │  │  ├─ api.cpython-313.pyc
   │     │  │  │  │  ├─ auth.cpython-313.pyc
   │     │  │  │  │  ├─ certs.cpython-313.pyc
   │     │  │  │  │  ├─ compat.cpython-313.pyc
   │     │  │  │  │  ├─ cookies.cpython-313.pyc
   │     │  │  │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  │  │  ├─ help.cpython-313.pyc
   │     │  │  │  │  ├─ hooks.cpython-313.pyc
   │     │  │  │  │  ├─ models.cpython-313.pyc
   │     │  │  │  │  ├─ packages.cpython-313.pyc
   │     │  │  │  │  ├─ sessions.cpython-313.pyc
   │     │  │  │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  │  │  ├─ structures.cpython-313.pyc
   │     │  │  │  │  ├─ utils.cpython-313.pyc
   │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.cpython-313.pyc
   │     │  │  │  │  └─ __version__.cpython-313.pyc
   │     │  │  │  └─ __version__.py
   │     │  │  ├─ resolvelib
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ providers.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ reporters.py
   │     │  │  │  ├─ resolvers
   │     │  │  │  │  ├─ abstract.py
   │     │  │  │  │  ├─ criterion.py
   │     │  │  │  │  ├─ exceptions.py
   │     │  │  │  │  ├─ resolution.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ abstract.cpython-313.pyc
   │     │  │  │  │     ├─ criterion.cpython-313.pyc
   │     │  │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │  │     ├─ resolution.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ structs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ providers.cpython-313.pyc
   │     │  │  │     ├─ reporters.cpython-313.pyc
   │     │  │  │     ├─ structs.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ rich
   │     │  │  │  ├─ abc.py
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ ansi.py
   │     │  │  │  ├─ bar.py
   │     │  │  │  ├─ box.py
   │     │  │  │  ├─ cells.py
   │     │  │  │  ├─ color.py
   │     │  │  │  ├─ color_triplet.py
   │     │  │  │  ├─ columns.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ constrain.py
   │     │  │  │  ├─ containers.py
   │     │  │  │  ├─ control.py
   │     │  │  │  ├─ default_styles.py
   │     │  │  │  ├─ diagnose.py
   │     │  │  │  ├─ emoji.py
   │     │  │  │  ├─ errors.py
   │     │  │  │  ├─ filesize.py
   │     │  │  │  ├─ file_proxy.py
   │     │  │  │  ├─ highlighter.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ jupyter.py
   │     │  │  │  ├─ layout.py
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ live.py
   │     │  │  │  ├─ live_render.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ markup.py
   │     │  │  │  ├─ measure.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ pager.py
   │     │  │  │  ├─ palette.py
   │     │  │  │  ├─ panel.py
   │     │  │  │  ├─ pretty.py
   │     │  │  │  ├─ progress.py
   │     │  │  │  ├─ progress_bar.py
   │     │  │  │  ├─ prompt.py
   │     │  │  │  ├─ protocol.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ region.py
   │     │  │  │  ├─ repr.py
   │     │  │  │  ├─ rule.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ screen.py
   │     │  │  │  ├─ segment.py
   │     │  │  │  ├─ spinner.py
   │     │  │  │  ├─ status.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styled.py
   │     │  │  │  ├─ syntax.py
   │     │  │  │  ├─ table.py
   │     │  │  │  ├─ terminal_theme.py
   │     │  │  │  ├─ text.py
   │     │  │  │  ├─ theme.py
   │     │  │  │  ├─ themes.py
   │     │  │  │  ├─ traceback.py
   │     │  │  │  ├─ tree.py
   │     │  │  │  ├─ _cell_widths.py
   │     │  │  │  ├─ _emoji_codes.py
   │     │  │  │  ├─ _emoji_replace.py
   │     │  │  │  ├─ _export_format.py
   │     │  │  │  ├─ _extension.py
   │     │  │  │  ├─ _fileno.py
   │     │  │  │  ├─ _inspect.py
   │     │  │  │  ├─ _log_render.py
   │     │  │  │  ├─ _loop.py
   │     │  │  │  ├─ _null_file.py
   │     │  │  │  ├─ _palettes.py
   │     │  │  │  ├─ _pick.py
   │     │  │  │  ├─ _ratio.py
   │     │  │  │  ├─ _spinners.py
   │     │  │  │  ├─ _stack.py
   │     │  │  │  ├─ _timer.py
   │     │  │  │  ├─ _win32_console.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ _windows_renderer.py
   │     │  │  │  ├─ _wrap.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ abc.cpython-313.pyc
   │     │  │  │     ├─ align.cpython-313.pyc
   │     │  │  │     ├─ ansi.cpython-313.pyc
   │     │  │  │     ├─ bar.cpython-313.pyc
   │     │  │  │     ├─ box.cpython-313.pyc
   │     │  │  │     ├─ cells.cpython-313.pyc
   │     │  │  │     ├─ color.cpython-313.pyc
   │     │  │  │     ├─ color_triplet.cpython-313.pyc
   │     │  │  │     ├─ columns.cpython-313.pyc
   │     │  │  │     ├─ console.cpython-313.pyc
   │     │  │  │     ├─ constrain.cpython-313.pyc
   │     │  │  │     ├─ containers.cpython-313.pyc
   │     │  │  │     ├─ control.cpython-313.pyc
   │     │  │  │     ├─ default_styles.cpython-313.pyc
   │     │  │  │     ├─ diagnose.cpython-313.pyc
   │     │  │  │     ├─ emoji.cpython-313.pyc
   │     │  │  │     ├─ errors.cpython-313.pyc
   │     │  │  │     ├─ filesize.cpython-313.pyc
   │     │  │  │     ├─ file_proxy.cpython-313.pyc
   │     │  │  │     ├─ highlighter.cpython-313.pyc
   │     │  │  │     ├─ json.cpython-313.pyc
   │     │  │  │     ├─ jupyter.cpython-313.pyc
   │     │  │  │     ├─ layout.cpython-313.pyc
   │     │  │  │     ├─ live.cpython-313.pyc
   │     │  │  │     ├─ live_render.cpython-313.pyc
   │     │  │  │     ├─ logging.cpython-313.pyc
   │     │  │  │     ├─ markup.cpython-313.pyc
   │     │  │  │     ├─ measure.cpython-313.pyc
   │     │  │  │     ├─ padding.cpython-313.pyc
   │     │  │  │     ├─ pager.cpython-313.pyc
   │     │  │  │     ├─ palette.cpython-313.pyc
   │     │  │  │     ├─ panel.cpython-313.pyc
   │     │  │  │     ├─ pretty.cpython-313.pyc
   │     │  │  │     ├─ progress.cpython-313.pyc
   │     │  │  │     ├─ progress_bar.cpython-313.pyc
   │     │  │  │     ├─ prompt.cpython-313.pyc
   │     │  │  │     ├─ protocol.cpython-313.pyc
   │     │  │  │     ├─ region.cpython-313.pyc
   │     │  │  │     ├─ repr.cpython-313.pyc
   │     │  │  │     ├─ rule.cpython-313.pyc
   │     │  │  │     ├─ scope.cpython-313.pyc
   │     │  │  │     ├─ screen.cpython-313.pyc
   │     │  │  │     ├─ segment.cpython-313.pyc
   │     │  │  │     ├─ spinner.cpython-313.pyc
   │     │  │  │     ├─ status.cpython-313.pyc
   │     │  │  │     ├─ style.cpython-313.pyc
   │     │  │  │     ├─ styled.cpython-313.pyc
   │     │  │  │     ├─ syntax.cpython-313.pyc
   │     │  │  │     ├─ table.cpython-313.pyc
   │     │  │  │     ├─ terminal_theme.cpython-313.pyc
   │     │  │  │     ├─ text.cpython-313.pyc
   │     │  │  │     ├─ theme.cpython-313.pyc
   │     │  │  │     ├─ themes.cpython-313.pyc
   │     │  │  │     ├─ traceback.cpython-313.pyc
   │     │  │  │     ├─ tree.cpython-313.pyc
   │     │  │  │     ├─ _cell_widths.cpython-313.pyc
   │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
   │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
   │     │  │  │     ├─ _export_format.cpython-313.pyc
   │     │  │  │     ├─ _extension.cpython-313.pyc
   │     │  │  │     ├─ _fileno.cpython-313.pyc
   │     │  │  │     ├─ _inspect.cpython-313.pyc
   │     │  │  │     ├─ _log_render.cpython-313.pyc
   │     │  │  │     ├─ _loop.cpython-313.pyc
   │     │  │  │     ├─ _null_file.cpython-313.pyc
   │     │  │  │     ├─ _palettes.cpython-313.pyc
   │     │  │  │     ├─ _pick.cpython-313.pyc
   │     │  │  │     ├─ _ratio.cpython-313.pyc
   │     │  │  │     ├─ _spinners.cpython-313.pyc
   │     │  │  │     ├─ _stack.cpython-313.pyc
   │     │  │  │     ├─ _timer.cpython-313.pyc
   │     │  │  │     ├─ _win32_console.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
   │     │  │  │     ├─ _wrap.cpython-313.pyc
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ tomli
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _re.py
   │     │  │  │  ├─ _types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _parser.cpython-313.pyc
   │     │  │  │     ├─ _re.cpython-313.pyc
   │     │  │  │     ├─ _types.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ tomli_w
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _writer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _writer.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ truststore
   │     │  │  │  ├─ LICENSE
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _api.py
   │     │  │  │  ├─ _macos.py
   │     │  │  │  ├─ _openssl.py
   │     │  │  │  ├─ _ssl_constants.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _api.cpython-313.pyc
   │     │  │  │     ├─ _macos.cpython-313.pyc
   │     │  │  │     ├─ _openssl.cpython-313.pyc
   │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
   │     │  │  │     ├─ _windows.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ urllib3
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ connectionpool.py
   │     │  │  │  ├─ contrib
   │     │  │  │  │  ├─ appengine.py
   │     │  │  │  │  ├─ ntlmpool.py
   │     │  │  │  │  ├─ pyopenssl.py
   │     │  │  │  │  ├─ securetransport.py
   │     │  │  │  │  ├─ socks.py
   │     │  │  │  │  ├─ _appengine_environ.py
   │     │  │  │  │  ├─ _securetransport
   │     │  │  │  │  │  ├─ bindings.py
   │     │  │  │  │  │  ├─ low_level.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
   │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ appengine.cpython-313.pyc
   │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
   │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │  │  │     ├─ securetransport.cpython-313.pyc
   │     │  │  │  │     ├─ socks.cpython-313.pyc
   │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ fields.py
   │     │  │  │  ├─ filepost.py
   │     │  │  │  ├─ LICENSE.txt
   │     │  │  │  ├─ packages
   │     │  │  │  │  ├─ backports
   │     │  │  │  │  │  ├─ makefile.py
   │     │  │  │  │  │  ├─ weakref_finalize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
   │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
   │     │  │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  │  ├─ six.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ six.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ poolmanager.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ util
   │     │  │  │  │  ├─ connection.py
   │     │  │  │  │  ├─ proxy.py
   │     │  │  │  │  ├─ queue.py
   │     │  │  │  │  ├─ request.py
   │     │  │  │  │  ├─ response.py
   │     │  │  │  │  ├─ retry.py
   │     │  │  │  │  ├─ ssltransport.py
   │     │  │  │  │  ├─ ssl_.py
   │     │  │  │  │  ├─ ssl_match_hostname.py
   │     │  │  │  │  ├─ timeout.py
   │     │  │  │  │  ├─ url.py
   │     │  │  │  │  ├─ wait.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │  │     ├─ proxy.cpython-313.pyc
   │     │  │  │  │     ├─ queue.cpython-313.pyc
   │     │  │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │  │     ├─ retry.cpython-313.pyc
   │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_.cpython-313.pyc
   │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │  │  │     ├─ timeout.cpython-313.pyc
   │     │  │  │  │     ├─ url.cpython-313.pyc
   │     │  │  │  │     ├─ wait.cpython-313.pyc
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ _collections.py
   │     │  │  │  ├─ _version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ connectionpool.cpython-313.pyc
   │     │  │  │     ├─ exceptions.cpython-313.pyc
   │     │  │  │     ├─ fields.cpython-313.pyc
   │     │  │  │     ├─ filepost.cpython-313.pyc
   │     │  │  │     ├─ poolmanager.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     ├─ _collections.cpython-313.pyc
   │     │  │  │     ├─ _version.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ vendor.txt
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  ├─ __pip-runner__.py
   │     │  └─ __pycache__
   │     │     ├─ __init__.cpython-313.pyc
   │     │     ├─ __main__.cpython-313.pyc
   │     │     └─ __pip-runner__.cpython-313.pyc
   │     ├─ pip-26.0.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS.txt
   │     │  │  ├─ LICENSE.txt
   │     │  │  └─ src
   │     │  │     └─ pip
   │     │  │        └─ _vendor
   │     │  │           ├─ cachecontrol
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ certifi
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ dependency_groups
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ distlib
   │     │  │           │  └─ LICENSE.txt
   │     │  │           ├─ distro
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ idna
   │     │  │           │  └─ LICENSE.md
   │     │  │           ├─ msgpack
   │     │  │           │  └─ COPYING
   │     │  │           ├─ packaging
   │     │  │           │  ├─ LICENSE
   │     │  │           │  ├─ LICENSE.APACHE
   │     │  │           │  └─ LICENSE.BSD
   │     │  │           ├─ pkg_resources
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ platformdirs
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ pygments
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ pyproject_hooks
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ requests
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ resolvelib
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ rich
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ tomli
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ tomli_w
   │     │  │           │  └─ LICENSE
   │     │  │           ├─ truststore
   │     │  │           │  └─ LICENSE
   │     │  │           └─ urllib3
   │     │  │              └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ postgrest
   │     │  ├─ base_client.py
   │     │  ├─ base_request_builder.py
   │     │  ├─ constants.py
   │     │  ├─ exceptions.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ client.py
   │     │  │  ├─ request_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ request_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ client.py
   │     │  │  ├─ request_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ request_builder.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ base_client.cpython-313.pyc
   │     │     ├─ base_request_builder.cpython-313.pyc
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ postgrest-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ propcache
   │     │  ├─ api.py
   │     │  ├─ py.typed
   │     │  ├─ _helpers.py
   │     │  ├─ _helpers_c.cp313-win_amd64.pyd
   │     │  ├─ _helpers_c.pyx
   │     │  ├─ _helpers_py.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-313.pyc
   │     │     ├─ _helpers.cpython-313.pyc
   │     │     ├─ _helpers_py.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ propcache-0.4.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pycparser
   │     │  ├─ ast_transforms.py
   │     │  ├─ c_ast.py
   │     │  ├─ c_generator.py
   │     │  ├─ c_lexer.py
   │     │  ├─ c_parser.py
   │     │  ├─ _ast_gen.py
   │     │  ├─ _c_ast.cfg
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ast_transforms.cpython-313.pyc
   │     │     ├─ c_ast.cpython-313.pyc
   │     │     ├─ c_generator.cpython-313.pyc
   │     │     ├─ c_lexer.cpython-313.pyc
   │     │     ├─ c_parser.cpython-313.pyc
   │     │     ├─ _ast_gen.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pycparser-3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pydantic
   │     │  ├─ aliases.py
   │     │  ├─ alias_generators.py
   │     │  ├─ annotated_handlers.py
   │     │  ├─ class_validators.py
   │     │  ├─ color.py
   │     │  ├─ config.py
   │     │  ├─ dataclasses.py
   │     │  ├─ datetime_parse.py
   │     │  ├─ decorator.py
   │     │  ├─ deprecated
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ config.py
   │     │  │  ├─ copy_internals.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ json.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ copy_internals.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ env_settings.py
   │     │  ├─ errors.py
   │     │  ├─ error_wrappers.py
   │     │  ├─ experimental
   │     │  │  ├─ arguments_schema.py
   │     │  │  ├─ missing_sentinel.py
   │     │  │  ├─ pipeline.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ arguments_schema.cpython-313.pyc
   │     │  │     ├─ missing_sentinel.cpython-313.pyc
   │     │  │     ├─ pipeline.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ fields.py
   │     │  ├─ functional_serializers.py
   │     │  ├─ functional_validators.py
   │     │  ├─ generics.py
   │     │  ├─ json.py
   │     │  ├─ json_schema.py
   │     │  ├─ main.py
   │     │  ├─ mypy.py
   │     │  ├─ networks.py
   │     │  ├─ parse.py
   │     │  ├─ plugin
   │     │  │  ├─ _loader.py
   │     │  │  ├─ _schema_validator.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _loader.cpython-313.pyc
   │     │  │     ├─ _schema_validator.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ root_model.py
   │     │  ├─ schema.py
   │     │  ├─ tools.py
   │     │  ├─ types.py
   │     │  ├─ type_adapter.py
   │     │  ├─ typing.py
   │     │  ├─ utils.py
   │     │  ├─ v1
   │     │  │  ├─ annotated_types.py
   │     │  │  ├─ class_validators.py
   │     │  │  ├─ color.py
   │     │  │  ├─ config.py
   │     │  │  ├─ dataclasses.py
   │     │  │  ├─ datetime_parse.py
   │     │  │  ├─ decorator.py
   │     │  │  ├─ env_settings.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ error_wrappers.py
   │     │  │  ├─ fields.py
   │     │  │  ├─ generics.py
   │     │  │  ├─ json.py
   │     │  │  ├─ main.py
   │     │  │  ├─ mypy.py
   │     │  │  ├─ networks.py
   │     │  │  ├─ parse.py
   │     │  │  ├─ py.typed
   │     │  │  ├─ schema.py
   │     │  │  ├─ tools.py
   │     │  │  ├─ types.py
   │     │  │  ├─ typing.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ validators.py
   │     │  │  ├─ version.py
   │     │  │  ├─ _hypothesis_plugin.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ annotated_types.cpython-313.pyc
   │     │  │     ├─ class_validators.cpython-313.pyc
   │     │  │     ├─ color.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ dataclasses.cpython-313.pyc
   │     │  │     ├─ datetime_parse.cpython-313.pyc
   │     │  │     ├─ decorator.cpython-313.pyc
   │     │  │     ├─ env_settings.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ error_wrappers.cpython-313.pyc
   │     │  │     ├─ fields.cpython-313.pyc
   │     │  │     ├─ generics.cpython-313.pyc
   │     │  │     ├─ json.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ mypy.cpython-313.pyc
   │     │  │     ├─ networks.cpython-313.pyc
   │     │  │     ├─ parse.cpython-313.pyc
   │     │  │     ├─ schema.cpython-313.pyc
   │     │  │     ├─ tools.cpython-313.pyc
   │     │  │     ├─ types.cpython-313.pyc
   │     │  │     ├─ typing.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     ├─ validators.cpython-313.pyc
   │     │  │     ├─ version.cpython-313.pyc
   │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ validate_call_decorator.py
   │     │  ├─ validators.py
   │     │  ├─ version.py
   │     │  ├─ warnings.py
   │     │  ├─ _internal
   │     │  │  ├─ _config.py
   │     │  │  ├─ _core_metadata.py
   │     │  │  ├─ _core_utils.py
   │     │  │  ├─ _dataclasses.py
   │     │  │  ├─ _decorators.py
   │     │  │  ├─ _decorators_v1.py
   │     │  │  ├─ _discriminated_union.py
   │     │  │  ├─ _docs_extraction.py
   │     │  │  ├─ _fields.py
   │     │  │  ├─ _forward_ref.py
   │     │  │  ├─ _generate_schema.py
   │     │  │  ├─ _generics.py
   │     │  │  ├─ _git.py
   │     │  │  ├─ _import_utils.py
   │     │  │  ├─ _internal_dataclass.py
   │     │  │  ├─ _known_annotated_metadata.py
   │     │  │  ├─ _mock_val_ser.py
   │     │  │  ├─ _model_construction.py
   │     │  │  ├─ _namespace_utils.py
   │     │  │  ├─ _repr.py
   │     │  │  ├─ _schema_gather.py
   │     │  │  ├─ _schema_generation_shared.py
   │     │  │  ├─ _serializers.py
   │     │  │  ├─ _signature.py
   │     │  │  ├─ _typing_extra.py
   │     │  │  ├─ _utils.py
   │     │  │  ├─ _validate_call.py
   │     │  │  ├─ _validators.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ _config.cpython-313.pyc
   │     │  │     ├─ _core_metadata.cpython-313.pyc
   │     │  │     ├─ _core_utils.cpython-313.pyc
   │     │  │     ├─ _dataclasses.cpython-313.pyc
   │     │  │     ├─ _decorators.cpython-313.pyc
   │     │  │     ├─ _decorators_v1.cpython-313.pyc
   │     │  │     ├─ _discriminated_union.cpython-313.pyc
   │     │  │     ├─ _docs_extraction.cpython-313.pyc
   │     │  │     ├─ _fields.cpython-313.pyc
   │     │  │     ├─ _forward_ref.cpython-313.pyc
   │     │  │     ├─ _generate_schema.cpython-313.pyc
   │     │  │     ├─ _generics.cpython-313.pyc
   │     │  │     ├─ _git.cpython-313.pyc
   │     │  │     ├─ _import_utils.cpython-313.pyc
   │     │  │     ├─ _internal_dataclass.cpython-313.pyc
   │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
   │     │  │     ├─ _mock_val_ser.cpython-313.pyc
   │     │  │     ├─ _model_construction.cpython-313.pyc
   │     │  │     ├─ _namespace_utils.cpython-313.pyc
   │     │  │     ├─ _repr.cpython-313.pyc
   │     │  │     ├─ _schema_gather.cpython-313.pyc
   │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
   │     │  │     ├─ _serializers.cpython-313.pyc
   │     │  │     ├─ _signature.cpython-313.pyc
   │     │  │     ├─ _typing_extra.cpython-313.pyc
   │     │  │     ├─ _utils.cpython-313.pyc
   │     │  │     ├─ _validate_call.cpython-313.pyc
   │     │  │     ├─ _validators.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _migration.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ aliases.cpython-313.pyc
   │     │     ├─ alias_generators.cpython-313.pyc
   │     │     ├─ annotated_handlers.cpython-313.pyc
   │     │     ├─ class_validators.cpython-313.pyc
   │     │     ├─ color.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ dataclasses.cpython-313.pyc
   │     │     ├─ datetime_parse.cpython-313.pyc
   │     │     ├─ decorator.cpython-313.pyc
   │     │     ├─ env_settings.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ error_wrappers.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ functional_serializers.cpython-313.pyc
   │     │     ├─ functional_validators.cpython-313.pyc
   │     │     ├─ generics.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ json_schema.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ mypy.cpython-313.pyc
   │     │     ├─ networks.cpython-313.pyc
   │     │     ├─ parse.cpython-313.pyc
   │     │     ├─ root_model.cpython-313.pyc
   │     │     ├─ schema.cpython-313.pyc
   │     │     ├─ tools.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ type_adapter.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ validate_call_decorator.cpython-313.pyc
   │     │     ├─ validators.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     ├─ _migration.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic-2.12.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pydantic_core
   │     │  ├─ core_schema.py
   │     │  ├─ py.typed
   │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
   │     │  ├─ _pydantic_core.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core_schema.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pydantic_core-2.41.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pygments
   │     │  ├─ cmdline.py
   │     │  ├─ console.py
   │     │  ├─ filter.py
   │     │  ├─ filters
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ formatter.py
   │     │  ├─ formatters
   │     │  │  ├─ bbcode.py
   │     │  │  ├─ groff.py
   │     │  │  ├─ html.py
   │     │  │  ├─ img.py
   │     │  │  ├─ irc.py
   │     │  │  ├─ latex.py
   │     │  │  ├─ other.py
   │     │  │  ├─ pangomarkup.py
   │     │  │  ├─ rtf.py
   │     │  │  ├─ svg.py
   │     │  │  ├─ terminal.py
   │     │  │  ├─ terminal256.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bbcode.cpython-313.pyc
   │     │  │     ├─ groff.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ img.cpython-313.pyc
   │     │  │     ├─ irc.cpython-313.pyc
   │     │  │     ├─ latex.cpython-313.pyc
   │     │  │     ├─ other.cpython-313.pyc
   │     │  │     ├─ pangomarkup.cpython-313.pyc
   │     │  │     ├─ rtf.cpython-313.pyc
   │     │  │     ├─ svg.cpython-313.pyc
   │     │  │     ├─ terminal.cpython-313.pyc
   │     │  │     ├─ terminal256.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ lexer.py
   │     │  ├─ lexers
   │     │  │  ├─ actionscript.py
   │     │  │  ├─ ada.py
   │     │  │  ├─ agile.py
   │     │  │  ├─ algebra.py
   │     │  │  ├─ ambient.py
   │     │  │  ├─ amdgpu.py
   │     │  │  ├─ ampl.py
   │     │  │  ├─ apdlexer.py
   │     │  │  ├─ apl.py
   │     │  │  ├─ archetype.py
   │     │  │  ├─ arrow.py
   │     │  │  ├─ arturo.py
   │     │  │  ├─ asc.py
   │     │  │  ├─ asm.py
   │     │  │  ├─ asn1.py
   │     │  │  ├─ automation.py
   │     │  │  ├─ bare.py
   │     │  │  ├─ basic.py
   │     │  │  ├─ bdd.py
   │     │  │  ├─ berry.py
   │     │  │  ├─ bibtex.py
   │     │  │  ├─ blueprint.py
   │     │  │  ├─ boa.py
   │     │  │  ├─ bqn.py
   │     │  │  ├─ business.py
   │     │  │  ├─ capnproto.py
   │     │  │  ├─ carbon.py
   │     │  │  ├─ cddl.py
   │     │  │  ├─ chapel.py
   │     │  │  ├─ clean.py
   │     │  │  ├─ codeql.py
   │     │  │  ├─ comal.py
   │     │  │  ├─ compiled.py
   │     │  │  ├─ configs.py
   │     │  │  ├─ console.py
   │     │  │  ├─ cplint.py
   │     │  │  ├─ crystal.py
   │     │  │  ├─ csound.py
   │     │  │  ├─ css.py
   │     │  │  ├─ c_cpp.py
   │     │  │  ├─ c_like.py
   │     │  │  ├─ d.py
   │     │  │  ├─ dalvik.py
   │     │  │  ├─ data.py
   │     │  │  ├─ dax.py
   │     │  │  ├─ devicetree.py
   │     │  │  ├─ diff.py
   │     │  │  ├─ dns.py
   │     │  │  ├─ dotnet.py
   │     │  │  ├─ dsls.py
   │     │  │  ├─ dylan.py
   │     │  │  ├─ ecl.py
   │     │  │  ├─ eiffel.py
   │     │  │  ├─ elm.py
   │     │  │  ├─ elpi.py
   │     │  │  ├─ email.py
   │     │  │  ├─ erlang.py
   │     │  │  ├─ esoteric.py
   │     │  │  ├─ ezhil.py
   │     │  │  ├─ factor.py
   │     │  │  ├─ fantom.py
   │     │  │  ├─ felix.py
   │     │  │  ├─ fift.py
   │     │  │  ├─ floscript.py
   │     │  │  ├─ forth.py
   │     │  │  ├─ fortran.py
   │     │  │  ├─ foxpro.py
   │     │  │  ├─ freefem.py
   │     │  │  ├─ func.py
   │     │  │  ├─ functional.py
   │     │  │  ├─ futhark.py
   │     │  │  ├─ gcodelexer.py
   │     │  │  ├─ gdscript.py
   │     │  │  ├─ gleam.py
   │     │  │  ├─ go.py
   │     │  │  ├─ grammar_notation.py
   │     │  │  ├─ graph.py
   │     │  │  ├─ graphics.py
   │     │  │  ├─ graphql.py
   │     │  │  ├─ graphviz.py
   │     │  │  ├─ gsql.py
   │     │  │  ├─ hare.py
   │     │  │  ├─ haskell.py
   │     │  │  ├─ haxe.py
   │     │  │  ├─ hdl.py
   │     │  │  ├─ hexdump.py
   │     │  │  ├─ html.py
   │     │  │  ├─ idl.py
   │     │  │  ├─ igor.py
   │     │  │  ├─ inferno.py
   │     │  │  ├─ installers.py
   │     │  │  ├─ int_fiction.py
   │     │  │  ├─ iolang.py
   │     │  │  ├─ j.py
   │     │  │  ├─ javascript.py
   │     │  │  ├─ jmespath.py
   │     │  │  ├─ jslt.py
   │     │  │  ├─ json5.py
   │     │  │  ├─ jsonnet.py
   │     │  │  ├─ jsx.py
   │     │  │  ├─ julia.py
   │     │  │  ├─ jvm.py
   │     │  │  ├─ kuin.py
   │     │  │  ├─ kusto.py
   │     │  │  ├─ ldap.py
   │     │  │  ├─ lean.py
   │     │  │  ├─ lilypond.py
   │     │  │  ├─ lisp.py
   │     │  │  ├─ macaulay2.py
   │     │  │  ├─ make.py
   │     │  │  ├─ maple.py
   │     │  │  ├─ markup.py
   │     │  │  ├─ math.py
   │     │  │  ├─ matlab.py
   │     │  │  ├─ maxima.py
   │     │  │  ├─ meson.py
   │     │  │  ├─ mime.py
   │     │  │  ├─ minecraft.py
   │     │  │  ├─ mips.py
   │     │  │  ├─ ml.py
   │     │  │  ├─ modeling.py
   │     │  │  ├─ modula2.py
   │     │  │  ├─ mojo.py
   │     │  │  ├─ monte.py
   │     │  │  ├─ mosel.py
   │     │  │  ├─ ncl.py
   │     │  │  ├─ nimrod.py
   │     │  │  ├─ nit.py
   │     │  │  ├─ nix.py
   │     │  │  ├─ numbair.py
   │     │  │  ├─ oberon.py
   │     │  │  ├─ objective.py
   │     │  │  ├─ ooc.py
   │     │  │  ├─ openscad.py
   │     │  │  ├─ other.py
   │     │  │  ├─ parasail.py
   │     │  │  ├─ parsers.py
   │     │  │  ├─ pascal.py
   │     │  │  ├─ pawn.py
   │     │  │  ├─ pddl.py
   │     │  │  ├─ perl.py
   │     │  │  ├─ phix.py
   │     │  │  ├─ php.py
   │     │  │  ├─ pointless.py
   │     │  │  ├─ pony.py
   │     │  │  ├─ praat.py
   │     │  │  ├─ procfile.py
   │     │  │  ├─ prolog.py
   │     │  │  ├─ promql.py
   │     │  │  ├─ prql.py
   │     │  │  ├─ ptx.py
   │     │  │  ├─ python.py
   │     │  │  ├─ q.py
   │     │  │  ├─ qlik.py
   │     │  │  ├─ qvt.py
   │     │  │  ├─ r.py
   │     │  │  ├─ rdf.py
   │     │  │  ├─ rebol.py
   │     │  │  ├─ rego.py
   │     │  │  ├─ resource.py
   │     │  │  ├─ ride.py
   │     │  │  ├─ rita.py
   │     │  │  ├─ rnc.py
   │     │  │  ├─ roboconf.py
   │     │  │  ├─ robotframework.py
   │     │  │  ├─ ruby.py
   │     │  │  ├─ rust.py
   │     │  │  ├─ sas.py
   │     │  │  ├─ savi.py
   │     │  │  ├─ scdoc.py
   │     │  │  ├─ scripting.py
   │     │  │  ├─ sgf.py
   │     │  │  ├─ shell.py
   │     │  │  ├─ sieve.py
   │     │  │  ├─ slash.py
   │     │  │  ├─ smalltalk.py
   │     │  │  ├─ smithy.py
   │     │  │  ├─ smv.py
   │     │  │  ├─ snobol.py
   │     │  │  ├─ solidity.py
   │     │  │  ├─ soong.py
   │     │  │  ├─ sophia.py
   │     │  │  ├─ special.py
   │     │  │  ├─ spice.py
   │     │  │  ├─ sql.py
   │     │  │  ├─ srcinfo.py
   │     │  │  ├─ stata.py
   │     │  │  ├─ supercollider.py
   │     │  │  ├─ tablegen.py
   │     │  │  ├─ tact.py
   │     │  │  ├─ tal.py
   │     │  │  ├─ tcl.py
   │     │  │  ├─ teal.py
   │     │  │  ├─ templates.py
   │     │  │  ├─ teraterm.py
   │     │  │  ├─ testing.py
   │     │  │  ├─ text.py
   │     │  │  ├─ textedit.py
   │     │  │  ├─ textfmts.py
   │     │  │  ├─ theorem.py
   │     │  │  ├─ thingsdb.py
   │     │  │  ├─ tlb.py
   │     │  │  ├─ tls.py
   │     │  │  ├─ tnt.py
   │     │  │  ├─ trafficscript.py
   │     │  │  ├─ typoscript.py
   │     │  │  ├─ typst.py
   │     │  │  ├─ ul4.py
   │     │  │  ├─ unicon.py
   │     │  │  ├─ urbi.py
   │     │  │  ├─ usd.py
   │     │  │  ├─ varnish.py
   │     │  │  ├─ verification.py
   │     │  │  ├─ verifpal.py
   │     │  │  ├─ vip.py
   │     │  │  ├─ vyper.py
   │     │  │  ├─ web.py
   │     │  │  ├─ webassembly.py
   │     │  │  ├─ webidl.py
   │     │  │  ├─ webmisc.py
   │     │  │  ├─ wgsl.py
   │     │  │  ├─ whiley.py
   │     │  │  ├─ wowtoc.py
   │     │  │  ├─ wren.py
   │     │  │  ├─ x10.py
   │     │  │  ├─ xorg.py
   │     │  │  ├─ yang.py
   │     │  │  ├─ yara.py
   │     │  │  ├─ zig.py
   │     │  │  ├─ _ada_builtins.py
   │     │  │  ├─ _asy_builtins.py
   │     │  │  ├─ _cl_builtins.py
   │     │  │  ├─ _cocoa_builtins.py
   │     │  │  ├─ _csound_builtins.py
   │     │  │  ├─ _css_builtins.py
   │     │  │  ├─ _googlesql_builtins.py
   │     │  │  ├─ _julia_builtins.py
   │     │  │  ├─ _lasso_builtins.py
   │     │  │  ├─ _lilypond_builtins.py
   │     │  │  ├─ _luau_builtins.py
   │     │  │  ├─ _lua_builtins.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ _mql_builtins.py
   │     │  │  ├─ _mysql_builtins.py
   │     │  │  ├─ _openedge_builtins.py
   │     │  │  ├─ _php_builtins.py
   │     │  │  ├─ _postgres_builtins.py
   │     │  │  ├─ _qlik_builtins.py
   │     │  │  ├─ _scheme_builtins.py
   │     │  │  ├─ _scilab_builtins.py
   │     │  │  ├─ _sourcemod_builtins.py
   │     │  │  ├─ _sql_builtins.py
   │     │  │  ├─ _stan_builtins.py
   │     │  │  ├─ _stata_builtins.py
   │     │  │  ├─ _tsql_builtins.py
   │     │  │  ├─ _usd_builtins.py
   │     │  │  ├─ _vbscript_builtins.py
   │     │  │  ├─ _vim_builtins.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ actionscript.cpython-313.pyc
   │     │  │     ├─ ada.cpython-313.pyc
   │     │  │     ├─ agile.cpython-313.pyc
   │     │  │     ├─ algebra.cpython-313.pyc
   │     │  │     ├─ ambient.cpython-313.pyc
   │     │  │     ├─ amdgpu.cpython-313.pyc
   │     │  │     ├─ ampl.cpython-313.pyc
   │     │  │     ├─ apdlexer.cpython-313.pyc
   │     │  │     ├─ apl.cpython-313.pyc
   │     │  │     ├─ archetype.cpython-313.pyc
   │     │  │     ├─ arrow.cpython-313.pyc
   │     │  │     ├─ arturo.cpython-313.pyc
   │     │  │     ├─ asc.cpython-313.pyc
   │     │  │     ├─ asm.cpython-313.pyc
   │     │  │     ├─ asn1.cpython-313.pyc
   │     │  │     ├─ automation.cpython-313.pyc
   │     │  │     ├─ bare.cpython-313.pyc
   │     │  │     ├─ basic.cpython-313.pyc
   │     │  │     ├─ bdd.cpython-313.pyc
   │     │  │     ├─ berry.cpython-313.pyc
   │     │  │     ├─ bibtex.cpython-313.pyc
   │     │  │     ├─ blueprint.cpython-313.pyc
   │     │  │     ├─ boa.cpython-313.pyc
   │     │  │     ├─ bqn.cpython-313.pyc
   │     │  │     ├─ business.cpython-313.pyc
   │     │  │     ├─ capnproto.cpython-313.pyc
   │     │  │     ├─ carbon.cpython-313.pyc
   │     │  │     ├─ cddl.cpython-313.pyc
   │     │  │     ├─ chapel.cpython-313.pyc
   │     │  │     ├─ clean.cpython-313.pyc
   │     │  │     ├─ codeql.cpython-313.pyc
   │     │  │     ├─ comal.cpython-313.pyc
   │     │  │     ├─ compiled.cpython-313.pyc
   │     │  │     ├─ configs.cpython-313.pyc
   │     │  │     ├─ console.cpython-313.pyc
   │     │  │     ├─ cplint.cpython-313.pyc
   │     │  │     ├─ crystal.cpython-313.pyc
   │     │  │     ├─ csound.cpython-313.pyc
   │     │  │     ├─ css.cpython-313.pyc
   │     │  │     ├─ c_cpp.cpython-313.pyc
   │     │  │     ├─ c_like.cpython-313.pyc
   │     │  │     ├─ d.cpython-313.pyc
   │     │  │     ├─ dalvik.cpython-313.pyc
   │     │  │     ├─ data.cpython-313.pyc
   │     │  │     ├─ dax.cpython-313.pyc
   │     │  │     ├─ devicetree.cpython-313.pyc
   │     │  │     ├─ diff.cpython-313.pyc
   │     │  │     ├─ dns.cpython-313.pyc
   │     │  │     ├─ dotnet.cpython-313.pyc
   │     │  │     ├─ dsls.cpython-313.pyc
   │     │  │     ├─ dylan.cpython-313.pyc
   │     │  │     ├─ ecl.cpython-313.pyc
   │     │  │     ├─ eiffel.cpython-313.pyc
   │     │  │     ├─ elm.cpython-313.pyc
   │     │  │     ├─ elpi.cpython-313.pyc
   │     │  │     ├─ email.cpython-313.pyc
   │     │  │     ├─ erlang.cpython-313.pyc
   │     │  │     ├─ esoteric.cpython-313.pyc
   │     │  │     ├─ ezhil.cpython-313.pyc
   │     │  │     ├─ factor.cpython-313.pyc
   │     │  │     ├─ fantom.cpython-313.pyc
   │     │  │     ├─ felix.cpython-313.pyc
   │     │  │     ├─ fift.cpython-313.pyc
   │     │  │     ├─ floscript.cpython-313.pyc
   │     │  │     ├─ forth.cpython-313.pyc
   │     │  │     ├─ fortran.cpython-313.pyc
   │     │  │     ├─ foxpro.cpython-313.pyc
   │     │  │     ├─ freefem.cpython-313.pyc
   │     │  │     ├─ func.cpython-313.pyc
   │     │  │     ├─ functional.cpython-313.pyc
   │     │  │     ├─ futhark.cpython-313.pyc
   │     │  │     ├─ gcodelexer.cpython-313.pyc
   │     │  │     ├─ gdscript.cpython-313.pyc
   │     │  │     ├─ gleam.cpython-313.pyc
   │     │  │     ├─ go.cpython-313.pyc
   │     │  │     ├─ grammar_notation.cpython-313.pyc
   │     │  │     ├─ graph.cpython-313.pyc
   │     │  │     ├─ graphics.cpython-313.pyc
   │     │  │     ├─ graphql.cpython-313.pyc
   │     │  │     ├─ graphviz.cpython-313.pyc
   │     │  │     ├─ gsql.cpython-313.pyc
   │     │  │     ├─ hare.cpython-313.pyc
   │     │  │     ├─ haskell.cpython-313.pyc
   │     │  │     ├─ haxe.cpython-313.pyc
   │     │  │     ├─ hdl.cpython-313.pyc
   │     │  │     ├─ hexdump.cpython-313.pyc
   │     │  │     ├─ html.cpython-313.pyc
   │     │  │     ├─ idl.cpython-313.pyc
   │     │  │     ├─ igor.cpython-313.pyc
   │     │  │     ├─ inferno.cpython-313.pyc
   │     │  │     ├─ installers.cpython-313.pyc
   │     │  │     ├─ int_fiction.cpython-313.pyc
   │     │  │     ├─ iolang.cpython-313.pyc
   │     │  │     ├─ j.cpython-313.pyc
   │     │  │     ├─ javascript.cpython-313.pyc
   │     │  │     ├─ jmespath.cpython-313.pyc
   │     │  │     ├─ jslt.cpython-313.pyc
   │     │  │     ├─ json5.cpython-313.pyc
   │     │  │     ├─ jsonnet.cpython-313.pyc
   │     │  │     ├─ jsx.cpython-313.pyc
   │     │  │     ├─ julia.cpython-313.pyc
   │     │  │     ├─ jvm.cpython-313.pyc
   │     │  │     ├─ kuin.cpython-313.pyc
   │     │  │     ├─ kusto.cpython-313.pyc
   │     │  │     ├─ ldap.cpython-313.pyc
   │     │  │     ├─ lean.cpython-313.pyc
   │     │  │     ├─ lilypond.cpython-313.pyc
   │     │  │     ├─ lisp.cpython-313.pyc
   │     │  │     ├─ macaulay2.cpython-313.pyc
   │     │  │     ├─ make.cpython-313.pyc
   │     │  │     ├─ maple.cpython-313.pyc
   │     │  │     ├─ markup.cpython-313.pyc
   │     │  │     ├─ math.cpython-313.pyc
   │     │  │     ├─ matlab.cpython-313.pyc
   │     │  │     ├─ maxima.cpython-313.pyc
   │     │  │     ├─ meson.cpython-313.pyc
   │     │  │     ├─ mime.cpython-313.pyc
   │     │  │     ├─ minecraft.cpython-313.pyc
   │     │  │     ├─ mips.cpython-313.pyc
   │     │  │     ├─ ml.cpython-313.pyc
   │     │  │     ├─ modeling.cpython-313.pyc
   │     │  │     ├─ modula2.cpython-313.pyc
   │     │  │     ├─ mojo.cpython-313.pyc
   │     │  │     ├─ monte.cpython-313.pyc
   │     │  │     ├─ mosel.cpython-313.pyc
   │     │  │     ├─ ncl.cpython-313.pyc
   │     │  │     ├─ nimrod.cpython-313.pyc
   │     │  │     ├─ nit.cpython-313.pyc
   │     │  │     ├─ nix.cpython-313.pyc
   │     │  │     ├─ numbair.cpython-313.pyc
   │     │  │     ├─ oberon.cpython-313.pyc
   │     │  │     ├─ objective.cpython-313.pyc
   │     │  │     ├─ ooc.cpython-313.pyc
   │     │  │     ├─ openscad.cpython-313.pyc
   │     │  │     ├─ other.cpython-313.pyc
   │     │  │     ├─ parasail.cpython-313.pyc
   │     │  │     ├─ parsers.cpython-313.pyc
   │     │  │     ├─ pascal.cpython-313.pyc
   │     │  │     ├─ pawn.cpython-313.pyc
   │     │  │     ├─ pddl.cpython-313.pyc
   │     │  │     ├─ perl.cpython-313.pyc
   │     │  │     ├─ phix.cpython-313.pyc
   │     │  │     ├─ php.cpython-313.pyc
   │     │  │     ├─ pointless.cpython-313.pyc
   │     │  │     ├─ pony.cpython-313.pyc
   │     │  │     ├─ praat.cpython-313.pyc
   │     │  │     ├─ procfile.cpython-313.pyc
   │     │  │     ├─ prolog.cpython-313.pyc
   │     │  │     ├─ promql.cpython-313.pyc
   │     │  │     ├─ prql.cpython-313.pyc
   │     │  │     ├─ ptx.cpython-313.pyc
   │     │  │     ├─ python.cpython-313.pyc
   │     │  │     ├─ q.cpython-313.pyc
   │     │  │     ├─ qlik.cpython-313.pyc
   │     │  │     ├─ qvt.cpython-313.pyc
   │     │  │     ├─ r.cpython-313.pyc
   │     │  │     ├─ rdf.cpython-313.pyc
   │     │  │     ├─ rebol.cpython-313.pyc
   │     │  │     ├─ rego.cpython-313.pyc
   │     │  │     ├─ resource.cpython-313.pyc
   │     │  │     ├─ ride.cpython-313.pyc
   │     │  │     ├─ rita.cpython-313.pyc
   │     │  │     ├─ rnc.cpython-313.pyc
   │     │  │     ├─ roboconf.cpython-313.pyc
   │     │  │     ├─ robotframework.cpython-313.pyc
   │     │  │     ├─ ruby.cpython-313.pyc
   │     │  │     ├─ rust.cpython-313.pyc
   │     │  │     ├─ sas.cpython-313.pyc
   │     │  │     ├─ savi.cpython-313.pyc
   │     │  │     ├─ scdoc.cpython-313.pyc
   │     │  │     ├─ scripting.cpython-313.pyc
   │     │  │     ├─ sgf.cpython-313.pyc
   │     │  │     ├─ shell.cpython-313.pyc
   │     │  │     ├─ sieve.cpython-313.pyc
   │     │  │     ├─ slash.cpython-313.pyc
   │     │  │     ├─ smalltalk.cpython-313.pyc
   │     │  │     ├─ smithy.cpython-313.pyc
   │     │  │     ├─ smv.cpython-313.pyc
   │     │  │     ├─ snobol.cpython-313.pyc
   │     │  │     ├─ solidity.cpython-313.pyc
   │     │  │     ├─ soong.cpython-313.pyc
   │     │  │     ├─ sophia.cpython-313.pyc
   │     │  │     ├─ special.cpython-313.pyc
   │     │  │     ├─ spice.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     ├─ srcinfo.cpython-313.pyc
   │     │  │     ├─ stata.cpython-313.pyc
   │     │  │     ├─ supercollider.cpython-313.pyc
   │     │  │     ├─ tablegen.cpython-313.pyc
   │     │  │     ├─ tact.cpython-313.pyc
   │     │  │     ├─ tal.cpython-313.pyc
   │     │  │     ├─ tcl.cpython-313.pyc
   │     │  │     ├─ teal.cpython-313.pyc
   │     │  │     ├─ templates.cpython-313.pyc
   │     │  │     ├─ teraterm.cpython-313.pyc
   │     │  │     ├─ testing.cpython-313.pyc
   │     │  │     ├─ text.cpython-313.pyc
   │     │  │     ├─ textedit.cpython-313.pyc
   │     │  │     ├─ textfmts.cpython-313.pyc
   │     │  │     ├─ theorem.cpython-313.pyc
   │     │  │     ├─ thingsdb.cpython-313.pyc
   │     │  │     ├─ tlb.cpython-313.pyc
   │     │  │     ├─ tls.cpython-313.pyc
   │     │  │     ├─ tnt.cpython-313.pyc
   │     │  │     ├─ trafficscript.cpython-313.pyc
   │     │  │     ├─ typoscript.cpython-313.pyc
   │     │  │     ├─ typst.cpython-313.pyc
   │     │  │     ├─ ul4.cpython-313.pyc
   │     │  │     ├─ unicon.cpython-313.pyc
   │     │  │     ├─ urbi.cpython-313.pyc
   │     │  │     ├─ usd.cpython-313.pyc
   │     │  │     ├─ varnish.cpython-313.pyc
   │     │  │     ├─ verification.cpython-313.pyc
   │     │  │     ├─ verifpal.cpython-313.pyc
   │     │  │     ├─ vip.cpython-313.pyc
   │     │  │     ├─ vyper.cpython-313.pyc
   │     │  │     ├─ web.cpython-313.pyc
   │     │  │     ├─ webassembly.cpython-313.pyc
   │     │  │     ├─ webidl.cpython-313.pyc
   │     │  │     ├─ webmisc.cpython-313.pyc
   │     │  │     ├─ wgsl.cpython-313.pyc
   │     │  │     ├─ whiley.cpython-313.pyc
   │     │  │     ├─ wowtoc.cpython-313.pyc
   │     │  │     ├─ wren.cpython-313.pyc
   │     │  │     ├─ x10.cpython-313.pyc
   │     │  │     ├─ xorg.cpython-313.pyc
   │     │  │     ├─ yang.cpython-313.pyc
   │     │  │     ├─ yara.cpython-313.pyc
   │     │  │     ├─ zig.cpython-313.pyc
   │     │  │     ├─ _ada_builtins.cpython-313.pyc
   │     │  │     ├─ _asy_builtins.cpython-313.pyc
   │     │  │     ├─ _cl_builtins.cpython-313.pyc
   │     │  │     ├─ _cocoa_builtins.cpython-313.pyc
   │     │  │     ├─ _csound_builtins.cpython-313.pyc
   │     │  │     ├─ _css_builtins.cpython-313.pyc
   │     │  │     ├─ _googlesql_builtins.cpython-313.pyc
   │     │  │     ├─ _julia_builtins.cpython-313.pyc
   │     │  │     ├─ _lasso_builtins.cpython-313.pyc
   │     │  │     ├─ _lilypond_builtins.cpython-313.pyc
   │     │  │     ├─ _luau_builtins.cpython-313.pyc
   │     │  │     ├─ _lua_builtins.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     ├─ _mql_builtins.cpython-313.pyc
   │     │  │     ├─ _mysql_builtins.cpython-313.pyc
   │     │  │     ├─ _openedge_builtins.cpython-313.pyc
   │     │  │     ├─ _php_builtins.cpython-313.pyc
   │     │  │     ├─ _postgres_builtins.cpython-313.pyc
   │     │  │     ├─ _qlik_builtins.cpython-313.pyc
   │     │  │     ├─ _scheme_builtins.cpython-313.pyc
   │     │  │     ├─ _scilab_builtins.cpython-313.pyc
   │     │  │     ├─ _sourcemod_builtins.cpython-313.pyc
   │     │  │     ├─ _sql_builtins.cpython-313.pyc
   │     │  │     ├─ _stan_builtins.cpython-313.pyc
   │     │  │     ├─ _stata_builtins.cpython-313.pyc
   │     │  │     ├─ _tsql_builtins.cpython-313.pyc
   │     │  │     ├─ _usd_builtins.cpython-313.pyc
   │     │  │     ├─ _vbscript_builtins.cpython-313.pyc
   │     │  │     ├─ _vim_builtins.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ modeline.py
   │     │  ├─ plugin.py
   │     │  ├─ regexopt.py
   │     │  ├─ scanner.py
   │     │  ├─ sphinxext.py
   │     │  ├─ style.py
   │     │  ├─ styles
   │     │  │  ├─ abap.py
   │     │  │  ├─ algol.py
   │     │  │  ├─ algol_nu.py
   │     │  │  ├─ arduino.py
   │     │  │  ├─ autumn.py
   │     │  │  ├─ borland.py
   │     │  │  ├─ bw.py
   │     │  │  ├─ coffee.py
   │     │  │  ├─ colorful.py
   │     │  │  ├─ default.py
   │     │  │  ├─ dracula.py
   │     │  │  ├─ emacs.py
   │     │  │  ├─ friendly.py
   │     │  │  ├─ friendly_grayscale.py
   │     │  │  ├─ fruity.py
   │     │  │  ├─ gh_dark.py
   │     │  │  ├─ gruvbox.py
   │     │  │  ├─ igor.py
   │     │  │  ├─ inkpot.py
   │     │  │  ├─ lightbulb.py
   │     │  │  ├─ lilypond.py
   │     │  │  ├─ lovelace.py
   │     │  │  ├─ manni.py
   │     │  │  ├─ material.py
   │     │  │  ├─ monokai.py
   │     │  │  ├─ murphy.py
   │     │  │  ├─ native.py
   │     │  │  ├─ nord.py
   │     │  │  ├─ onedark.py
   │     │  │  ├─ paraiso_dark.py
   │     │  │  ├─ paraiso_light.py
   │     │  │  ├─ pastie.py
   │     │  │  ├─ perldoc.py
   │     │  │  ├─ rainbow_dash.py
   │     │  │  ├─ rrt.py
   │     │  │  ├─ sas.py
   │     │  │  ├─ solarized.py
   │     │  │  ├─ staroffice.py
   │     │  │  ├─ stata_dark.py
   │     │  │  ├─ stata_light.py
   │     │  │  ├─ tango.py
   │     │  │  ├─ trac.py
   │     │  │  ├─ vim.py
   │     │  │  ├─ vs.py
   │     │  │  ├─ xcode.py
   │     │  │  ├─ zenburn.py
   │     │  │  ├─ _mapping.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ abap.cpython-313.pyc
   │     │  │     ├─ algol.cpython-313.pyc
   │     │  │     ├─ algol_nu.cpython-313.pyc
   │     │  │     ├─ arduino.cpython-313.pyc
   │     │  │     ├─ autumn.cpython-313.pyc
   │     │  │     ├─ borland.cpython-313.pyc
   │     │  │     ├─ bw.cpython-313.pyc
   │     │  │     ├─ coffee.cpython-313.pyc
   │     │  │     ├─ colorful.cpython-313.pyc
   │     │  │     ├─ default.cpython-313.pyc
   │     │  │     ├─ dracula.cpython-313.pyc
   │     │  │     ├─ emacs.cpython-313.pyc
   │     │  │     ├─ friendly.cpython-313.pyc
   │     │  │     ├─ friendly_grayscale.cpython-313.pyc
   │     │  │     ├─ fruity.cpython-313.pyc
   │     │  │     ├─ gh_dark.cpython-313.pyc
   │     │  │     ├─ gruvbox.cpython-313.pyc
   │     │  │     ├─ igor.cpython-313.pyc
   │     │  │     ├─ inkpot.cpython-313.pyc
   │     │  │     ├─ lightbulb.cpython-313.pyc
   │     │  │     ├─ lilypond.cpython-313.pyc
   │     │  │     ├─ lovelace.cpython-313.pyc
   │     │  │     ├─ manni.cpython-313.pyc
   │     │  │     ├─ material.cpython-313.pyc
   │     │  │     ├─ monokai.cpython-313.pyc
   │     │  │     ├─ murphy.cpython-313.pyc
   │     │  │     ├─ native.cpython-313.pyc
   │     │  │     ├─ nord.cpython-313.pyc
   │     │  │     ├─ onedark.cpython-313.pyc
   │     │  │     ├─ paraiso_dark.cpython-313.pyc
   │     │  │     ├─ paraiso_light.cpython-313.pyc
   │     │  │     ├─ pastie.cpython-313.pyc
   │     │  │     ├─ perldoc.cpython-313.pyc
   │     │  │     ├─ rainbow_dash.cpython-313.pyc
   │     │  │     ├─ rrt.cpython-313.pyc
   │     │  │     ├─ sas.cpython-313.pyc
   │     │  │     ├─ solarized.cpython-313.pyc
   │     │  │     ├─ staroffice.cpython-313.pyc
   │     │  │     ├─ stata_dark.cpython-313.pyc
   │     │  │     ├─ stata_light.cpython-313.pyc
   │     │  │     ├─ tango.cpython-313.pyc
   │     │  │     ├─ trac.cpython-313.pyc
   │     │  │     ├─ vim.cpython-313.pyc
   │     │  │     ├─ vs.cpython-313.pyc
   │     │  │     ├─ xcode.cpython-313.pyc
   │     │  │     ├─ zenburn.cpython-313.pyc
   │     │  │     ├─ _mapping.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ token.py
   │     │  ├─ unistring.py
   │     │  ├─ util.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ cmdline.cpython-313.pyc
   │     │     ├─ console.cpython-313.pyc
   │     │     ├─ filter.cpython-313.pyc
   │     │     ├─ formatter.cpython-313.pyc
   │     │     ├─ lexer.cpython-313.pyc
   │     │     ├─ modeline.cpython-313.pyc
   │     │     ├─ plugin.cpython-313.pyc
   │     │     ├─ regexopt.cpython-313.pyc
   │     │     ├─ scanner.cpython-313.pyc
   │     │     ├─ sphinxext.cpython-313.pyc
   │     │     ├─ style.cpython-313.pyc
   │     │     ├─ token.cpython-313.pyc
   │     │     ├─ unistring.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ pygments-2.19.2.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pyiceberg
   │     │  ├─ avro
   │     │  │  ├─ codecs
   │     │  │  │  ├─ bzip2.py
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ deflate.py
   │     │  │  │  ├─ snappy_codec.py
   │     │  │  │  ├─ zstandard_codec.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bzip2.cpython-313.pyc
   │     │  │  │     ├─ codec.cpython-313.pyc
   │     │  │  │     ├─ deflate.cpython-313.pyc
   │     │  │  │     ├─ snappy_codec.cpython-313.pyc
   │     │  │  │     ├─ zstandard_codec.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ decoder.py
   │     │  │  ├─ decoder_fast.cp313-win_amd64.pyd
   │     │  │  ├─ decoder_fast.pyi
   │     │  │  ├─ encoder.py
   │     │  │  ├─ file.py
   │     │  │  ├─ reader.py
   │     │  │  ├─ resolver.py
   │     │  │  ├─ writer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ decoder.cpython-313.pyc
   │     │  │     ├─ encoder.cpython-313.pyc
   │     │  │     ├─ file.cpython-313.pyc
   │     │  │     ├─ reader.cpython-313.pyc
   │     │  │     ├─ resolver.cpython-313.pyc
   │     │  │     ├─ writer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ catalog
   │     │  │  ├─ bigquery_metastore.py
   │     │  │  ├─ dynamodb.py
   │     │  │  ├─ glue.py
   │     │  │  ├─ hive.py
   │     │  │  ├─ memory.py
   │     │  │  ├─ noop.py
   │     │  │  ├─ rest
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ scan_planning.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     ├─ scan_planning.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ sql.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bigquery_metastore.cpython-313.pyc
   │     │  │     ├─ dynamodb.cpython-313.pyc
   │     │  │     ├─ glue.cpython-313.pyc
   │     │  │     ├─ hive.cpython-313.pyc
   │     │  │     ├─ memory.cpython-313.pyc
   │     │  │     ├─ noop.cpython-313.pyc
   │     │  │     ├─ sql.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ cli
   │     │  │  ├─ console.py
   │     │  │  ├─ output.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ console.cpython-313.pyc
   │     │  │     ├─ output.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ conversions.py
   │     │  ├─ exceptions.py
   │     │  ├─ expressions
   │     │  │  ├─ literals.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ visitors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ literals.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ visitors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ io
   │     │  │  ├─ fsspec.py
   │     │  │  ├─ pyarrow.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ fsspec.cpython-313.pyc
   │     │  │     ├─ pyarrow.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ manifest.py
   │     │  ├─ partitioning.py
   │     │  ├─ py.typed
   │     │  ├─ schema.py
   │     │  ├─ serializers.py
   │     │  ├─ table
   │     │  │  ├─ delete_file_index.py
   │     │  │  ├─ inspect.py
   │     │  │  ├─ locations.py
   │     │  │  ├─ maintenance.py
   │     │  │  ├─ metadata.py
   │     │  │  ├─ name_mapping.py
   │     │  │  ├─ puffin.py
   │     │  │  ├─ refs.py
   │     │  │  ├─ snapshots.py
   │     │  │  ├─ sorting.py
   │     │  │  ├─ statistics.py
   │     │  │  ├─ update
   │     │  │  │  ├─ schema.py
   │     │  │  │  ├─ snapshot.py
   │     │  │  │  ├─ sorting.py
   │     │  │  │  ├─ spec.py
   │     │  │  │  ├─ statistics.py
   │     │  │  │  ├─ validate.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ schema.cpython-313.pyc
   │     │  │  │     ├─ snapshot.cpython-313.pyc
   │     │  │  │     ├─ sorting.cpython-313.pyc
   │     │  │  │     ├─ spec.cpython-313.pyc
   │     │  │  │     ├─ statistics.cpython-313.pyc
   │     │  │  │     ├─ validate.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ upsert_util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ delete_file_index.cpython-313.pyc
   │     │  │     ├─ inspect.cpython-313.pyc
   │     │  │     ├─ locations.cpython-313.pyc
   │     │  │     ├─ maintenance.cpython-313.pyc
   │     │  │     ├─ metadata.cpython-313.pyc
   │     │  │     ├─ name_mapping.cpython-313.pyc
   │     │  │     ├─ puffin.cpython-313.pyc
   │     │  │     ├─ refs.cpython-313.pyc
   │     │  │     ├─ snapshots.cpython-313.pyc
   │     │  │     ├─ sorting.cpython-313.pyc
   │     │  │     ├─ statistics.cpython-313.pyc
   │     │  │     ├─ upsert_util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ transforms.py
   │     │  ├─ typedef.py
   │     │  ├─ types.py
   │     │  ├─ utils
   │     │  │  ├─ bin_packing.py
   │     │  │  ├─ concurrent.py
   │     │  │  ├─ config.py
   │     │  │  ├─ datetime.py
   │     │  │  ├─ decimal.py
   │     │  │  ├─ deprecated.py
   │     │  │  ├─ lazydict.py
   │     │  │  ├─ parsing.py
   │     │  │  ├─ properties.py
   │     │  │  ├─ schema_conversion.py
   │     │  │  ├─ singleton.py
   │     │  │  ├─ truncate.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ bin_packing.cpython-313.pyc
   │     │  │     ├─ concurrent.cpython-313.pyc
   │     │  │     ├─ config.cpython-313.pyc
   │     │  │     ├─ datetime.cpython-313.pyc
   │     │  │     ├─ decimal.cpython-313.pyc
   │     │  │     ├─ deprecated.cpython-313.pyc
   │     │  │     ├─ lazydict.cpython-313.pyc
   │     │  │     ├─ parsing.cpython-313.pyc
   │     │  │     ├─ properties.cpython-313.pyc
   │     │  │     ├─ schema_conversion.cpython-313.pyc
   │     │  │     ├─ singleton.cpython-313.pyc
   │     │  │     ├─ truncate.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ conversions.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ manifest.cpython-313.pyc
   │     │     ├─ partitioning.cpython-313.pyc
   │     │     ├─ schema.cpython-313.pyc
   │     │     ├─ serializers.cpython-313.pyc
   │     │     ├─ transforms.cpython-313.pyc
   │     │     ├─ typedef.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pyiceberg-0.11.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyjwt-2.11.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ AUTHORS.rst
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyparsing
   │     │  ├─ actions.py
   │     │  ├─ ai
   │     │  │  ├─ best_practices.md
   │     │  │  ├─ show_best_practices
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ __init__.cpython-313.pyc
   │     │  │  │     └─ __main__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ common.py
   │     │  ├─ core.py
   │     │  ├─ diagram
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ helpers.py
   │     │  ├─ py.typed
   │     │  ├─ results.py
   │     │  ├─ testing.py
   │     │  ├─ tools
   │     │  │  ├─ cvt_pyparsing_pep8_names.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ cvt_pyparsing_pep8_names.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ unicode.py
   │     │  ├─ util.py
   │     │  ├─ warnings.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ actions.cpython-313.pyc
   │     │     ├─ common.cpython-313.pyc
   │     │     ├─ core.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ helpers.cpython-313.pyc
   │     │     ├─ results.cpython-313.pyc
   │     │     ├─ testing.cpython-313.pyc
   │     │     ├─ unicode.cpython-313.pyc
   │     │     ├─ util.cpython-313.pyc
   │     │     ├─ warnings.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ pyparsing-3.3.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ pyroaring
   │     │  ├─ py.typed
   │     │  └─ __init__.pyi
   │     ├─ pyroaring-1.0.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pyroaring.cp313-win_amd64.pyd
   │     ├─ python_dateutil-2.9.0.post0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  ├─ WHEEL
   │     │  └─ zip-safe
   │     ├─ python_dotenv-1.2.2.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ python_multipart
   │     │  ├─ decoders.py
   │     │  ├─ exceptions.py
   │     │  ├─ multipart.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ decoders.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ multipart.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ python_multipart-0.0.22.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ realtime
   │     │  ├─ exceptions.py
   │     │  ├─ message.py
   │     │  ├─ py.typed
   │     │  ├─ transformers.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ channel.py
   │     │  │  ├─ client.py
   │     │  │  ├─ presence.py
   │     │  │  ├─ push.py
   │     │  │  ├─ timer.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ channel.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ presence.cpython-313.pyc
   │     │  │     ├─ push.cpython-313.pyc
   │     │  │     ├─ timer.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ channel.py
   │     │  │  ├─ client.py
   │     │  │  ├─ presence.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ channel.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ presence.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ message.cpython-313.pyc
   │     │     ├─ transformers.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ realtime-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ requests
   │     │  ├─ adapters.py
   │     │  ├─ api.py
   │     │  ├─ auth.py
   │     │  ├─ certs.py
   │     │  ├─ compat.py
   │     │  ├─ cookies.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ hooks.py
   │     │  ├─ models.py
   │     │  ├─ packages.py
   │     │  ├─ sessions.py
   │     │  ├─ status_codes.py
   │     │  ├─ structures.py
   │     │  ├─ utils.py
   │     │  ├─ _internal_utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ adapters.cpython-313.pyc
   │     │  │  ├─ api.cpython-313.pyc
   │     │  │  ├─ auth.cpython-313.pyc
   │     │  │  ├─ certs.cpython-313.pyc
   │     │  │  ├─ compat.cpython-313.pyc
   │     │  │  ├─ cookies.cpython-313.pyc
   │     │  │  ├─ exceptions.cpython-313.pyc
   │     │  │  ├─ help.cpython-313.pyc
   │     │  │  ├─ hooks.cpython-313.pyc
   │     │  │  ├─ models.cpython-313.pyc
   │     │  │  ├─ packages.cpython-313.pyc
   │     │  │  ├─ sessions.cpython-313.pyc
   │     │  │  ├─ status_codes.cpython-313.pyc
   │     │  │  ├─ structures.cpython-313.pyc
   │     │  │  ├─ utils.cpython-313.pyc
   │     │  │  ├─ _internal_utils.cpython-313.pyc
   │     │  │  ├─ __init__.cpython-313.pyc
   │     │  │  └─ __version__.cpython-313.pyc
   │     │  └─ __version__.py
   │     ├─ requests-2.32.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ rich
   │     │  ├─ abc.py
   │     │  ├─ align.py
   │     │  ├─ ansi.py
   │     │  ├─ bar.py
   │     │  ├─ box.py
   │     │  ├─ cells.py
   │     │  ├─ color.py
   │     │  ├─ color_triplet.py
   │     │  ├─ columns.py
   │     │  ├─ console.py
   │     │  ├─ constrain.py
   │     │  ├─ containers.py
   │     │  ├─ control.py
   │     │  ├─ default_styles.py
   │     │  ├─ diagnose.py
   │     │  ├─ emoji.py
   │     │  ├─ errors.py
   │     │  ├─ filesize.py
   │     │  ├─ file_proxy.py
   │     │  ├─ highlighter.py
   │     │  ├─ json.py
   │     │  ├─ jupyter.py
   │     │  ├─ layout.py
   │     │  ├─ live.py
   │     │  ├─ live_render.py
   │     │  ├─ logging.py
   │     │  ├─ markdown.py
   │     │  ├─ markup.py
   │     │  ├─ measure.py
   │     │  ├─ padding.py
   │     │  ├─ pager.py
   │     │  ├─ palette.py
   │     │  ├─ panel.py
   │     │  ├─ pretty.py
   │     │  ├─ progress.py
   │     │  ├─ progress_bar.py
   │     │  ├─ prompt.py
   │     │  ├─ protocol.py
   │     │  ├─ py.typed
   │     │  ├─ region.py
   │     │  ├─ repr.py
   │     │  ├─ rule.py
   │     │  ├─ scope.py
   │     │  ├─ screen.py
   │     │  ├─ segment.py
   │     │  ├─ spinner.py
   │     │  ├─ status.py
   │     │  ├─ style.py
   │     │  ├─ styled.py
   │     │  ├─ syntax.py
   │     │  ├─ table.py
   │     │  ├─ terminal_theme.py
   │     │  ├─ text.py
   │     │  ├─ theme.py
   │     │  ├─ themes.py
   │     │  ├─ traceback.py
   │     │  ├─ tree.py
   │     │  ├─ _emoji_codes.py
   │     │  ├─ _emoji_replace.py
   │     │  ├─ _export_format.py
   │     │  ├─ _extension.py
   │     │  ├─ _fileno.py
   │     │  ├─ _inspect.py
   │     │  ├─ _log_render.py
   │     │  ├─ _loop.py
   │     │  ├─ _null_file.py
   │     │  ├─ _palettes.py
   │     │  ├─ _pick.py
   │     │  ├─ _ratio.py
   │     │  ├─ _spinners.py
   │     │  ├─ _stack.py
   │     │  ├─ _timer.py
   │     │  ├─ _unicode_data
   │     │  │  ├─ unicode10-0-0.py
   │     │  │  ├─ unicode11-0-0.py
   │     │  │  ├─ unicode12-0-0.py
   │     │  │  ├─ unicode12-1-0.py
   │     │  │  ├─ unicode13-0-0.py
   │     │  │  ├─ unicode14-0-0.py
   │     │  │  ├─ unicode15-0-0.py
   │     │  │  ├─ unicode15-1-0.py
   │     │  │  ├─ unicode16-0-0.py
   │     │  │  ├─ unicode17-0-0.py
   │     │  │  ├─ unicode4-1-0.py
   │     │  │  ├─ unicode5-0-0.py
   │     │  │  ├─ unicode5-1-0.py
   │     │  │  ├─ unicode5-2-0.py
   │     │  │  ├─ unicode6-0-0.py
   │     │  │  ├─ unicode6-1-0.py
   │     │  │  ├─ unicode6-2-0.py
   │     │  │  ├─ unicode6-3-0.py
   │     │  │  ├─ unicode7-0-0.py
   │     │  │  ├─ unicode8-0-0.py
   │     │  │  ├─ unicode9-0-0.py
   │     │  │  ├─ _versions.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ unicode10-0-0.cpython-313.pyc
   │     │  │     ├─ unicode11-0-0.cpython-313.pyc
   │     │  │     ├─ unicode12-0-0.cpython-313.pyc
   │     │  │     ├─ unicode12-1-0.cpython-313.pyc
   │     │  │     ├─ unicode13-0-0.cpython-313.pyc
   │     │  │     ├─ unicode14-0-0.cpython-313.pyc
   │     │  │     ├─ unicode15-0-0.cpython-313.pyc
   │     │  │     ├─ unicode15-1-0.cpython-313.pyc
   │     │  │     ├─ unicode16-0-0.cpython-313.pyc
   │     │  │     ├─ unicode17-0-0.cpython-313.pyc
   │     │  │     ├─ unicode4-1-0.cpython-313.pyc
   │     │  │     ├─ unicode5-0-0.cpython-313.pyc
   │     │  │     ├─ unicode5-1-0.cpython-313.pyc
   │     │  │     ├─ unicode5-2-0.cpython-313.pyc
   │     │  │     ├─ unicode6-0-0.cpython-313.pyc
   │     │  │     ├─ unicode6-1-0.cpython-313.pyc
   │     │  │     ├─ unicode6-2-0.cpython-313.pyc
   │     │  │     ├─ unicode6-3-0.cpython-313.pyc
   │     │  │     ├─ unicode7-0-0.cpython-313.pyc
   │     │  │     ├─ unicode8-0-0.cpython-313.pyc
   │     │  │     ├─ unicode9-0-0.cpython-313.pyc
   │     │  │     ├─ _versions.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _win32_console.py
   │     │  ├─ _windows.py
   │     │  ├─ _windows_renderer.py
   │     │  ├─ _wrap.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ abc.cpython-313.pyc
   │     │     ├─ align.cpython-313.pyc
   │     │     ├─ ansi.cpython-313.pyc
   │     │     ├─ bar.cpython-313.pyc
   │     │     ├─ box.cpython-313.pyc
   │     │     ├─ cells.cpython-313.pyc
   │     │     ├─ color.cpython-313.pyc
   │     │     ├─ color_triplet.cpython-313.pyc
   │     │     ├─ columns.cpython-313.pyc
   │     │     ├─ console.cpython-313.pyc
   │     │     ├─ constrain.cpython-313.pyc
   │     │     ├─ containers.cpython-313.pyc
   │     │     ├─ control.cpython-313.pyc
   │     │     ├─ default_styles.cpython-313.pyc
   │     │     ├─ diagnose.cpython-313.pyc
   │     │     ├─ emoji.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ filesize.cpython-313.pyc
   │     │     ├─ file_proxy.cpython-313.pyc
   │     │     ├─ highlighter.cpython-313.pyc
   │     │     ├─ json.cpython-313.pyc
   │     │     ├─ jupyter.cpython-313.pyc
   │     │     ├─ layout.cpython-313.pyc
   │     │     ├─ live.cpython-313.pyc
   │     │     ├─ live_render.cpython-313.pyc
   │     │     ├─ logging.cpython-313.pyc
   │     │     ├─ markdown.cpython-313.pyc
   │     │     ├─ markup.cpython-313.pyc
   │     │     ├─ measure.cpython-313.pyc
   │     │     ├─ padding.cpython-313.pyc
   │     │     ├─ pager.cpython-313.pyc
   │     │     ├─ palette.cpython-313.pyc
   │     │     ├─ panel.cpython-313.pyc
   │     │     ├─ pretty.cpython-313.pyc
   │     │     ├─ progress.cpython-313.pyc
   │     │     ├─ progress_bar.cpython-313.pyc
   │     │     ├─ prompt.cpython-313.pyc
   │     │     ├─ protocol.cpython-313.pyc
   │     │     ├─ region.cpython-313.pyc
   │     │     ├─ repr.cpython-313.pyc
   │     │     ├─ rule.cpython-313.pyc
   │     │     ├─ scope.cpython-313.pyc
   │     │     ├─ screen.cpython-313.pyc
   │     │     ├─ segment.cpython-313.pyc
   │     │     ├─ spinner.cpython-313.pyc
   │     │     ├─ status.cpython-313.pyc
   │     │     ├─ style.cpython-313.pyc
   │     │     ├─ styled.cpython-313.pyc
   │     │     ├─ syntax.cpython-313.pyc
   │     │     ├─ table.cpython-313.pyc
   │     │     ├─ terminal_theme.cpython-313.pyc
   │     │     ├─ text.cpython-313.pyc
   │     │     ├─ theme.cpython-313.pyc
   │     │     ├─ themes.cpython-313.pyc
   │     │     ├─ traceback.cpython-313.pyc
   │     │     ├─ tree.cpython-313.pyc
   │     │     ├─ _emoji_codes.cpython-313.pyc
   │     │     ├─ _emoji_replace.cpython-313.pyc
   │     │     ├─ _export_format.cpython-313.pyc
   │     │     ├─ _extension.cpython-313.pyc
   │     │     ├─ _fileno.cpython-313.pyc
   │     │     ├─ _inspect.cpython-313.pyc
   │     │     ├─ _log_render.cpython-313.pyc
   │     │     ├─ _loop.cpython-313.pyc
   │     │     ├─ _null_file.cpython-313.pyc
   │     │     ├─ _palettes.cpython-313.pyc
   │     │     ├─ _pick.cpython-313.pyc
   │     │     ├─ _ratio.cpython-313.pyc
   │     │     ├─ _spinners.cpython-313.pyc
   │     │     ├─ _stack.cpython-313.pyc
   │     │     ├─ _timer.cpython-313.pyc
   │     │     ├─ _win32_console.cpython-313.pyc
   │     │     ├─ _windows.cpython-313.pyc
   │     │     ├─ _windows_renderer.cpython-313.pyc
   │     │     ├─ _wrap.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ rich-14.3.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ six-1.17.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ six.py
   │     ├─ starlette
   │     │  ├─ applications.py
   │     │  ├─ authentication.py
   │     │  ├─ background.py
   │     │  ├─ concurrency.py
   │     │  ├─ config.py
   │     │  ├─ convertors.py
   │     │  ├─ datastructures.py
   │     │  ├─ endpoints.py
   │     │  ├─ exceptions.py
   │     │  ├─ formparsers.py
   │     │  ├─ middleware
   │     │  │  ├─ authentication.py
   │     │  │  ├─ base.py
   │     │  │  ├─ cors.py
   │     │  │  ├─ errors.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ gzip.py
   │     │  │  ├─ httpsredirect.py
   │     │  │  ├─ sessions.py
   │     │  │  ├─ trustedhost.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ authentication.cpython-313.pyc
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ cors.cpython-313.pyc
   │     │  │     ├─ errors.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ gzip.cpython-313.pyc
   │     │  │     ├─ httpsredirect.cpython-313.pyc
   │     │  │     ├─ sessions.cpython-313.pyc
   │     │  │     ├─ trustedhost.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ requests.py
   │     │  ├─ responses.py
   │     │  ├─ routing.py
   │     │  ├─ schemas.py
   │     │  ├─ staticfiles.py
   │     │  ├─ status.py
   │     │  ├─ templating.py
   │     │  ├─ testclient.py
   │     │  ├─ types.py
   │     │  ├─ websockets.py
   │     │  ├─ _exception_handler.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ applications.cpython-313.pyc
   │     │     ├─ authentication.cpython-313.pyc
   │     │     ├─ background.cpython-313.pyc
   │     │     ├─ concurrency.cpython-313.pyc
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ convertors.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ endpoints.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ formparsers.cpython-313.pyc
   │     │     ├─ requests.cpython-313.pyc
   │     │     ├─ responses.cpython-313.pyc
   │     │     ├─ routing.cpython-313.pyc
   │     │     ├─ schemas.cpython-313.pyc
   │     │     ├─ staticfiles.cpython-313.pyc
   │     │     ├─ status.cpython-313.pyc
   │     │     ├─ templating.cpython-313.pyc
   │     │     ├─ testclient.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ websockets.cpython-313.pyc
   │     │     ├─ _exception_handler.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ starlette-0.52.1.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ storage3
   │     │  ├─ constants.py
   │     │  ├─ exceptions.py
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ analytics.py
   │     │  │  ├─ bucket.py
   │     │  │  ├─ client.py
   │     │  │  ├─ file_api.py
   │     │  │  ├─ request.py
   │     │  │  ├─ vectors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ analytics.cpython-313.pyc
   │     │  │     ├─ bucket.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ file_api.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ vectors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ analytics.py
   │     │  │  ├─ bucket.py
   │     │  │  ├─ client.py
   │     │  │  ├─ file_api.py
   │     │  │  ├─ request.py
   │     │  │  ├─ vectors.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ analytics.cpython-313.pyc
   │     │  │     ├─ bucket.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ file_api.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ vectors.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ storage3-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ strenum
   │     │  ├─ mixins.py
   │     │  ├─ mixins.pyi
   │     │  ├─ py.typed
   │     │  ├─ _name_mangler.py
   │     │  ├─ _name_mangler.pyi
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ mixins.cpython-313.pyc
   │     │     ├─ _name_mangler.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ StrEnum-0.4.15.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ strictyaml
   │     │  ├─ any_validator.py
   │     │  ├─ compound.py
   │     │  ├─ constants.py
   │     │  ├─ dumper.py
   │     │  ├─ exceptions.py
   │     │  ├─ parser.py
   │     │  ├─ representation.py
   │     │  ├─ ruamel
   │     │  │  ├─ anchor.py
   │     │  │  ├─ comments.py
   │     │  │  ├─ compat.py
   │     │  │  ├─ composer.py
   │     │  │  ├─ configobjwalker.py
   │     │  │  ├─ constructor.py
   │     │  │  ├─ cyaml.py
   │     │  │  ├─ dumper.py
   │     │  │  ├─ emitter.py
   │     │  │  ├─ error.py
   │     │  │  ├─ events.py
   │     │  │  ├─ loader.py
   │     │  │  ├─ main.py
   │     │  │  ├─ nodes.py
   │     │  │  ├─ parser.py
   │     │  │  ├─ reader.py
   │     │  │  ├─ representer.py
   │     │  │  ├─ resolver.py
   │     │  │  ├─ scalarbool.py
   │     │  │  ├─ scalarfloat.py
   │     │  │  ├─ scalarint.py
   │     │  │  ├─ scalarstring.py
   │     │  │  ├─ scanner.py
   │     │  │  ├─ serializer.py
   │     │  │  ├─ timestamp.py
   │     │  │  ├─ tokens.py
   │     │  │  ├─ util.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ anchor.cpython-313.pyc
   │     │  │     ├─ comments.cpython-313.pyc
   │     │  │     ├─ compat.cpython-313.pyc
   │     │  │     ├─ composer.cpython-313.pyc
   │     │  │     ├─ configobjwalker.cpython-313.pyc
   │     │  │     ├─ constructor.cpython-313.pyc
   │     │  │     ├─ cyaml.cpython-313.pyc
   │     │  │     ├─ dumper.cpython-313.pyc
   │     │  │     ├─ emitter.cpython-313.pyc
   │     │  │     ├─ error.cpython-313.pyc
   │     │  │     ├─ events.cpython-313.pyc
   │     │  │     ├─ loader.cpython-313.pyc
   │     │  │     ├─ main.cpython-313.pyc
   │     │  │     ├─ nodes.cpython-313.pyc
   │     │  │     ├─ parser.cpython-313.pyc
   │     │  │     ├─ reader.cpython-313.pyc
   │     │  │     ├─ representer.cpython-313.pyc
   │     │  │     ├─ resolver.cpython-313.pyc
   │     │  │     ├─ scalarbool.cpython-313.pyc
   │     │  │     ├─ scalarfloat.cpython-313.pyc
   │     │  │     ├─ scalarint.cpython-313.pyc
   │     │  │     ├─ scalarstring.cpython-313.pyc
   │     │  │     ├─ scanner.cpython-313.pyc
   │     │  │     ├─ serializer.cpython-313.pyc
   │     │  │     ├─ timestamp.cpython-313.pyc
   │     │  │     ├─ tokens.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ scalar.py
   │     │  ├─ utils.py
   │     │  ├─ validators.py
   │     │  ├─ yamllocation.py
   │     │  ├─ yamlpointer.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ any_validator.cpython-313.pyc
   │     │     ├─ compound.cpython-313.pyc
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ dumper.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ parser.cpython-313.pyc
   │     │     ├─ representation.cpython-313.pyc
   │     │     ├─ scalar.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ validators.cpython-313.pyc
   │     │     ├─ yamllocation.cpython-313.pyc
   │     │     ├─ yamlpointer.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ strictyaml-1.7.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ supabase
   │     │  ├─ client.py
   │     │  ├─ lib
   │     │  │  ├─ client_options.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client_options.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ types.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ auth_client.py
   │     │  │  ├─ client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth_client.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ auth_client.py
   │     │  │  ├─ client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth_client.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ client.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ supabase_auth
   │     │  ├─ constants.py
   │     │  ├─ errors.py
   │     │  ├─ helpers.py
   │     │  ├─ py.typed
   │     │  ├─ timer.py
   │     │  ├─ types.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ gotrue_admin_api.py
   │     │  │  ├─ gotrue_admin_mfa_api.py
   │     │  │  ├─ gotrue_admin_oauth_api.py
   │     │  │  ├─ gotrue_base_api.py
   │     │  │  ├─ gotrue_client.py
   │     │  │  ├─ gotrue_mfa_api.py
   │     │  │  ├─ storage.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ gotrue_admin_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_mfa_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_oauth_api.cpython-313.pyc
   │     │  │     ├─ gotrue_base_api.cpython-313.pyc
   │     │  │     ├─ gotrue_client.cpython-313.pyc
   │     │  │     ├─ gotrue_mfa_api.cpython-313.pyc
   │     │  │     ├─ storage.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ gotrue_admin_api.py
   │     │  │  ├─ gotrue_admin_mfa_api.py
   │     │  │  ├─ gotrue_admin_oauth_api.py
   │     │  │  ├─ gotrue_base_api.py
   │     │  │  ├─ gotrue_client.py
   │     │  │  ├─ gotrue_mfa_api.py
   │     │  │  ├─ storage.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ gotrue_admin_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_mfa_api.cpython-313.pyc
   │     │  │     ├─ gotrue_admin_oauth_api.cpython-313.pyc
   │     │  │     ├─ gotrue_base_api.cpython-313.pyc
   │     │  │     ├─ gotrue_client.cpython-313.pyc
   │     │  │     ├─ gotrue_mfa_api.cpython-313.pyc
   │     │  │     ├─ storage.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ constants.cpython-313.pyc
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ helpers.cpython-313.pyc
   │     │     ├─ timer.cpython-313.pyc
   │     │     ├─ types.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase_auth-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ supabase_functions
   │     │  ├─ errors.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ _async
   │     │  │  ├─ functions_client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ functions_client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _sync
   │     │  │  ├─ functions_client.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ functions_client.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ errors.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ supabase_functions-2.28.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ tenacity
   │     │  ├─ after.py
   │     │  ├─ asyncio
   │     │  │  ├─ retry.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ retry.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ before.py
   │     │  ├─ before_sleep.py
   │     │  ├─ nap.py
   │     │  ├─ py.typed
   │     │  ├─ retry.py
   │     │  ├─ stop.py
   │     │  ├─ tornadoweb.py
   │     │  ├─ wait.py
   │     │  ├─ _utils.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ after.cpython-313.pyc
   │     │     ├─ before.cpython-313.pyc
   │     │     ├─ before_sleep.cpython-313.pyc
   │     │     ├─ nap.cpython-313.pyc
   │     │     ├─ retry.cpython-313.pyc
   │     │     ├─ stop.cpython-313.pyc
   │     │     ├─ tornadoweb.cpython-313.pyc
   │     │     ├─ wait.cpython-313.pyc
   │     │     ├─ _utils.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tenacity-9.1.4.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ typing_extensions-4.15.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ typing_extensions.py
   │     ├─ typing_inspection
   │     │  ├─ introspection.py
   │     │  ├─ py.typed
   │     │  ├─ typing_objects.py
   │     │  ├─ typing_objects.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ introspection.cpython-313.pyc
   │     │     ├─ typing_objects.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ typing_inspection-0.4.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ tzdata
   │     │  ├─ zoneinfo
   │     │  │  ├─ Africa
   │     │  │  │  ├─ Abidjan
   │     │  │  │  ├─ Accra
   │     │  │  │  ├─ Addis_Ababa
   │     │  │  │  ├─ Algiers
   │     │  │  │  ├─ Asmara
   │     │  │  │  ├─ Asmera
   │     │  │  │  ├─ Bamako
   │     │  │  │  ├─ Bangui
   │     │  │  │  ├─ Banjul
   │     │  │  │  ├─ Bissau
   │     │  │  │  ├─ Blantyre
   │     │  │  │  ├─ Brazzaville
   │     │  │  │  ├─ Bujumbura
   │     │  │  │  ├─ Cairo
   │     │  │  │  ├─ Casablanca
   │     │  │  │  ├─ Ceuta
   │     │  │  │  ├─ Conakry
   │     │  │  │  ├─ Dakar
   │     │  │  │  ├─ Dar_es_Salaam
   │     │  │  │  ├─ Djibouti
   │     │  │  │  ├─ Douala
   │     │  │  │  ├─ El_Aaiun
   │     │  │  │  ├─ Freetown
   │     │  │  │  ├─ Gaborone
   │     │  │  │  ├─ Harare
   │     │  │  │  ├─ Johannesburg
   │     │  │  │  ├─ Juba
   │     │  │  │  ├─ Kampala
   │     │  │  │  ├─ Khartoum
   │     │  │  │  ├─ Kigali
   │     │  │  │  ├─ Kinshasa
   │     │  │  │  ├─ Lagos
   │     │  │  │  ├─ Libreville
   │     │  │  │  ├─ Lome
   │     │  │  │  ├─ Luanda
   │     │  │  │  ├─ Lubumbashi
   │     │  │  │  ├─ Lusaka
   │     │  │  │  ├─ Malabo
   │     │  │  │  ├─ Maputo
   │     │  │  │  ├─ Maseru
   │     │  │  │  ├─ Mbabane
   │     │  │  │  ├─ Mogadishu
   │     │  │  │  ├─ Monrovia
   │     │  │  │  ├─ Nairobi
   │     │  │  │  ├─ Ndjamena
   │     │  │  │  ├─ Niamey
   │     │  │  │  ├─ Nouakchott
   │     │  │  │  ├─ Ouagadougou
   │     │  │  │  ├─ Porto-Novo
   │     │  │  │  ├─ Sao_Tome
   │     │  │  │  ├─ Timbuktu
   │     │  │  │  ├─ Tripoli
   │     │  │  │  ├─ Tunis
   │     │  │  │  ├─ Windhoek
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ America
   │     │  │  │  ├─ Adak
   │     │  │  │  ├─ Anchorage
   │     │  │  │  ├─ Anguilla
   │     │  │  │  ├─ Antigua
   │     │  │  │  ├─ Araguaina
   │     │  │  │  ├─ Argentina
   │     │  │  │  │  ├─ Buenos_Aires
   │     │  │  │  │  ├─ Catamarca
   │     │  │  │  │  ├─ ComodRivadavia
   │     │  │  │  │  ├─ Cordoba
   │     │  │  │  │  ├─ Jujuy
   │     │  │  │  │  ├─ La_Rioja
   │     │  │  │  │  ├─ Mendoza
   │     │  │  │  │  ├─ Rio_Gallegos
   │     │  │  │  │  ├─ Salta
   │     │  │  │  │  ├─ San_Juan
   │     │  │  │  │  ├─ San_Luis
   │     │  │  │  │  ├─ Tucuman
   │     │  │  │  │  ├─ Ushuaia
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Aruba
   │     │  │  │  ├─ Asuncion
   │     │  │  │  ├─ Atikokan
   │     │  │  │  ├─ Atka
   │     │  │  │  ├─ Bahia
   │     │  │  │  ├─ Bahia_Banderas
   │     │  │  │  ├─ Barbados
   │     │  │  │  ├─ Belem
   │     │  │  │  ├─ Belize
   │     │  │  │  ├─ Blanc-Sablon
   │     │  │  │  ├─ Boa_Vista
   │     │  │  │  ├─ Bogota
   │     │  │  │  ├─ Boise
   │     │  │  │  ├─ Buenos_Aires
   │     │  │  │  ├─ Cambridge_Bay
   │     │  │  │  ├─ Campo_Grande
   │     │  │  │  ├─ Cancun
   │     │  │  │  ├─ Caracas
   │     │  │  │  ├─ Catamarca
   │     │  │  │  ├─ Cayenne
   │     │  │  │  ├─ Cayman
   │     │  │  │  ├─ Chicago
   │     │  │  │  ├─ Chihuahua
   │     │  │  │  ├─ Ciudad_Juarez
   │     │  │  │  ├─ Coral_Harbour
   │     │  │  │  ├─ Cordoba
   │     │  │  │  ├─ Costa_Rica
   │     │  │  │  ├─ Coyhaique
   │     │  │  │  ├─ Creston
   │     │  │  │  ├─ Cuiaba
   │     │  │  │  ├─ Curacao
   │     │  │  │  ├─ Danmarkshavn
   │     │  │  │  ├─ Dawson
   │     │  │  │  ├─ Dawson_Creek
   │     │  │  │  ├─ Denver
   │     │  │  │  ├─ Detroit
   │     │  │  │  ├─ Dominica
   │     │  │  │  ├─ Edmonton
   │     │  │  │  ├─ Eirunepe
   │     │  │  │  ├─ El_Salvador
   │     │  │  │  ├─ Ensenada
   │     │  │  │  ├─ Fortaleza
   │     │  │  │  ├─ Fort_Nelson
   │     │  │  │  ├─ Fort_Wayne
   │     │  │  │  ├─ Glace_Bay
   │     │  │  │  ├─ Godthab
   │     │  │  │  ├─ Goose_Bay
   │     │  │  │  ├─ Grand_Turk
   │     │  │  │  ├─ Grenada
   │     │  │  │  ├─ Guadeloupe
   │     │  │  │  ├─ Guatemala
   │     │  │  │  ├─ Guayaquil
   │     │  │  │  ├─ Guyana
   │     │  │  │  ├─ Halifax
   │     │  │  │  ├─ Havana
   │     │  │  │  ├─ Hermosillo
   │     │  │  │  ├─ Indiana
   │     │  │  │  │  ├─ Indianapolis
   │     │  │  │  │  ├─ Knox
   │     │  │  │  │  ├─ Marengo
   │     │  │  │  │  ├─ Petersburg
   │     │  │  │  │  ├─ Tell_City
   │     │  │  │  │  ├─ Vevay
   │     │  │  │  │  ├─ Vincennes
   │     │  │  │  │  ├─ Winamac
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Indianapolis
   │     │  │  │  ├─ Inuvik
   │     │  │  │  ├─ Iqaluit
   │     │  │  │  ├─ Jamaica
   │     │  │  │  ├─ Jujuy
   │     │  │  │  ├─ Juneau
   │     │  │  │  ├─ Kentucky
   │     │  │  │  │  ├─ Louisville
   │     │  │  │  │  ├─ Monticello
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Knox_IN
   │     │  │  │  ├─ Kralendijk
   │     │  │  │  ├─ La_Paz
   │     │  │  │  ├─ Lima
   │     │  │  │  ├─ Los_Angeles
   │     │  │  │  ├─ Louisville
   │     │  │  │  ├─ Lower_Princes
   │     │  │  │  ├─ Maceio
   │     │  │  │  ├─ Managua
   │     │  │  │  ├─ Manaus
   │     │  │  │  ├─ Marigot
   │     │  │  │  ├─ Martinique
   │     │  │  │  ├─ Matamoros
   │     │  │  │  ├─ Mazatlan
   │     │  │  │  ├─ Mendoza
   │     │  │  │  ├─ Menominee
   │     │  │  │  ├─ Merida
   │     │  │  │  ├─ Metlakatla
   │     │  │  │  ├─ Mexico_City
   │     │  │  │  ├─ Miquelon
   │     │  │  │  ├─ Moncton
   │     │  │  │  ├─ Monterrey
   │     │  │  │  ├─ Montevideo
   │     │  │  │  ├─ Montreal
   │     │  │  │  ├─ Montserrat
   │     │  │  │  ├─ Nassau
   │     │  │  │  ├─ New_York
   │     │  │  │  ├─ Nipigon
   │     │  │  │  ├─ Nome
   │     │  │  │  ├─ Noronha
   │     │  │  │  ├─ North_Dakota
   │     │  │  │  │  ├─ Beulah
   │     │  │  │  │  ├─ Center
   │     │  │  │  │  ├─ New_Salem
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  │  ├─ Nuuk
   │     │  │  │  ├─ Ojinaga
   │     │  │  │  ├─ Panama
   │     │  │  │  ├─ Pangnirtung
   │     │  │  │  ├─ Paramaribo
   │     │  │  │  ├─ Phoenix
   │     │  │  │  ├─ Port-au-Prince
   │     │  │  │  ├─ Porto_Acre
   │     │  │  │  ├─ Porto_Velho
   │     │  │  │  ├─ Port_of_Spain
   │     │  │  │  ├─ Puerto_Rico
   │     │  │  │  ├─ Punta_Arenas
   │     │  │  │  ├─ Rainy_River
   │     │  │  │  ├─ Rankin_Inlet
   │     │  │  │  ├─ Recife
   │     │  │  │  ├─ Regina
   │     │  │  │  ├─ Resolute
   │     │  │  │  ├─ Rio_Branco
   │     │  │  │  ├─ Rosario
   │     │  │  │  ├─ Santarem
   │     │  │  │  ├─ Santa_Isabel
   │     │  │  │  ├─ Santiago
   │     │  │  │  ├─ Santo_Domingo
   │     │  │  │  ├─ Sao_Paulo
   │     │  │  │  ├─ Scoresbysund
   │     │  │  │  ├─ Shiprock
   │     │  │  │  ├─ Sitka
   │     │  │  │  ├─ St_Barthelemy
   │     │  │  │  ├─ St_Johns
   │     │  │  │  ├─ St_Kitts
   │     │  │  │  ├─ St_Lucia
   │     │  │  │  ├─ St_Thomas
   │     │  │  │  ├─ St_Vincent
   │     │  │  │  ├─ Swift_Current
   │     │  │  │  ├─ Tegucigalpa
   │     │  │  │  ├─ Thule
   │     │  │  │  ├─ Thunder_Bay
   │     │  │  │  ├─ Tijuana
   │     │  │  │  ├─ Toronto
   │     │  │  │  ├─ Tortola
   │     │  │  │  ├─ Vancouver
   │     │  │  │  ├─ Virgin
   │     │  │  │  ├─ Whitehorse
   │     │  │  │  ├─ Winnipeg
   │     │  │  │  ├─ Yakutat
   │     │  │  │  ├─ Yellowknife
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Antarctica
   │     │  │  │  ├─ Casey
   │     │  │  │  ├─ Davis
   │     │  │  │  ├─ DumontDUrville
   │     │  │  │  ├─ Macquarie
   │     │  │  │  ├─ Mawson
   │     │  │  │  ├─ McMurdo
   │     │  │  │  ├─ Palmer
   │     │  │  │  ├─ Rothera
   │     │  │  │  ├─ South_Pole
   │     │  │  │  ├─ Syowa
   │     │  │  │  ├─ Troll
   │     │  │  │  ├─ Vostok
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Arctic
   │     │  │  │  ├─ Longyearbyen
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Asia
   │     │  │  │  ├─ Aden
   │     │  │  │  ├─ Almaty
   │     │  │  │  ├─ Amman
   │     │  │  │  ├─ Anadyr
   │     │  │  │  ├─ Aqtau
   │     │  │  │  ├─ Aqtobe
   │     │  │  │  ├─ Ashgabat
   │     │  │  │  ├─ Ashkhabad
   │     │  │  │  ├─ Atyrau
   │     │  │  │  ├─ Baghdad
   │     │  │  │  ├─ Bahrain
   │     │  │  │  ├─ Baku
   │     │  │  │  ├─ Bangkok
   │     │  │  │  ├─ Barnaul
   │     │  │  │  ├─ Beirut
   │     │  │  │  ├─ Bishkek
   │     │  │  │  ├─ Brunei
   │     │  │  │  ├─ Calcutta
   │     │  │  │  ├─ Chita
   │     │  │  │  ├─ Choibalsan
   │     │  │  │  ├─ Chongqing
   │     │  │  │  ├─ Chungking
   │     │  │  │  ├─ Colombo
   │     │  │  │  ├─ Dacca
   │     │  │  │  ├─ Damascus
   │     │  │  │  ├─ Dhaka
   │     │  │  │  ├─ Dili
   │     │  │  │  ├─ Dubai
   │     │  │  │  ├─ Dushanbe
   │     │  │  │  ├─ Famagusta
   │     │  │  │  ├─ Gaza
   │     │  │  │  ├─ Harbin
   │     │  │  │  ├─ Hebron
   │     │  │  │  ├─ Hong_Kong
   │     │  │  │  ├─ Hovd
   │     │  │  │  ├─ Ho_Chi_Minh
   │     │  │  │  ├─ Irkutsk
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jakarta
   │     │  │  │  ├─ Jayapura
   │     │  │  │  ├─ Jerusalem
   │     │  │  │  ├─ Kabul
   │     │  │  │  ├─ Kamchatka
   │     │  │  │  ├─ Karachi
   │     │  │  │  ├─ Kashgar
   │     │  │  │  ├─ Kathmandu
   │     │  │  │  ├─ Katmandu
   │     │  │  │  ├─ Khandyga
   │     │  │  │  ├─ Kolkata
   │     │  │  │  ├─ Krasnoyarsk
   │     │  │  │  ├─ Kuala_Lumpur
   │     │  │  │  ├─ Kuching
   │     │  │  │  ├─ Kuwait
   │     │  │  │  ├─ Macao
   │     │  │  │  ├─ Macau
   │     │  │  │  ├─ Magadan
   │     │  │  │  ├─ Makassar
   │     │  │  │  ├─ Manila
   │     │  │  │  ├─ Muscat
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Novokuznetsk
   │     │  │  │  ├─ Novosibirsk
   │     │  │  │  ├─ Omsk
   │     │  │  │  ├─ Oral
   │     │  │  │  ├─ Phnom_Penh
   │     │  │  │  ├─ Pontianak
   │     │  │  │  ├─ Pyongyang
   │     │  │  │  ├─ Qatar
   │     │  │  │  ├─ Qostanay
   │     │  │  │  ├─ Qyzylorda
   │     │  │  │  ├─ Rangoon
   │     │  │  │  ├─ Riyadh
   │     │  │  │  ├─ Saigon
   │     │  │  │  ├─ Sakhalin
   │     │  │  │  ├─ Samarkand
   │     │  │  │  ├─ Seoul
   │     │  │  │  ├─ Shanghai
   │     │  │  │  ├─ Singapore
   │     │  │  │  ├─ Srednekolymsk
   │     │  │  │  ├─ Taipei
   │     │  │  │  ├─ Tashkent
   │     │  │  │  ├─ Tbilisi
   │     │  │  │  ├─ Tehran
   │     │  │  │  ├─ Tel_Aviv
   │     │  │  │  ├─ Thimbu
   │     │  │  │  ├─ Thimphu
   │     │  │  │  ├─ Tokyo
   │     │  │  │  ├─ Tomsk
   │     │  │  │  ├─ Ujung_Pandang
   │     │  │  │  ├─ Ulaanbaatar
   │     │  │  │  ├─ Ulan_Bator
   │     │  │  │  ├─ Urumqi
   │     │  │  │  ├─ Ust-Nera
   │     │  │  │  ├─ Vientiane
   │     │  │  │  ├─ Vladivostok
   │     │  │  │  ├─ Yakutsk
   │     │  │  │  ├─ Yangon
   │     │  │  │  ├─ Yekaterinburg
   │     │  │  │  ├─ Yerevan
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Atlantic
   │     │  │  │  ├─ Azores
   │     │  │  │  ├─ Bermuda
   │     │  │  │  ├─ Canary
   │     │  │  │  ├─ Cape_Verde
   │     │  │  │  ├─ Faeroe
   │     │  │  │  ├─ Faroe
   │     │  │  │  ├─ Jan_Mayen
   │     │  │  │  ├─ Madeira
   │     │  │  │  ├─ Reykjavik
   │     │  │  │  ├─ South_Georgia
   │     │  │  │  ├─ Stanley
   │     │  │  │  ├─ St_Helena
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Australia
   │     │  │  │  ├─ ACT
   │     │  │  │  ├─ Adelaide
   │     │  │  │  ├─ Brisbane
   │     │  │  │  ├─ Broken_Hill
   │     │  │  │  ├─ Canberra
   │     │  │  │  ├─ Currie
   │     │  │  │  ├─ Darwin
   │     │  │  │  ├─ Eucla
   │     │  │  │  ├─ Hobart
   │     │  │  │  ├─ LHI
   │     │  │  │  ├─ Lindeman
   │     │  │  │  ├─ Lord_Howe
   │     │  │  │  ├─ Melbourne
   │     │  │  │  ├─ North
   │     │  │  │  ├─ NSW
   │     │  │  │  ├─ Perth
   │     │  │  │  ├─ Queensland
   │     │  │  │  ├─ South
   │     │  │  │  ├─ Sydney
   │     │  │  │  ├─ Tasmania
   │     │  │  │  ├─ Victoria
   │     │  │  │  ├─ West
   │     │  │  │  ├─ Yancowinna
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Brazil
   │     │  │  │  ├─ Acre
   │     │  │  │  ├─ DeNoronha
   │     │  │  │  ├─ East
   │     │  │  │  ├─ West
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Canada
   │     │  │  │  ├─ Atlantic
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Newfoundland
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Saskatchewan
   │     │  │  │  ├─ Yukon
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CET
   │     │  │  ├─ Chile
   │     │  │  │  ├─ Continental
   │     │  │  │  ├─ EasterIsland
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ CST6CDT
   │     │  │  ├─ Cuba
   │     │  │  ├─ EET
   │     │  │  ├─ Egypt
   │     │  │  ├─ Eire
   │     │  │  ├─ EST
   │     │  │  ├─ EST5EDT
   │     │  │  ├─ Etc
   │     │  │  │  ├─ GMT
   │     │  │  │  ├─ GMT+0
   │     │  │  │  ├─ GMT+1
   │     │  │  │  ├─ GMT+10
   │     │  │  │  ├─ GMT+11
   │     │  │  │  ├─ GMT+12
   │     │  │  │  ├─ GMT+2
   │     │  │  │  ├─ GMT+3
   │     │  │  │  ├─ GMT+4
   │     │  │  │  ├─ GMT+5
   │     │  │  │  ├─ GMT+6
   │     │  │  │  ├─ GMT+7
   │     │  │  │  ├─ GMT+8
   │     │  │  │  ├─ GMT+9
   │     │  │  │  ├─ GMT-0
   │     │  │  │  ├─ GMT-1
   │     │  │  │  ├─ GMT-10
   │     │  │  │  ├─ GMT-11
   │     │  │  │  ├─ GMT-12
   │     │  │  │  ├─ GMT-13
   │     │  │  │  ├─ GMT-14
   │     │  │  │  ├─ GMT-2
   │     │  │  │  ├─ GMT-3
   │     │  │  │  ├─ GMT-4
   │     │  │  │  ├─ GMT-5
   │     │  │  │  ├─ GMT-6
   │     │  │  │  ├─ GMT-7
   │     │  │  │  ├─ GMT-8
   │     │  │  │  ├─ GMT-9
   │     │  │  │  ├─ GMT0
   │     │  │  │  ├─ Greenwich
   │     │  │  │  ├─ UCT
   │     │  │  │  ├─ Universal
   │     │  │  │  ├─ UTC
   │     │  │  │  ├─ Zulu
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Europe
   │     │  │  │  ├─ Amsterdam
   │     │  │  │  ├─ Andorra
   │     │  │  │  ├─ Astrakhan
   │     │  │  │  ├─ Athens
   │     │  │  │  ├─ Belfast
   │     │  │  │  ├─ Belgrade
   │     │  │  │  ├─ Berlin
   │     │  │  │  ├─ Bratislava
   │     │  │  │  ├─ Brussels
   │     │  │  │  ├─ Bucharest
   │     │  │  │  ├─ Budapest
   │     │  │  │  ├─ Busingen
   │     │  │  │  ├─ Chisinau
   │     │  │  │  ├─ Copenhagen
   │     │  │  │  ├─ Dublin
   │     │  │  │  ├─ Gibraltar
   │     │  │  │  ├─ Guernsey
   │     │  │  │  ├─ Helsinki
   │     │  │  │  ├─ Isle_of_Man
   │     │  │  │  ├─ Istanbul
   │     │  │  │  ├─ Jersey
   │     │  │  │  ├─ Kaliningrad
   │     │  │  │  ├─ Kiev
   │     │  │  │  ├─ Kirov
   │     │  │  │  ├─ Kyiv
   │     │  │  │  ├─ Lisbon
   │     │  │  │  ├─ Ljubljana
   │     │  │  │  ├─ London
   │     │  │  │  ├─ Luxembourg
   │     │  │  │  ├─ Madrid
   │     │  │  │  ├─ Malta
   │     │  │  │  ├─ Mariehamn
   │     │  │  │  ├─ Minsk
   │     │  │  │  ├─ Monaco
   │     │  │  │  ├─ Moscow
   │     │  │  │  ├─ Nicosia
   │     │  │  │  ├─ Oslo
   │     │  │  │  ├─ Paris
   │     │  │  │  ├─ Podgorica
   │     │  │  │  ├─ Prague
   │     │  │  │  ├─ Riga
   │     │  │  │  ├─ Rome
   │     │  │  │  ├─ Samara
   │     │  │  │  ├─ San_Marino
   │     │  │  │  ├─ Sarajevo
   │     │  │  │  ├─ Saratov
   │     │  │  │  ├─ Simferopol
   │     │  │  │  ├─ Skopje
   │     │  │  │  ├─ Sofia
   │     │  │  │  ├─ Stockholm
   │     │  │  │  ├─ Tallinn
   │     │  │  │  ├─ Tirane
   │     │  │  │  ├─ Tiraspol
   │     │  │  │  ├─ Ulyanovsk
   │     │  │  │  ├─ Uzhgorod
   │     │  │  │  ├─ Vaduz
   │     │  │  │  ├─ Vatican
   │     │  │  │  ├─ Vienna
   │     │  │  │  ├─ Vilnius
   │     │  │  │  ├─ Volgograd
   │     │  │  │  ├─ Warsaw
   │     │  │  │  ├─ Zagreb
   │     │  │  │  ├─ Zaporozhye
   │     │  │  │  ├─ Zurich
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Factory
   │     │  │  ├─ GB
   │     │  │  ├─ GB-Eire
   │     │  │  ├─ GMT
   │     │  │  ├─ GMT+0
   │     │  │  ├─ GMT-0
   │     │  │  ├─ GMT0
   │     │  │  ├─ Greenwich
   │     │  │  ├─ Hongkong
   │     │  │  ├─ HST
   │     │  │  ├─ Iceland
   │     │  │  ├─ Indian
   │     │  │  │  ├─ Antananarivo
   │     │  │  │  ├─ Chagos
   │     │  │  │  ├─ Christmas
   │     │  │  │  ├─ Cocos
   │     │  │  │  ├─ Comoro
   │     │  │  │  ├─ Kerguelen
   │     │  │  │  ├─ Mahe
   │     │  │  │  ├─ Maldives
   │     │  │  │  ├─ Mauritius
   │     │  │  │  ├─ Mayotte
   │     │  │  │  ├─ Reunion
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Iran
   │     │  │  ├─ iso3166.tab
   │     │  │  ├─ Israel
   │     │  │  ├─ Jamaica
   │     │  │  ├─ Japan
   │     │  │  ├─ Kwajalein
   │     │  │  ├─ leapseconds
   │     │  │  ├─ Libya
   │     │  │  ├─ MET
   │     │  │  ├─ Mexico
   │     │  │  │  ├─ BajaNorte
   │     │  │  │  ├─ BajaSur
   │     │  │  │  ├─ General
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ MST
   │     │  │  ├─ MST7MDT
   │     │  │  ├─ Navajo
   │     │  │  ├─ NZ
   │     │  │  ├─ NZ-CHAT
   │     │  │  ├─ Pacific
   │     │  │  │  ├─ Apia
   │     │  │  │  ├─ Auckland
   │     │  │  │  ├─ Bougainville
   │     │  │  │  ├─ Chatham
   │     │  │  │  ├─ Chuuk
   │     │  │  │  ├─ Easter
   │     │  │  │  ├─ Efate
   │     │  │  │  ├─ Enderbury
   │     │  │  │  ├─ Fakaofo
   │     │  │  │  ├─ Fiji
   │     │  │  │  ├─ Funafuti
   │     │  │  │  ├─ Galapagos
   │     │  │  │  ├─ Gambier
   │     │  │  │  ├─ Guadalcanal
   │     │  │  │  ├─ Guam
   │     │  │  │  ├─ Honolulu
   │     │  │  │  ├─ Johnston
   │     │  │  │  ├─ Kanton
   │     │  │  │  ├─ Kiritimati
   │     │  │  │  ├─ Kosrae
   │     │  │  │  ├─ Kwajalein
   │     │  │  │  ├─ Majuro
   │     │  │  │  ├─ Marquesas
   │     │  │  │  ├─ Midway
   │     │  │  │  ├─ Nauru
   │     │  │  │  ├─ Niue
   │     │  │  │  ├─ Norfolk
   │     │  │  │  ├─ Noumea
   │     │  │  │  ├─ Pago_Pago
   │     │  │  │  ├─ Palau
   │     │  │  │  ├─ Pitcairn
   │     │  │  │  ├─ Pohnpei
   │     │  │  │  ├─ Ponape
   │     │  │  │  ├─ Port_Moresby
   │     │  │  │  ├─ Rarotonga
   │     │  │  │  ├─ Saipan
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ Tahiti
   │     │  │  │  ├─ Tarawa
   │     │  │  │  ├─ Tongatapu
   │     │  │  │  ├─ Truk
   │     │  │  │  ├─ Wake
   │     │  │  │  ├─ Wallis
   │     │  │  │  ├─ Yap
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ Poland
   │     │  │  ├─ Portugal
   │     │  │  ├─ PRC
   │     │  │  ├─ PST8PDT
   │     │  │  ├─ ROC
   │     │  │  ├─ ROK
   │     │  │  ├─ Singapore
   │     │  │  ├─ Turkey
   │     │  │  ├─ tzdata.zi
   │     │  │  ├─ UCT
   │     │  │  ├─ Universal
   │     │  │  ├─ US
   │     │  │  │  ├─ Alaska
   │     │  │  │  ├─ Aleutian
   │     │  │  │  ├─ Arizona
   │     │  │  │  ├─ Central
   │     │  │  │  ├─ East-Indiana
   │     │  │  │  ├─ Eastern
   │     │  │  │  ├─ Hawaii
   │     │  │  │  ├─ Indiana-Starke
   │     │  │  │  ├─ Michigan
   │     │  │  │  ├─ Mountain
   │     │  │  │  ├─ Pacific
   │     │  │  │  ├─ Samoa
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ UTC
   │     │  │  ├─ W-SU
   │     │  │  ├─ WET
   │     │  │  ├─ zone.tab
   │     │  │  ├─ zone1970.tab
   │     │  │  ├─ zonenow.tab
   │     │  │  ├─ Zulu
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ zones
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ tzdata-2025.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ licenses
   │     │  │     └─ LICENSE_APACHE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ urllib3
   │     │  ├─ connection.py
   │     │  ├─ connectionpool.py
   │     │  ├─ contrib
   │     │  │  ├─ emscripten
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ emscripten_fetch_worker.js
   │     │  │  │  ├─ fetch.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-313.pyc
   │     │  │  │     ├─ fetch.cpython-313.pyc
   │     │  │  │     ├─ request.cpython-313.pyc
   │     │  │  │     ├─ response.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ pyopenssl.py
   │     │  │  ├─ socks.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pyopenssl.cpython-313.pyc
   │     │  │     ├─ socks.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ fields.py
   │     │  ├─ filepost.py
   │     │  ├─ http2
   │     │  │  ├─ connection.py
   │     │  │  ├─ probe.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ probe.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ poolmanager.py
   │     │  ├─ py.typed
   │     │  ├─ response.py
   │     │  ├─ util
   │     │  │  ├─ connection.py
   │     │  │  ├─ proxy.py
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ retry.py
   │     │  │  ├─ ssltransport.py
   │     │  │  ├─ ssl_.py
   │     │  │  ├─ ssl_match_hostname.py
   │     │  │  ├─ timeout.py
   │     │  │  ├─ url.py
   │     │  │  ├─ util.py
   │     │  │  ├─ wait.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ proxy.cpython-313.pyc
   │     │  │     ├─ request.cpython-313.pyc
   │     │  │     ├─ response.cpython-313.pyc
   │     │  │     ├─ retry.cpython-313.pyc
   │     │  │     ├─ ssltransport.cpython-313.pyc
   │     │  │     ├─ ssl_.cpython-313.pyc
   │     │  │     ├─ ssl_match_hostname.cpython-313.pyc
   │     │  │     ├─ timeout.cpython-313.pyc
   │     │  │     ├─ url.cpython-313.pyc
   │     │  │     ├─ util.cpython-313.pyc
   │     │  │     ├─ wait.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ _base_connection.py
   │     │  ├─ _collections.py
   │     │  ├─ _request_methods.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ connectionpool.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ fields.cpython-313.pyc
   │     │     ├─ filepost.cpython-313.pyc
   │     │     ├─ poolmanager.cpython-313.pyc
   │     │     ├─ response.cpython-313.pyc
   │     │     ├─ _base_connection.cpython-313.pyc
   │     │     ├─ _collections.cpython-313.pyc
   │     │     ├─ _request_methods.cpython-313.pyc
   │     │     ├─ _version.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ urllib3-2.6.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ uvicorn
   │     │  ├─ config.py
   │     │  ├─ importer.py
   │     │  ├─ lifespan
   │     │  │  ├─ off.py
   │     │  │  ├─ on.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ off.cpython-313.pyc
   │     │  │     ├─ on.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ logging.py
   │     │  ├─ loops
   │     │  │  ├─ asyncio.py
   │     │  │  ├─ auto.py
   │     │  │  ├─ uvloop.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asyncio.cpython-313.pyc
   │     │  │     ├─ auto.cpython-313.pyc
   │     │  │     ├─ uvloop.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ main.py
   │     │  ├─ middleware
   │     │  │  ├─ asgi2.py
   │     │  │  ├─ message_logger.py
   │     │  │  ├─ proxy_headers.py
   │     │  │  ├─ wsgi.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ asgi2.cpython-313.pyc
   │     │  │     ├─ message_logger.cpython-313.pyc
   │     │  │     ├─ proxy_headers.cpython-313.pyc
   │     │  │     ├─ wsgi.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ protocols
   │     │  │  ├─ http
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ flow_control.py
   │     │  │  │  ├─ h11_impl.py
   │     │  │  │  ├─ httptools_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ flow_control.cpython-313.pyc
   │     │  │  │     ├─ h11_impl.cpython-313.pyc
   │     │  │  │     ├─ httptools_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ utils.py
   │     │  │  ├─ websockets
   │     │  │  │  ├─ auto.py
   │     │  │  │  ├─ websockets_impl.py
   │     │  │  │  ├─ websockets_sansio_impl.py
   │     │  │  │  ├─ wsproto_impl.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auto.cpython-313.pyc
   │     │  │  │     ├─ websockets_impl.cpython-313.pyc
   │     │  │  │     ├─ websockets_sansio_impl.cpython-313.pyc
   │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
   │     │  │  │     └─ __init__.cpython-313.pyc
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ py.typed
   │     │  ├─ server.py
   │     │  ├─ supervisors
   │     │  │  ├─ basereload.py
   │     │  │  ├─ multiprocess.py
   │     │  │  ├─ statreload.py
   │     │  │  ├─ watchfilesreload.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ basereload.cpython-313.pyc
   │     │  │     ├─ multiprocess.cpython-313.pyc
   │     │  │     ├─ statreload.cpython-313.pyc
   │     │  │     ├─ watchfilesreload.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ workers.py
   │     │  ├─ _compat.py
   │     │  ├─ _subprocess.py
   │     │  ├─ _types.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ config.cpython-313.pyc
   │     │     ├─ importer.cpython-313.pyc
   │     │     ├─ logging.cpython-313.pyc
   │     │     ├─ main.cpython-313.pyc
   │     │     ├─ server.cpython-313.pyc
   │     │     ├─ workers.cpython-313.pyc
   │     │     ├─ _compat.cpython-313.pyc
   │     │     ├─ _subprocess.cpython-313.pyc
   │     │     ├─ _types.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ uvicorn-0.41.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ websockets
   │     │  ├─ asyncio
   │     │  │  ├─ async_timeout.py
   │     │  │  ├─ client.py
   │     │  │  ├─ compatibility.py
   │     │  │  ├─ connection.py
   │     │  │  ├─ messages.py
   │     │  │  ├─ router.py
   │     │  │  ├─ server.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ async_timeout.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ compatibility.cpython-313.pyc
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ messages.cpython-313.pyc
   │     │  │     ├─ router.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ auth.py
   │     │  ├─ cli.py
   │     │  ├─ client.py
   │     │  ├─ connection.py
   │     │  ├─ datastructures.py
   │     │  ├─ exceptions.py
   │     │  ├─ extensions
   │     │  │  ├─ base.py
   │     │  │  ├─ permessage_deflate.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ base.cpython-313.pyc
   │     │  │     ├─ permessage_deflate.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ frames.py
   │     │  ├─ headers.py
   │     │  ├─ http.py
   │     │  ├─ http11.py
   │     │  ├─ imports.py
   │     │  ├─ legacy
   │     │  │  ├─ auth.py
   │     │  │  ├─ client.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ framing.py
   │     │  │  ├─ handshake.py
   │     │  │  ├─ http.py
   │     │  │  ├─ protocol.py
   │     │  │  ├─ server.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ auth.cpython-313.pyc
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ exceptions.cpython-313.pyc
   │     │  │     ├─ framing.cpython-313.pyc
   │     │  │     ├─ handshake.cpython-313.pyc
   │     │  │     ├─ http.cpython-313.pyc
   │     │  │     ├─ protocol.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ protocol.py
   │     │  ├─ py.typed
   │     │  ├─ server.py
   │     │  ├─ speedups.c
   │     │  ├─ speedups.cp313-win_amd64.pyd
   │     │  ├─ speedups.pyi
   │     │  ├─ streams.py
   │     │  ├─ sync
   │     │  │  ├─ client.py
   │     │  │  ├─ connection.py
   │     │  │  ├─ messages.py
   │     │  │  ├─ router.py
   │     │  │  ├─ server.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ client.cpython-313.pyc
   │     │  │     ├─ connection.cpython-313.pyc
   │     │  │     ├─ messages.cpython-313.pyc
   │     │  │     ├─ router.cpython-313.pyc
   │     │  │     ├─ server.cpython-313.pyc
   │     │  │     ├─ utils.cpython-313.pyc
   │     │  │     └─ __init__.cpython-313.pyc
   │     │  ├─ typing.py
   │     │  ├─ uri.py
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ auth.cpython-313.pyc
   │     │     ├─ cli.cpython-313.pyc
   │     │     ├─ client.cpython-313.pyc
   │     │     ├─ connection.cpython-313.pyc
   │     │     ├─ datastructures.cpython-313.pyc
   │     │     ├─ exceptions.cpython-313.pyc
   │     │     ├─ frames.cpython-313.pyc
   │     │     ├─ headers.cpython-313.pyc
   │     │     ├─ http.cpython-313.pyc
   │     │     ├─ http11.cpython-313.pyc
   │     │     ├─ imports.cpython-313.pyc
   │     │     ├─ protocol.cpython-313.pyc
   │     │     ├─ server.cpython-313.pyc
   │     │     ├─ streams.cpython-313.pyc
   │     │     ├─ typing.cpython-313.pyc
   │     │     ├─ uri.cpython-313.pyc
   │     │     ├─ utils.cpython-313.pyc
   │     │     ├─ version.cpython-313.pyc
   │     │     ├─ __init__.cpython-313.pyc
   │     │     └─ __main__.cpython-313.pyc
   │     ├─ websockets-15.0.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ yarl
   │     │  ├─ py.typed
   │     │  ├─ _parse.py
   │     │  ├─ _path.py
   │     │  ├─ _query.py
   │     │  ├─ _quoters.py
   │     │  ├─ _quoting.py
   │     │  ├─ _quoting_c.cp313-win_amd64.pyd
   │     │  ├─ _quoting_c.pyx
   │     │  ├─ _quoting_py.py
   │     │  ├─ _url.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _parse.cpython-313.pyc
   │     │     ├─ _path.cpython-313.pyc
   │     │     ├─ _query.cpython-313.pyc
   │     │     ├─ _quoters.cpython-313.pyc
   │     │     ├─ _quoting.cpython-313.pyc
   │     │     ├─ _quoting_py.cpython-313.pyc
   │     │     ├─ _url.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ yarl-1.23.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  ├─ LICENSE
   │     │  │  └─ NOTICE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ zstandard
   │     │  ├─ backend_c.cp313-win_amd64.pyd
   │     │  ├─ backend_cffi.py
   │     │  ├─ py.typed
   │     │  ├─ _cffi.cp313-win_amd64.pyd
   │     │  ├─ __init__.py
   │     │  ├─ __init__.pyi
   │     │  └─ __pycache__
   │     │     ├─ backend_cffi.cpython-313.pyc
   │     │     └─ __init__.cpython-313.pyc
   │     ├─ zstandard-0.25.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ _cffi_backend.cp313-win_amd64.pyd
   │     └─ __pycache__
   │        ├─ deprecation.cpython-313.pyc
   │        ├─ six.cpython-313.pyc
   │        └─ typing_extensions.cpython-313.pyc
   ├─ pyvenv.cfg
   └─ Scripts
      ├─ activate
      ├─ activate.bat
      ├─ activate.fish
      ├─ Activate.ps1
      ├─ deactivate.bat
      ├─ dotenv.exe
      ├─ f2py.exe
      ├─ fastapi.exe
      ├─ httpx.exe
      ├─ markdown-it.exe
      ├─ normalizer.exe
      ├─ numpy-config.exe
      ├─ pip.exe
      ├─ pip3.13.exe
      ├─ pip3.exe
      ├─ pygmentize.exe
      ├─ pyiceberg.exe
      ├─ python.exe
      ├─ pythonw.exe
      ├─ uvicorn.exe
      └─ websockets.exe

```
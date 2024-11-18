ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.215480, -7.461139, 109.222838, -7.456701]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_BatasRT_2 = new ol.format.GeoJSON();
var features_BatasRT_2 = format_BatasRT_2.readFeatures(json_BatasRT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasRT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_2.addFeatures(features_BatasRT_2);
var lyr_BatasRT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_2, 
                style: style_BatasRT_2,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_2_0.png" /> <br />\
    <img src="styles/legend/BatasRT_2_1.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/BatasRT_2_2.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/BatasRT_2_3.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/BatasRT_2_4.png" /> RT 01 RW 04<br />\
    <img src="styles/legend/BatasRT_2_5.png" /> RT 01 RW 05<br />\
    <img src="styles/legend/BatasRT_2_6.png" /> RT 01 RW 06<br />\
    <img src="styles/legend/BatasRT_2_7.png" /> RT 01 RW 07<br />\
    <img src="styles/legend/BatasRT_2_8.png" /> RT 01 RW 08<br />\
    <img src="styles/legend/BatasRT_2_9.png" /> RT 01 RW 09<br />\
    <img src="styles/legend/BatasRT_2_10.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/BatasRT_2_11.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/BatasRT_2_12.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/BatasRT_2_13.png" /> RT 02 RW 04<br />\
    <img src="styles/legend/BatasRT_2_14.png" /> RT 02 RW 05<br />\
    <img src="styles/legend/BatasRT_2_15.png" /> RT 02 RW 06<br />\
    <img src="styles/legend/BatasRT_2_16.png" /> RT 02 RW 07<br />\
    <img src="styles/legend/BatasRT_2_17.png" /> RT 02 RW 08<br />\
    <img src="styles/legend/BatasRT_2_18.png" /> RT 02 RW 09<br />\
    <img src="styles/legend/BatasRT_2_19.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/BatasRT_2_20.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/BatasRT_2_21.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/BatasRT_2_22.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/BatasRT_2_23.png" /> RT 03 RW 05<br />\
    <img src="styles/legend/BatasRT_2_24.png" /> RT 03 RW 06<br />\
    <img src="styles/legend/BatasRT_2_25.png" /> RT 03 RW 07<br />\
    <img src="styles/legend/BatasRT_2_26.png" /> RT 03 RW 08<br />\
    <img src="styles/legend/BatasRT_2_27.png" /> RT 03 RWV 09<br />\
    <img src="styles/legend/BatasRT_2_28.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/BatasRT_2_29.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/BatasRT_2_30.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/BatasRT_2_31.png" /> RT 04 RW 05<br />\
    <img src="styles/legend/BatasRT_2_32.png" /> RT 04 RW 06<br />\
    <img src="styles/legend/BatasRT_2_33.png" /> RT 04 RW 07<br />\
    <img src="styles/legend/BatasRT_2_34.png" /> RT 04 RW 08<br />\
    <img src="styles/legend/BatasRT_2_35.png" /> RT 04 RW 09<br />\
    <img src="styles/legend/BatasRT_2_36.png" /> RT 04 RWV 01<br />\
    <img src="styles/legend/BatasRT_2_37.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/BatasRT_2_38.png" /> RT 05 RW 02<br />\
    <img src="styles/legend/BatasRT_2_39.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/BatasRT_2_40.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/BatasRT_2_41.png" /> RT 05 RW 05<br />\
    <img src="styles/legend/BatasRT_2_42.png" /> RT 05 RW 06<br />\
    <img src="styles/legend/BatasRT_2_43.png" /> RT 05 RW 07<br />\
    <img src="styles/legend/BatasRT_2_44.png" /> RT 05 RW 08<br />\
    <img src="styles/legend/BatasRT_2_45.png" /> RT 05 RW B09<br />\
    <img src="styles/legend/BatasRT_2_46.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/BatasRT_2_47.png" /> RT 06 RW 07<br />\
    <img src="styles/legend/BatasRT_2_48.png" /> RT 06 RW 08<br />\
    <img src="styles/legend/BatasRT_2_49.png" /> RT 06 RW 09<br />\
    <img src="styles/legend/BatasRT_2_50.png" /> RT 07 RW 01<br />\
    <img src="styles/legend/BatasRT_2_51.png" /> RT 07 RW 08<br />\
    <img src="styles/legend/BatasRT_2_52.png" /> RT 07 RW 09<br />\
    <img src="styles/legend/BatasRT_2_53.png" /> RT 08 RW 01<br />\
    <img src="styles/legend/BatasRT_2_54.png" /> RT 08 RW 09<br />\
    <img src="styles/legend/BatasRT_2_55.png" /> RT 09 RW 09<br />\
    <img src="styles/legend/BatasRT_2_56.png" /> RT 10 RW 09<br />'
        });
var format_Sawah_3 = new ol.format.GeoJSON();
var features_Sawah_3 = format_Sawah_3.readFeatures(json_Sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_3.addFeatures(features_Sawah_3);
var lyr_Sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_3, 
                style: style_Sawah_3,
                popuplayertitle: "Sawah",
                interactive: true,
    title: 'Sawah<br />\
    <img src="styles/legend/Sawah_3_0.png" /> 1<br />\
    <img src="styles/legend/Sawah_3_1.png" /> 2<br />'
        });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_BatasDesaRW_5 = new ol.format.GeoJSON();
var features_BatasDesaRW_5 = format_BatasDesaRW_5.readFeatures(json_BatasDesaRW_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasDesaRW_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaRW_5.addFeatures(features_BatasDesaRW_5);
var lyr_BatasDesaRW_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaRW_5, 
                style: style_BatasDesaRW_5,
                popuplayertitle: "Batas Desa RW",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaRW_5.png" /> Batas Desa RW'
            });
var format_jalandesa_6 = new ol.format.GeoJSON();
var features_jalandesa_6 = format_jalandesa_6.readFeatures(json_jalandesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalandesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_6.addFeatures(features_jalandesa_6);
var lyr_jalandesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_6, 
                style: style_jalandesa_6,
                popuplayertitle: "jalandesa",
                interactive: true,
    title: 'jalandesa<br />\
    <img src="styles/legend/jalandesa_6_0.png" /> 1<br />\
    <img src="styles/legend/jalandesa_6_1.png" /> 2<br />\
    <img src="styles/legend/jalandesa_6_2.png" /> 3<br />\
    <img src="styles/legend/jalandesa_6_3.png" /> 4<br />\
    <img src="styles/legend/jalandesa_6_4.png" /> 6<br />\
    <img src="styles/legend/jalandesa_6_5.png" /> <br />'
        });
var format_BangunanSdbw_Poly_7 = new ol.format.GeoJSON();
var features_BangunanSdbw_Poly_7 = format_BangunanSdbw_Poly_7.readFeatures(json_BangunanSdbw_Poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BangunanSdbw_Poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanSdbw_Poly_7.addFeatures(features_BangunanSdbw_Poly_7);
var lyr_BangunanSdbw_Poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanSdbw_Poly_7, 
                style: style_BangunanSdbw_Poly_7,
                popuplayertitle: "BangunanSdbw_Poly",
                interactive: true,
    title: 'BangunanSdbw_Poly<br />\
    <img src="styles/legend/BangunanSdbw_Poly_7_0.png" /> 1<br />\
    <img src="styles/legend/BangunanSdbw_Poly_7_1.png" /> 2<br />\
    <img src="styles/legend/BangunanSdbw_Poly_7_2.png" /> <br />'
        });
var format_Apotek_8 = new ol.format.GeoJSON();
var features_Apotek_8 = format_Apotek_8.readFeatures(json_Apotek_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apotek_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apotek_8.addFeatures(features_Apotek_8);
var lyr_Apotek_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apotek_8, 
                style: style_Apotek_8,
                popuplayertitle: "Apotek",
                interactive: true,
    title: 'Apotek<br />\
    <img src="styles/legend/Apotek_8_0.png" /> Apotek Indah Farma<br />\
    <img src="styles/legend/Apotek_8_1.png" /> <br />'
        });
var format_Pemerintahan_sidabowa_9 = new ol.format.GeoJSON();
var features_Pemerintahan_sidabowa_9 = format_Pemerintahan_sidabowa_9.readFeatures(json_Pemerintahan_sidabowa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemerintahan_sidabowa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_sidabowa_9.addFeatures(features_Pemerintahan_sidabowa_9);
var lyr_Pemerintahan_sidabowa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_sidabowa_9, 
                style: style_Pemerintahan_sidabowa_9,
                popuplayertitle: "Pemerintahan_sidabowa",
                interactive: true,
    title: 'Pemerintahan_sidabowa<br />\
    <img src="styles/legend/Pemerintahan_sidabowa_9_0.png" /> <br />'
        });
var format_Bank_10 = new ol.format.GeoJSON();
var features_Bank_10 = format_Bank_10.readFeatures(json_Bank_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bank_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_10.addFeatures(features_Bank_10);
var lyr_Bank_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bank_10, 
                style: style_Bank_10,
                popuplayertitle: "Bank",
                interactive: true,
    title: 'Bank<br />\
    <img src="styles/legend/Bank_10_0.png" /> <br />'
        });
var format_Lapangan_11 = new ol.format.GeoJSON();
var features_Lapangan_11 = format_Lapangan_11.readFeatures(json_Lapangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_11.addFeatures(features_Lapangan_11);
var lyr_Lapangan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_11, 
                style: style_Lapangan_11,
                popuplayertitle: "Lapangan",
                interactive: true,
    title: 'Lapangan<br />\
    <img src="styles/legend/Lapangan_11_0.png" /> <br />'
        });
var format_Gereja_12 = new ol.format.GeoJSON();
var features_Gereja_12 = format_Gereja_12.readFeatures(json_Gereja_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gereja_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gereja_12.addFeatures(features_Gereja_12);
var lyr_Gereja_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gereja_12, 
                style: style_Gereja_12,
                popuplayertitle: "Gereja",
                interactive: true,
    title: 'Gereja<br />\
    <img src="styles/legend/Gereja_12_0.png" /> <br />'
        });
var format_PDAM_13 = new ol.format.GeoJSON();
var features_PDAM_13 = format_PDAM_13.readFeatures(json_PDAM_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PDAM_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDAM_13.addFeatures(features_PDAM_13);
var lyr_PDAM_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDAM_13, 
                style: style_PDAM_13,
                popuplayertitle: "PDAM",
                interactive: true,
    title: 'PDAM<br />\
    <img src="styles/legend/PDAM_13_0.png" /> <br />'
        });
var format_TPU_14 = new ol.format.GeoJSON();
var features_TPU_14 = format_TPU_14.readFeatures(json_TPU_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TPU_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_14.addFeatures(features_TPU_14);
var lyr_TPU_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_14, 
                style: style_TPU_14,
                popuplayertitle: "TPU",
                interactive: true,
    title: 'TPU<br />\
    <img src="styles/legend/TPU_14_0.png" /> <br />'
        });
var format_Sekolah_15 = new ol.format.GeoJSON();
var features_Sekolah_15 = format_Sekolah_15.readFeatures(json_Sekolah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_15.addFeatures(features_Sekolah_15);
var lyr_Sekolah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_15, 
                style: style_Sekolah_15,
                popuplayertitle: "Sekolah",
                interactive: true,
    title: 'Sekolah<br />\
    <img src="styles/legend/Sekolah_15_0.png" /> <br />'
        });
var format_Masjid_16 = new ol.format.GeoJSON();
var features_Masjid_16 = format_Masjid_16.readFeatures(json_Masjid_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Masjid_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_16.addFeatures(features_Masjid_16);
var lyr_Masjid_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_16, 
                style: style_Masjid_16,
                popuplayertitle: "Masjid",
                interactive: true,
    title: 'Masjid<br />\
    <img src="styles/legend/Masjid_16_0.png" /> <br />'
        });
var format_Mushola_17 = new ol.format.GeoJSON();
var features_Mushola_17 = format_Mushola_17.readFeatures(json_Mushola_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mushola_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mushola_17.addFeatures(features_Mushola_17);
var lyr_Mushola_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mushola_17, 
                style: style_Mushola_17,
                popuplayertitle: "Mushola",
                interactive: true,
    title: 'Mushola<br />\
    <img src="styles/legend/Mushola_17_0.png" /> <br />'
        });
var format_TempatMakan_18 = new ol.format.GeoJSON();
var features_TempatMakan_18 = format_TempatMakan_18.readFeatures(json_TempatMakan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatMakan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakan_18.addFeatures(features_TempatMakan_18);
var lyr_TempatMakan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatMakan_18, 
                style: style_TempatMakan_18,
                popuplayertitle: "Tempat Makan",
                interactive: true,
    title: 'Tempat Makan<br />\
    <img src="styles/legend/TempatMakan_18_0.png" /> <br />\
    <img src="styles/legend/TempatMakan_18_1.png" /> Ada Coklat<br />\
    <img src="styles/legend/TempatMakan_18_2.png" /> Ayam Bakar Donald Trump<br />\
    <img src="styles/legend/TempatMakan_18_3.png" /> Bakmie 5 Bersaudara Samuel PP<br />\
    <img src="styles/legend/TempatMakan_18_4.png" /> Bakso Bogem Darmawan<br />\
    <img src="styles/legend/TempatMakan_18_5.png" /> Bakso Wafa\'<br />\
    <img src="styles/legend/TempatMakan_18_6.png" /> Bakso,Mie Ayam & Seblak<br />\
    <img src="styles/legend/TempatMakan_18_7.png" /> Catering Bank Den<br />\
    <img src="styles/legend/TempatMakan_18_8.png" /> Chiila Food & Dadut Snack<br />\
    <img src="styles/legend/TempatMakan_18_9.png" /> Cireng Keker<br />\
    <img src="styles/legend/TempatMakan_18_10.png" /> Dapur Caka<br />\
    <img src="styles/legend/TempatMakan_18_11.png" /> Della Snack<br />\
    <img src="styles/legend/TempatMakan_18_12.png" /> DKF<br />\
    <img src="styles/legend/TempatMakan_18_13.png" /> Dkriuk<br />\
    <img src="styles/legend/TempatMakan_18_14.png" /> Fajar FC Pusat<br />\
    <img src="styles/legend/TempatMakan_18_15.png" /> Gita Pempek Asli Palembang<br />\
    <img src="styles/legend/TempatMakan_18_16.png" /> Giza BBQ Korea<br />\
    <img src="styles/legend/TempatMakan_18_17.png" /> Ikan Asap Bari Jenggot<br />\
    <img src="styles/legend/TempatMakan_18_18.png" /> Kedai Makan Barokah Jos<br />\
    <img src="styles/legend/TempatMakan_18_19.png" /> Kedai Ngebut 46<br />\
    <img src="styles/legend/TempatMakan_18_20.png" /> Ketroprak Jakarta<br />\
    <img src="styles/legend/TempatMakan_18_21.png" /> Kinan Fried Chicken<br />\
    <img src="styles/legend/TempatMakan_18_22.png" /> Kopkun Foodcourt<br />\
    <img src="styles/legend/TempatMakan_18_23.png" /> Kue Apem<br />\
    <img src="styles/legend/TempatMakan_18_24.png" /> Lamongan Cak Bagol<br />\
    <img src="styles/legend/TempatMakan_18_25.png" /> Meta Kitchen<br />\
    <img src="styles/legend/TempatMakan_18_26.png" /> Mie Ayam Pak Kusen<br />\
    <img src="styles/legend/TempatMakan_18_27.png" /> Mie Ayam Pak Siyam<br />\
    <img src="styles/legend/TempatMakan_18_28.png" /> Mie Ayam Prapatan<br />\
    <img src="styles/legend/TempatMakan_18_29.png" /> Mie Ayam RJ<br />\
    <img src="styles/legend/TempatMakan_18_30.png" /> Mie Ayam Zoya<br />\
    <img src="styles/legend/TempatMakan_18_31.png" /> Mutiara Ice<br />\
    <img src="styles/legend/TempatMakan_18_32.png" /> Nasi Bakar Nyonya Besar<br />\
    <img src="styles/legend/TempatMakan_18_33.png" /> Nasi Goreng AJ<br />\
    <img src="styles/legend/TempatMakan_18_34.png" /> Nasi Goreng Jawa<br />\
    <img src="styles/legend/TempatMakan_18_35.png" /> Ngemul Please<br />\
    <img src="styles/legend/TempatMakan_18_36.png" /> Ngikanyuk<br />\
    <img src="styles/legend/TempatMakan_18_37.png" /> nindyaCookies & Catering<br />\
    <img src="styles/legend/TempatMakan_18_38.png" /> Rafka Aice<br />\
    <img src="styles/legend/TempatMakan_18_39.png" /> Ran\'s Kitchen<br />\
    <img src="styles/legend/TempatMakan_18_40.png" /> RM Basamo<br />\
    <img src="styles/legend/TempatMakan_18_41.png" /> RM Gudril<br />\
    <img src="styles/legend/TempatMakan_18_42.png" /> RM. KANJENG<br />\
    <img src="styles/legend/TempatMakan_18_43.png" /> RM. Ronah Maek<br />\
    <img src="styles/legend/TempatMakan_18_44.png" /> Rocket Chicken<br />\
    <img src="styles/legend/TempatMakan_18_45.png" /> Roti Kita Bakery<br />\
    <img src="styles/legend/TempatMakan_18_46.png" /> SAE JUSS<br />\
    <img src="styles/legend/TempatMakan_18_47.png" /> Sate Ayam Martawi GSBP<br />\
    <img src="styles/legend/TempatMakan_18_48.png" /> Sate Kambing Al Barokah<br />\
    <img src="styles/legend/TempatMakan_18_49.png" /> Satria Fried Chicken<br />\
    <img src="styles/legend/TempatMakan_18_50.png" /> Seblak adarasa<br />\
    <img src="styles/legend/TempatMakan_18_51.png" /> Seblak Cabe Ijo TIM 138<br />\
    <img src="styles/legend/TempatMakan_18_52.png" /> Serabi Solo<br />\
    <img src="styles/legend/TempatMakan_18_53.png" /> Syafira Cake<br />\
    <img src="styles/legend/TempatMakan_18_54.png" /> Telur Asin "nikimawon"<br />\
    <img src="styles/legend/TempatMakan_18_55.png" /> Warung Kupat Tahu<br />\
    <img src="styles/legend/TempatMakan_18_56.png" /> Warung Maka Berkah Risky<br />\
    <img src="styles/legend/TempatMakan_18_57.png" /> Warung Makan Dua Saudara<br />\
    <img src="styles/legend/TempatMakan_18_58.png" /> Warung Makan Family<br />\
    <img src="styles/legend/TempatMakan_18_59.png" /> Warung Makan Harga Seduluran<br />\
    <img src="styles/legend/TempatMakan_18_60.png" /> Warung Mama Ali<br />\
    <img src="styles/legend/TempatMakan_18_61.png" /> Warung Nasi dan Kedai Kopi<br />\
    <img src="styles/legend/TempatMakan_18_62.png" /> Warung Rujak Bu sri<br />\
    <img src="styles/legend/TempatMakan_18_63.png" /> Warung Rujak Bu Yani<br />\
    <img src="styles/legend/TempatMakan_18_64.png" /> Zeze Cake<br />\
    <img src="styles/legend/TempatMakan_18_65.png" /> Warung Rujak Bu Yati<br />'
        });
var format_rumahku_19 = new ol.format.GeoJSON();
var features_rumahku_19 = format_rumahku_19.readFeatures(json_rumahku_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rumahku_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahku_19.addFeatures(features_rumahku_19);
var lyr_rumahku_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahku_19, 
                style: style_rumahku_19,
                popuplayertitle: "rumahku",
                interactive: true,
                title: '<img src="styles/legend/rumahku_19.png" /> rumahku'
            });
var format_Store_20 = new ol.format.GeoJSON();
var features_Store_20 = format_Store_20.readFeatures(json_Store_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Store_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Store_20.addFeatures(features_Store_20);
var lyr_Store_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Store_20, 
                style: style_Store_20,
                popuplayertitle: "Store",
                interactive: true,
                title: '<img src="styles/legend/Store_20.png" /> Store'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_BatasRT_2.setVisible(true);lyr_Sawah_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_BatasDesaRW_5.setVisible(true);lyr_jalandesa_6.setVisible(true);lyr_BangunanSdbw_Poly_7.setVisible(true);lyr_Apotek_8.setVisible(true);lyr_Pemerintahan_sidabowa_9.setVisible(true);lyr_Bank_10.setVisible(true);lyr_Lapangan_11.setVisible(true);lyr_Gereja_12.setVisible(true);lyr_PDAM_13.setVisible(true);lyr_TPU_14.setVisible(true);lyr_Sekolah_15.setVisible(true);lyr_Masjid_16.setVisible(true);lyr_Mushola_17.setVisible(true);lyr_TempatMakan_18.setVisible(true);lyr_rumahku_19.setVisible(true);lyr_Store_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_BatasRT_2,lyr_Sawah_3,lyr_Sungai_4,lyr_BatasDesaRW_5,lyr_jalandesa_6,lyr_BangunanSdbw_Poly_7,lyr_Apotek_8,lyr_Pemerintahan_sidabowa_9,lyr_Bank_10,lyr_Lapangan_11,lyr_Gereja_12,lyr_PDAM_13,lyr_TPU_14,lyr_Sekolah_15,lyr_Masjid_16,lyr_Mushola_17,lyr_TempatMakan_18,lyr_rumahku_19,lyr_Store_20];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasRT_2.set('fieldAliases', {'id': 'id', 'RT': 'RT', });
lyr_Sawah_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sungai_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasDesaRW_5.set('fieldAliases', {'id': 'id', 'Rw': 'Rw', });
lyr_jalandesa_6.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'lebar': 'lebar', });
lyr_BangunanSdbw_Poly_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Apotek_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'foto': 'foto', });
lyr_Pemerintahan_sidabowa_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Bank_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Lapangan_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Gereja_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_PDAM_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TPU_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sekolah_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Masjid_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Mushola_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatMakan_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_rumahku_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Store_20.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasRT_2.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', });
lyr_Sawah_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasDesaRW_5.set('fieldImages', {'id': 'TextEdit', 'Rw': 'TextEdit', });
lyr_jalandesa_6.set('fieldImages', {'id': 'TextEdit', 'nama jalan': 'TextEdit', 'lebar': 'TextEdit', });
lyr_BangunanSdbw_Poly_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Apotek_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Pemerintahan_sidabowa_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Bank_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Lapangan_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Gereja_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PDAM_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TPU_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sekolah_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Masjid_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Mushola_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatMakan_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_rumahku_19.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Store_20.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasRT_2.set('fieldLabels', {'id': 'no label', 'RT': 'no label', });
lyr_Sawah_3.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_Sungai_4.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_BatasDesaRW_5.set('fieldLabels', {'id': 'no label', 'Rw': 'no label', });
lyr_jalandesa_6.set('fieldLabels', {'id': 'no label', 'nama jalan': 'inline label - always visible', 'lebar': 'no label', });
lyr_BangunanSdbw_Poly_7.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_Apotek_8.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', 'foto': 'inline label - always visible', });
lyr_Pemerintahan_sidabowa_9.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Bank_10.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Lapangan_11.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Gereja_12.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', });
lyr_PDAM_13.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', });
lyr_TPU_14.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Sekolah_15.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Masjid_16.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Mushola_17.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', });
lyr_TempatMakan_18.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_rumahku_19.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Store_20.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', });
lyr_Store_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
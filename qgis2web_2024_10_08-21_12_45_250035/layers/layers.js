ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([1.205502, 6.031269, 1.634705, 6.288688]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zone_accretion_1 = new ol.format.GeoJSON();
var features_zone_accretion_1 = format_zone_accretion_1.readFeatures(json_zone_accretion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_zone_accretion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_accretion_1.addFeatures(features_zone_accretion_1);
var lyr_zone_accretion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_accretion_1, 
                style: style_zone_accretion_1,
                popuplayertitle: "zone_accretion",
                interactive: true,
                title: '<img src="styles/legend/zone_accretion_1.png" /> zone_accretion'
            });
var format_zon_risk_2054_2 = new ol.format.GeoJSON();
var features_zon_risk_2054_2 = format_zon_risk_2054_2.readFeatures(json_zon_risk_2054_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_zon_risk_2054_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zon_risk_2054_2.addFeatures(features_zon_risk_2054_2);
var lyr_zon_risk_2054_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zon_risk_2054_2, 
                style: style_zon_risk_2054_2,
                popuplayertitle: "zon_risk_2054",
                interactive: true,
                title: '<img src="styles/legend/zon_risk_2054_2.png" /> zon_risk_2054'
            });
var format_EROSION_2054_positions_3 = new ol.format.GeoJSON();
var features_EROSION_2054_positions_3 = format_EROSION_2054_positions_3.readFeatures(json_EROSION_2054_positions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EROSION_2054_positions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EROSION_2054_positions_3.addFeatures(features_EROSION_2054_positions_3);
var lyr_EROSION_2054_positions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EROSION_2054_positions_3, 
                style: style_EROSION_2054_positions_3,
                popuplayertitle: "EROSION_2054_positions",
                interactive: true,
                title: '<img src="styles/legend/EROSION_2054_positions_3.png" /> EROSION_2054_positions'
            });
var format_pre_acre_4 = new ol.format.GeoJSON();
var features_pre_acre_4 = format_pre_acre_4.readFeatures(json_pre_acre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pre_acre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_acre_4.addFeatures(features_pre_acre_4);
var lyr_pre_acre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_acre_4, 
                style: style_pre_acre_4,
                popuplayertitle: "pre_acre",
                interactive: true,
    title: 'pre_acre<br />\
    <img src="styles/legend/pre_acre_4_0.png" /> Faible<br />\
    <img src="styles/legend/pre_acre_4_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_acre_4_2.png" /> Elevé<br />'
        });
var format_pre_ero_5 = new ol.format.GeoJSON();
var features_pre_ero_5 = format_pre_ero_5.readFeatures(json_pre_ero_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pre_ero_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_ero_5.addFeatures(features_pre_ero_5);
var lyr_pre_ero_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_ero_5, 
                style: style_pre_ero_5,
                popuplayertitle: "pre_ero",
                interactive: true,
    title: 'pre_ero<br />\
    <img src="styles/legend/pre_ero_5_0.png" /> Elevé<br />\
    <img src="styles/legend/pre_ero_5_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_ero_5_2.png" /> Faible<br />'
        });
var format_traits_cote_2054_6 = new ol.format.GeoJSON();
var features_traits_cote_2054_6 = format_traits_cote_2054_6.readFeatures(json_traits_cote_2054_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_traits_cote_2054_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_traits_cote_2054_6.addFeatures(features_traits_cote_2054_6);
var lyr_traits_cote_2054_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_traits_cote_2054_6, 
                style: style_traits_cote_2054_6,
                popuplayertitle: "traits_cote_2054",
                interactive: true,
                title: '<img src="styles/legend/traits_cote_2054_6.png" /> traits_cote_2054'
            });
var format_Rates_1990_2024_Togo_7 = new ol.format.GeoJSON();
var features_Rates_1990_2024_Togo_7 = format_Rates_1990_2024_Togo_7.readFeatures(json_Rates_1990_2024_Togo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rates_1990_2024_Togo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rates_1990_2024_Togo_7.addFeatures(features_Rates_1990_2024_Togo_7);
var lyr_Rates_1990_2024_Togo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rates_1990_2024_Togo_7, 
                style: style_Rates_1990_2024_Togo_7,
                popuplayertitle: "Rates_1990_2024_Togo",
                interactive: true,
                title: 'Rates_1990_2024_Togo'
            });
var format_Zonevulnrable_2024_8 = new ol.format.GeoJSON();
var features_Zonevulnrable_2024_8 = format_Zonevulnrable_2024_8.readFeatures(json_Zonevulnrable_2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zonevulnrable_2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonevulnrable_2024_8.addFeatures(features_Zonevulnrable_2024_8);
var lyr_Zonevulnrable_2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonevulnrable_2024_8, 
                style: style_Zonevulnrable_2024_8,
                popuplayertitle: "Zone vulnérable_2024",
                interactive: true,
                title: '<img src="styles/legend/Zonevulnrable_2024_8.png" /> Zone vulnérable_2024'
            });
var format_Rate_1990_2001togo_9 = new ol.format.GeoJSON();
var features_Rate_1990_2001togo_9 = format_Rate_1990_2001togo_9.readFeatures(json_Rate_1990_2001togo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rate_1990_2001togo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_1990_2001togo_9.addFeatures(features_Rate_1990_2001togo_9);
var lyr_Rate_1990_2001togo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_1990_2001togo_9, 
                style: style_Rate_1990_2001togo_9,
                popuplayertitle: "Rate_1990_2001togo",
                interactive: true,
                title: 'Rate_1990_2001togo'
            });
var format_Rate_2001_2014togo_10 = new ol.format.GeoJSON();
var features_Rate_2001_2014togo_10 = format_Rate_2001_2014togo_10.readFeatures(json_Rate_2001_2014togo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rate_2001_2014togo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2001_2014togo_10.addFeatures(features_Rate_2001_2014togo_10);
var lyr_Rate_2001_2014togo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2001_2014togo_10, 
                style: style_Rate_2001_2014togo_10,
                popuplayertitle: "Rate_2001_2014togo",
                interactive: true,
                title: 'Rate_2001_2014togo'
            });
var format_Rate_2014_2024togo_11 = new ol.format.GeoJSON();
var features_Rate_2014_2024togo_11 = format_Rate_2014_2024togo_11.readFeatures(json_Rate_2014_2024togo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rate_2014_2024togo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2014_2024togo_11.addFeatures(features_Rate_2014_2024togo_11);
var lyr_Rate_2014_2024togo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2014_2024togo_11, 
                style: style_Rate_2014_2024togo_11,
                popuplayertitle: "Rate_2014_2024togo",
                interactive: true,
                title: 'Rate_2014_2024togo'
            });
var format_TC2024_12 = new ol.format.GeoJSON();
var features_TC2024_12 = format_TC2024_12.readFeatures(json_TC2024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2024_12.addFeatures(features_TC2024_12);
var lyr_TC2024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2024_12, 
                style: style_TC2024_12,
                popuplayertitle: "TC 2024",
                interactive: true,
                title: '<img src="styles/legend/TC2024_12.png" /> TC 2024'
            });
var format_TC2014_13 = new ol.format.GeoJSON();
var features_TC2014_13 = format_TC2014_13.readFeatures(json_TC2014_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2014_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2014_13.addFeatures(features_TC2014_13);
var lyr_TC2014_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2014_13, 
                style: style_TC2014_13,
                popuplayertitle: "TC 2014",
                interactive: true,
                title: '<img src="styles/legend/TC2014_13.png" /> TC 2014'
            });
var format_TC2001_14 = new ol.format.GeoJSON();
var features_TC2001_14 = format_TC2001_14.readFeatures(json_TC2001_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2001_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2001_14.addFeatures(features_TC2001_14);
var lyr_TC2001_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2001_14, 
                style: style_TC2001_14,
                popuplayertitle: "TC 2001",
                interactive: true,
                title: '<img src="styles/legend/TC2001_14.png" /> TC 2001'
            });
var format_TC1990_15 = new ol.format.GeoJSON();
var features_TC1990_15 = format_TC1990_15.readFeatures(json_TC1990_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC1990_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC1990_15.addFeatures(features_TC1990_15);
var lyr_TC1990_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC1990_15, 
                style: style_TC1990_15,
                popuplayertitle: "TC 1990",
                interactive: true,
                title: '<img src="styles/legend/TC1990_15.png" /> TC 1990'
            });
var group_Traitsdecoteanciens = new ol.layer.Group({
                                layers: [lyr_TC2024_12,lyr_TC2014_13,lyr_TC2001_14,lyr_TC1990_15,],
                                fold: "open",
                                title: "Traits de cote anciens"});
var group_Periodesdvolution = new ol.layer.Group({
                                layers: [lyr_Rate_1990_2001togo_9,lyr_Rate_2001_2014togo_10,lyr_Rate_2014_2024togo_11,],
                                fold: "open",
                                title: "Periodes d'évolution"});
var group_Dynamique_19902024 = new ol.layer.Group({
                                layers: [lyr_Rates_1990_2024_Togo_7,lyr_Zonevulnrable_2024_8,],
                                fold: "open",
                                title: "Dynamique_1990-2024"});
var group_Prvisiondrosion = new ol.layer.Group({
                                layers: [lyr_zon_risk_2054_2,lyr_EROSION_2054_positions_3,lyr_pre_acre_4,lyr_pre_ero_5,lyr_traits_cote_2054_6,],
                                fold: "open",
                                title: "Prévision d'érosion"});

lyr_OpenStreetMap_0.setVisible(true);lyr_zone_accretion_1.setVisible(true);lyr_zon_risk_2054_2.setVisible(true);lyr_EROSION_2054_positions_3.setVisible(true);lyr_pre_acre_4.setVisible(true);lyr_pre_ero_5.setVisible(true);lyr_traits_cote_2054_6.setVisible(true);lyr_Rates_1990_2024_Togo_7.setVisible(true);lyr_Zonevulnrable_2024_8.setVisible(true);lyr_Rate_1990_2001togo_9.setVisible(true);lyr_Rate_2001_2014togo_10.setVisible(true);lyr_Rate_2014_2024togo_11.setVisible(true);lyr_TC2024_12.setVisible(true);lyr_TC2014_13.setVisible(true);lyr_TC2001_14.setVisible(true);lyr_TC1990_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zone_accretion_1,group_Prvisiondrosion,group_Dynamique_19902024,group_Periodesdvolution,group_Traitsdecoteanciens];
lyr_zone_accretion_1.set('fieldAliases', {'Id': 'Id', });
lyr_zon_risk_2054_2.set('fieldAliases', {'Id': 'Id', 'nom': 'Village/quartier_risque', 'LRR_2054': 'LRR', });
lyr_EROSION_2054_positions_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Int_20': 'FID_Int_20', 'OBJECTID_2': 'OBJECTID_2', 'FID_TC_202': 'FID_TC_202', 'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', 'FID_Merge_': 'FID_Merge_', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', 'X': 'X', 'Y': 'Y', 'future_X': 'future_X', 'future_Y': 'future_Y', 'FID_pre_er': 'FID_pre_er', 'ObjectID_3': 'ObjectID_3', 'Baseline_1': 'Baseline_1', 'TransOrd_1': 'TransOrd_1', 'TransEdit_': 'TransEdit_', 'Transect_1': 'Transect_1', 'ShrCount_1': 'ShrCount_1', 'LRR_1': 'LRR_1', 'LR2_1': 'LR2_1', 'LCI_1': 'LCI_1', 'LSE_1': 'LSE_1', 'EPR_1': 'EPR_1', 'EPRunc_1': 'EPRunc_1', 'NSM_1': 'NSM_1', 'SCE_1': 'SCE_1', 'WLR_1': 'WLR_1', 'WR2_1': 'WR2_1', 'WCI_1': 'WCI_1', 'WSE_1': 'WSE_1', 'TCD_1': 'TCD_1', 'LRR_2054_2': 'LRR_2054_2', 'nearest_in': 'nearest_in', 'nearest_di': 'nearest_di', 'angle': 'angle', 'X_2054': 'X_2054', 'Y_2054': 'Y_2054', 'distance_e': 'distance_e', });
lyr_pre_acre_4.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_pre_ero_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_traits_cote_2054_6.set('fieldAliases', {'Id': 'Id', 'Noms': 'Noms', 'Longeur': 'Longeur', });
lyr_Rates_1990_2024_Togo_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Zonevulnrable_2024_8.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', 'Taux_éros': 'Taux_éros', });
lyr_Rate_1990_2001togo_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_2001_2014togo_10.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_2014_2024togo_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_TC2024_12.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date', 'Uncertaint': 'Uncertaint', });
lyr_TC2014_13.set('fieldAliases', {'Id': 'Date', 'Date_': 'Date', 'Uncertaint': 'Uncertaint', });
lyr_TC2001_14.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date', 'Uncertaint': 'Uncertaint', });
lyr_TC1990_15.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date', 'Uncertaint': 'Uncertaint', });
lyr_zone_accretion_1.set('fieldImages', {'Id': 'Range', });
lyr_zon_risk_2054_2.set('fieldImages', {'Id': 'Hidden', 'nom': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_EROSION_2054_positions_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Int_20': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'FID_TC_202': 'TextEdit', 'Id': 'TextEdit', 'Date_': 'TextEdit', 'Uncertaint': 'TextEdit', 'FID_Merge_': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'future_X': 'TextEdit', 'future_Y': 'TextEdit', 'FID_pre_er': 'TextEdit', 'ObjectID_3': 'TextEdit', 'Baseline_1': 'TextEdit', 'TransOrd_1': 'TextEdit', 'TransEdit_': 'TextEdit', 'Transect_1': 'TextEdit', 'ShrCount_1': 'TextEdit', 'LRR_1': 'TextEdit', 'LR2_1': 'TextEdit', 'LCI_1': 'TextEdit', 'LSE_1': 'TextEdit', 'EPR_1': 'TextEdit', 'EPRunc_1': 'TextEdit', 'NSM_1': 'TextEdit', 'SCE_1': 'TextEdit', 'WLR_1': 'TextEdit', 'WR2_1': 'TextEdit', 'WCI_1': 'TextEdit', 'WSE_1': 'TextEdit', 'TCD_1': 'TextEdit', 'LRR_2054_2': 'TextEdit', 'nearest_in': 'TextEdit', 'nearest_di': 'TextEdit', 'angle': 'TextEdit', 'X_2054': 'TextEdit', 'Y_2054': 'TextEdit', 'distance_e': 'TextEdit', });
lyr_pre_acre_4.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_pre_ero_5.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_traits_cote_2054_6.set('fieldImages', {'Id': 'Range', 'Noms': 'TextEdit', 'Longeur': 'Range', });
lyr_Rates_1990_2024_Togo_7.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_Zonevulnrable_2024_8.set('fieldImages', {'Id': 'Range', 'Nom': 'TextEdit', 'Taux_éros': 'TextEdit', });
lyr_Rate_1990_2001togo_9.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_Rate_2001_2014togo_10.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_Rate_2014_2024togo_11.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_TC2024_12.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC2014_13.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC2001_14.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC1990_15.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_zone_accretion_1.set('fieldLabels', {'Id': 'no label', });
lyr_zon_risk_2054_2.set('fieldLabels', {'nom': 'no label', 'LRR_2054': 'no label', });
lyr_EROSION_2054_positions_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Int_20': 'no label', 'OBJECTID_2': 'no label', 'FID_TC_202': 'no label', 'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', 'FID_Merge_': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', 'X': 'no label', 'Y': 'no label', 'future_X': 'no label', 'future_Y': 'no label', 'FID_pre_er': 'no label', 'ObjectID_3': 'no label', 'Baseline_1': 'no label', 'TransOrd_1': 'no label', 'TransEdit_': 'no label', 'Transect_1': 'no label', 'ShrCount_1': 'no label', 'LRR_1': 'no label', 'LR2_1': 'no label', 'LCI_1': 'no label', 'LSE_1': 'no label', 'EPR_1': 'no label', 'EPRunc_1': 'no label', 'NSM_1': 'no label', 'SCE_1': 'no label', 'WLR_1': 'no label', 'WR2_1': 'no label', 'WCI_1': 'no label', 'WSE_1': 'no label', 'TCD_1': 'no label', 'LRR_2054_2': 'no label', 'nearest_in': 'no label', 'nearest_di': 'no label', 'angle': 'no label', 'X_2054': 'no label', 'Y_2054': 'no label', 'distance_e': 'no label', });
lyr_pre_acre_4.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_pre_ero_5.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_traits_cote_2054_6.set('fieldLabels', {'Id': 'no label', 'Noms': 'no label', 'Longeur': 'no label', });
lyr_Rates_1990_2024_Togo_7.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_Zonevulnrable_2024_8.set('fieldLabels', {'Id': 'no label', 'Nom': 'no label', 'Taux_éros': 'no label', });
lyr_Rate_1990_2001togo_9.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_Rate_2001_2014togo_10.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_Rate_2014_2024togo_11.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LSE': 'no label', 'LCI': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', });
lyr_TC2024_12.set('fieldLabels', {'Date_': 'no label', });
lyr_TC2014_13.set('fieldLabels', {'Date_': 'no label', });
lyr_TC2001_14.set('fieldLabels', {'Date_': 'no label', });
lyr_TC1990_15.set('fieldLabels', {'Date_': 'no label', });
lyr_TC1990_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
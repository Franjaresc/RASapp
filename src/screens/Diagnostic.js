import React, { useState } from 'react'
import Styles from '../styles/Styles'
import {
    TouchableOpacity,
    Text,
    SafeAreaView,
    View,
} from 'react-native'
import symptom from "../data/symptom";
import { FlatListComponent, Separator } from "../components/FlatListComponent";
import { Header } from '../components/Header'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const Rasopathies = ({ navigation }) => {



    const [name, setName] = useState();
    const [tB, setTB] = useState(false);
    const [aC, setAC] = useState(false);
    const [mC, setMC] = useState(false);
    const [cN, setCN] = useState(false);
    const [aD, setAD] = useState(false);
    const [mEAN, setMEAN] = useState(false);
    const [hOFPM, setHOFPM] = useState(false);
    const [cP, setCP] = useState(false);
    const [mA, setMA] = useState(false);
    const [mCap, setMCap] = useState(false);
    const [lME, setLME] = useState(false);
    const [eP, setEP] = useState(false);
    const [aEKG, setAEKG] = useState(false);
    const [qPP, setQPP] = useState(false);
    const [cAS, setCAS] = useState(false);
    const [lM, setLM] = useState(false);
    const [cF, setCF] = useState(false);
    const [cH, setCH] = useState(false);
    const [pUH, setPUH] = useState(false);

    const usingTree = () => {
        var fs = require('react-native-fs'), RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;
        var data = symptom
        var testdata = [
            {
                
                "talla baja": true,
        "anomalias craneofaciales": false,
        "macrocefalia": false,
        "compromiso neurologico": false,
        "alteraciones dermatologicas": false,
        "manchas cafe con leche, efelides inguinales y axilares, nodulos subcutaneos": false,
        "hipeterlorismo, orejas implantacion baja rotadas, fisuras palpebrales inclinadas hacia abajo, puente nasal deprimido, micrognatia": false,
        "cardiopatia": true,
        "malformación arteriovenosa": false,
        "malforación capilar": false,
        "lipomas, machas café con leche. efelides inguinales": false,
        "estenosis pulmonar": true,
        "alteraciones EKG: arritmia": false,
        "queratosis pilaris": true,
        "cabello anágeno suelto": false,
        "lentigos multiples": false,
        "cejas escasas, facies toscas": false,
        "cardiomiopatia hipertrófica": false,
        "papilomas alas nasales, uñas concavas, hipertrofia gingival": false,
            },
        ];

        var rf = new RandomForestClassifier({
            n_estimators: 5
        });

        rf.fit(data, null, "name", function (err, trees) {
            //console.log(JSON.stringify(trees, null, 4));
            var pred = rf.predict(testdata, trees);

            console.log(pred);

            // pred = ["virginica", "setosa"]
        });
    }


    return (
        <SafeAreaView style={Styles.containerAppStack}>
            <Header
                title={"Dignóstico"}
            />
            <View style={Styles.container}>


                <TouchableOpacity
                    style={Styles.buttonPrimary}
                    onPress={usingTree}
                >
                    <Text style={Styles.buttonText}>PRUEBA</Text>
                </TouchableOpacity>


            </View>


        </SafeAreaView>
    );

}

export default Rasopathies;
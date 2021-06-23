import React, { useState } from 'react'
import Styles from '../styles/Styles'
import {
    TouchableOpacity,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    Image,
} from 'react-native'
import symptom from "../data/symptom";
import { Header } from '../components/Header'
import RadioButtonRN from 'radio-buttons-react-native';
import HidingComponent from '../components/HidingComponent';

const RadioButtonTrueFalse = [
    {
        label: 'Si'
    },
    {
        label: 'No'
    }
];
const RadioButtonAlteracionesDermatologicas = [
    {
        label: 'Malformación arteriovenosa'
    },
    {
        label: 'Manchas cafe con leche, efelides inguinales y axilares, nodulos subcutaneos'
    },
    {
        label: 'Lipomas, machas café con leche. efelides inguinales'
    }
];
const RadioButtonCardiopatia = [
    {
        label: 'Estenosis pulmonar y queratosis pilaris'
    },
    {
        label: 'Estenosis pulmonar y cabello anágeno suelto'
    },
    {
        label: 'Alteraciones EKG: arritmia, bloqueos y cabello anágeno suelto'
    },
    {
        label: 'Cardiomiopatía hipertrófica y cabello anágeno suelto'
    },
    {
        label: 'Estenosis pulmonar y cejas escasas, facies toscas'
    },
    {
        label: 'Alteraciones EKG: arritmia, bloqueos y cejas escasas, facies toscas'
    },
    {
        label: 'Cardiomiopatía hipertrófica y cejas escasas, facies toscas'
    },
    {
        label: 'Alteraciones EKG: arritmia, bloqueos y lentigos multiples'
    },
    {
        label: 'Cardiomiopatía hipertrófica y lentigos multiples'
    },
    {
        label: 'Alteraciones EKG: arritmia, bloqueos y papilomas alas nasales, uñas concavas, hipertrofia gingival'
    },
    {
        label: 'Estenosis pulmonar y papilomas alas nasales, uñas concavas, hipertrofia gingival'
    },
    {
        label: 'Cardiomiopatía hipertrófica y papilomas alas nasales, uñas concavas, hipertrofia gingival'
    },
    {
        label: 'Cardiomiopatía hipertrófica'
    },


];


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
    const [mCap, setMCAP] = useState(false);
    const [lME, setLME] = useState(false);
    const [eP, setEP] = useState(false);
    const [aEKG, setAEKG] = useState(false);
    const [qPP, setQPP] = useState(false);
    const [cAS, setCAS] = useState(false);
    const [lM, setLM] = useState(false);
    const [cF, setCF] = useState(false);
    const [cH, setCH] = useState(false);
    const [pUH, setPUH] = useState(false);

    const [vTB, setVTB] = useState(false);
    const [vAC, setVAC] = useState(true);
    const [vMC, setVMC] = useState(true);
    const [vCN, setVCN] = useState(true);
    const [vAD, setVAD] = useState(true);
    const [vADF, setVADF] = useState(true);
    const [vHOFPM, setVHOFPM] = useState(true);
    const [vCP, setVCP] = useState(true);
    const [vMCAP, setVMCAP] = useState(true);
    const [vCPF, setVCPF] = useState(true);

    const [showResult, setShowResult] = useState(true);
    const [result, setResult] = useState("")

    const reset = () => {
        setTB(false)
        setAC(false)
        setMC(false)
        setCN(false)
        setAD(false)
        setMEAN(false)
        setHOFPM(false)
        setCP(false)
        setMA(false)
        setMCAP(false)
        setLME(false)
        setEP(false)
        setAEKG(false)
        setQPP(false)
        setCAS(false)
        setLM(false)
        setCF(false)
        setCH(false)
        setPUH(false)
        setVTB(false)
        setVAC(true)
        setVMC(true)
        setVCN(true)
        setVAD(true)
        setVADF(true)
        setVHOFPM(true)
        setVCP(true)
        setVMCAP(true)
        setVCPF(true)


        setShowResult(true)
    }

    const usingTree = (testdata) => {
        var fs = require('react-native-fs'), RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;
        var data = symptom


        var rf = new RandomForestClassifier({
            n_estimators: 10
        });

        rf.fit(data, null, "name", function (err, trees) {
            //console.log(JSON.stringify(trees, null, 4));
            console.log(testdata);
            var pred = rf.predict(testdata, trees);

            console.log(pred);
            setResult(pred)
            // pred = ["virginica", "setosa"]
        });
    }



    return (
        <SafeAreaView style={Styles.containerAppStack}>
            <Header
                title={"Diagnóstico"}
            />
            <View style={Styles.container}>
                <ScrollView contentContainerStyle={Styles.containerScrollView}>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vTB}
                    >
                        <Text style={Styles.bodyText}>¿Paciente con talla baja?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {


                                    setTB(true)
                                    setVAC(false)

                                }
                                else {
                                    setVAD(false)
                                }
                                setVTB(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />

                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vAD}
                    >
                        <Text style={Styles.bodyText}>¿Tiene alteraciones dermatológicas?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {

                                    setAD(true)
                                    setVADF(false)

                                }
                                else {
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                setVAD(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />

                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vADF}
                    >
                        <Text style={Styles.bodyText}>¿Cuál?</Text>
                        <RadioButtonRN
                            data={RadioButtonAlteracionesDermatologicas}
                            selectedBtn={(e) => {
                                if (e.label === 'Malformación arteriovenosa') {

                                    setMA(true)
                                    setVADF(true)
                                    setVMCAP(false)

                                }
                                else if (e.label === 'Manchas cafe con leche, efelides inguinales y axilares, nodulos subcutaneos') {
                                    setMEAN(true)
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": true,
                                            "mEAN": true,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else {
                                    setLME(true)
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": true,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": true,
                                            "eP": false,
                                            "aEKG": false,
                                            "eqPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                setVADF(true)
                            }}
                            style={Styles.radioButtonColumn}
                            boxStyle={Styles.radioButtonBoxColumn}
                            textStyle={Styles.radioButtonText}
                        />

                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vMCAP}
                    >
                        <Text style={Styles.bodyText}>¿Malformación Capilar?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {

                                    setMCAP(true)
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": true,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": true,
                                            "mCap": true,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                else {
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                setVMCAP(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />

                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vAC}
                    >
                        <Text style={Styles.bodyText}>¿Presenta anomalias craneofaciales?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {

                                    setAC(true)
                                    setVHOFPM(false)

                                }
                                else {
                                    setVMC(false)
                                }
                                setVAC(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vMC}
                    >
                        <Text style={Styles.bodyText}>¿Macrocefalia?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {
                                    setMC(true)
                                    setVCN(false)
                                }
                                else {
                                    setVCP(false)

                                }
                                setVMC(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vHOFPM}
                    >
                        <Text style={Styles.bodyTextResul}>¿Hipeterlorismo, orejas implantacion baja rotadas, fisuras palpebrales inclinadas hacia abajo, puente nasal deprimido, micrognatia?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {
                                    setHOFPM(true)
                                    setVCP(false)


                                }
                                else {
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                setVHOFPM(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vCP}
                    >
                        <Text style={Styles.bodyText}>¿Cardiopatía?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {
                                    setCP(true)
                                    setVCPF(false)
                                }
                                else {
                                    setVAD(false)

                                }
                                setVCP(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vCN}
                    >
                        <Text style={Styles.bodyText}>¿Compromiso neurológico?</Text>
                        <RadioButtonRN
                            data={RadioButtonTrueFalse}
                            selectedBtn={(e) => {
                                if (e.label === 'Si') {
                                    setCN(true)
                                    setVAD(false)
                                }
                                else {
                                    var testdata = [
                                        {

                                            "tB": false,
                                            "aC": false,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": false,
                                            "cP": false,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                setVCN(true)
                            }}
                            style={Styles.radioButton}
                            boxStyle={Styles.radioButtonBox}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>
                    <HidingComponent style={Styles.containerRadioButton}
                        hide={vCPF}
                    >
                        <Text style={Styles.bodyText}>¿Cuál cardiopatía?</Text>
                        <RadioButtonRN
                            data={RadioButtonCardiopatia}
                            selectedBtn={(e) => {
                                if (e.label === 'Estenosis pulmonar y queratosis pilaris') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": true,
                                            "aEKG": false,
                                            "qPP": true,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Estenosis pulmonar y cabello anágeno suelto') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": true,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": true,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Alteraciones EKG: arritmia, bloqueos y cabello anágeno suelto') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": true,
                                            "qPP": false,
                                            "cAS": true,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Cardiomiopatía hipertrófica y cabello anágeno suelto') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": true,
                                            "lM": false,
                                            "cF": false,
                                            "cH": true,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Estenosis pulmonar y cejas escasas, facies toscas') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": true,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": true,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Alteraciones EKG: arritmia, bloqueos y cejas escasas, facies toscas') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": true,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": true,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Cardiomiopatía hipertrófica y cejas escasas, facies toscas') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": true,
                                            "cH": true,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Alteraciones EKG: arritmia, bloqueos y lentigos multiples') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": true,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": true,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Cardiomiopatía hipertrófica y lentigos multiples') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": true,
                                            "cF": false,
                                            "cH": true,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Alteraciones EKG: arritmia, bloqueos y papilomas alas nasales, uñas concavas, hipertrofia gingival') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": true,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": true,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Estenosis pulmonar y papilomas alas nasales, uñas concavas, hipertrofia gingival') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": true,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": false,
                                            "pUH": true,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else if (e.label === 'Cardiomiopatía hipertrófica y papilomas alas nasales, uñas concavas, hipertrofia gingival') {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": true,
                                            "pUH": true,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)
                                }
                                else {
                                    var testdata = [
                                        {

                                            "tB": true,
                                            "aC": true,
                                            "mC": false,
                                            "cN": false,
                                            "aD": false,
                                            "mEAN": false,
                                            "hOFPM": true,
                                            "cP": true,
                                            "mA": false,
                                            "mCap": false,
                                            "lME": false,
                                            "eP": false,
                                            "aEKG": false,
                                            "qPP": false,
                                            "cAS": false,
                                            "lM": false,
                                            "cF": false,
                                            "cH": true,
                                            "pUH": false,
                                        },
                                    ];
                                    usingTree(testdata)
                                    setShowResult(false)

                                }
                                setVCPF(true)
                            }}
                            style={Styles.radioButtonColumn}
                            boxStyle={Styles.radioButtonBoxColumn}
                            textStyle={Styles.radioButtonText}
                        />
                    </HidingComponent>

                    <HidingComponent style={Styles.containerRadioButton}
                        hide={showResult}
                    >
                        <Text style={Styles.title}>Diagnóstico del paciente</Text>
                        <Image source={require('../assets/Diagnostic.png')} style={Styles.appImage} />
                        <Text style={Styles.bodyTextResul}>{result}</Text>

                    </HidingComponent>


                    <TouchableOpacity
                        style={Styles.buttonPrimary}
                        onPress={reset}
                    >
                        <Text style={Styles.buttonText}>Reintentar</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>


        </SafeAreaView>
    );

}

export default Rasopathies;
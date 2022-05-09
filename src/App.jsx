import React, { Component } from "react";
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "הקטילה שתצא",
            name: ""
        }
    }




    answer() {

        let ktilot = [
            "המוח שלך כל כך חלול כשאתה פותח תפה שומעים תאוקיינוס",
            "אתה כל כך מכוער שהקופים הפסיקו להאמין באבולוציה",
            "יש לך יופי מסתורי, חבל שלא רואים אותו",
            "יש לך יופי מתמטי אתה דומה לנעלם",
            "שקלת לשחק בסרט? מחפשים קוף משנה בערוץ המדע",
            "דבר יותר לאט שאני אצליח לשים זין על כל מה שאתה אומר",
            "יש לך יופי עירוני, נראה שדרסה אותך מכונית"
        ]

        let random = ktilot[Math.floor(Math.random() * ktilot.length)];

        let name = this.state.name;
        if (name === undefined || name === " " || !name) {
            this.setState({ answer: "❌ אנא הזן שם לקטול! השם לא יכול להיות ריק" });
            return;
        }



        this.setState({ answer: `${name}, ${random}` });
    }



    render() {
        return (
            <div className="app">
                <Alert className="alert" variant="primary">Created By Strike | For Learning React 💙</Alert>
                <div className="container">
                    <h1>הקוטל 2000</h1>
                    <Form inline="true">
                        <FormControl className="form-control" onChange={event => this.setState({ name: event.target.value })} placeholder="השם שאתה רוצה לקטול" />
                        <FormControl className="form-answar" placeholder={this.state.answer} as="textarea" rows={3} readOnly />
                        <Button className="btn-search" variant="outline-primary" onClick={() => this.answer()}>מצא קטילה</Button>

                    </Form>

                </div>
            </div>
        )

    }
}
export default App;
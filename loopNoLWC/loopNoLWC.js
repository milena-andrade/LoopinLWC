import { LightningElement } from 'lwc';

export default class LoopNoLWC extends LightningElement {
    students = [
        {
            Id: "001",
            Name:"Milena",
            Classe:"1°",
            Matricula:"50.00"
        },
        {
            Id: "002",
            Name:"Costa",
            Classe:"2°",
            Matricula:"50.00"
        }
    ]
}
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    game="Cricket";

    //two way data binding
    changeHandler(event){
        this.game=event.target.value;
    }
}
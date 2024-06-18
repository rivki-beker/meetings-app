import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';

class BusinessData {
    business = {
        name: "Bar Nur & CO",
        address: "Sderot Shaul Hamelech 8, Tel Aviv",
        phone: "054-6334769",
        owner: "Bar Nur",
        logo: "https://www.galyam-studio.co.il/wp-content/uploads/2022/07/bar_nur_logo_1.jpg",
        description: "The law office that will make you a winner in any law",
    };
    baseUrl = 'http://localhost:8787/businessData';
    constructor() {
        makeObservable(this, {
            business: observable,
            updateDetails: action,
            getDeails: action
        });
        this.getDeails();
    }

    getDeails() {
        axios.get(this.baseUrl).then((result) => {
            runInAction(() => {
                if (!result.data.name)
                    this.updateDetails();
                else
                    this.business = result.data;
            });
        });
    }

    updateDetails() {
        fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.business)
        }).then((result) => {
        }).catch(() => {
            console.error(res.status);
        });
    }
}
export default new BusinessData();
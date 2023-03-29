export class Model {
    constructor() {
/*
this is the object which stores data about dropdown selections  
*/
        this.buildObject = {
            "Building": 
            {
                "Brick": {
                    "Type": ["6 Floors", "8 Floors"]
                },
                "Concrete": {
                    "Type": ["10 Floors", "12 Floors"]
                }
            },
            "House":
            {
                "Family": {
                    "Type": ["1 Etage", "2 Etages"]
                },
                "Business": {
                    "Type": ["1 Block", "2 Blocks"]
                }
            }
        }

    /*
this is the object which stores data about cake images and prices
*/
        this.buildDetails = {
            "Building":
                { image: "building.jpg", price: 100000 },
            "Brick": {
                image: "brick.jpg", price: 70000
            },
            "6 Floors": {
                image: "6floors.jpg", price: 130000
            },
            "8 Floors": {
                image: "8floors.jpg", price: 170000
            },
            "Concrete": {
                image: "concrete.jpg", price: 55000
            },
            "10 Floors": {
                image: "10floors.jpg", price: 115000
            },
            "12 Floors": {
                image: "12floors.jpg", price: 127000
            },
            "House": {
                image: "house.jpg", price: 60000
            },
            "Family": {
                image: "familyhouse.jpg", price: 7000
            },
            "1 Etage": {
                image: "familyhouse1etage.jpg", price: 20000
            },
            "2 Etages": {
                image: "familyhouse2etage.jpg", price: 40000
            },
            "Business": {
                image: "businesshouse.jpg", price: 85000
            },
            "1 Block": {
                image: "businesshouse1block.jpg", price: 39000
            },
            "2 Blocks": {
                image: "businesshouse2block.jpg", price: 75000
            },
        }

        this.buildstores = JSON.parse(localStorage.getItem('buildstores')) || []

    }

/*
this is the method which refresh data show on pagesubmited
*/
    bindonPageSubmited(callback) {
        this.onPageSubmited = callback
    }

/*
this is the method which stores data on web storage
*/
    _commit(buildstores) {
        localStorage.setItem('buildstores', JSON.stringify(buildstores))
    }

/*
this is the method which triggers adding necessary data to buildstores storage with specific const
*/

    addBuild(investment, build, construction, imagebuild, successfactor, price, disposalinvestment, totalamount) {

        const builditem = {
            Investment: investment, Build: build, Construction: construction, Imagebuild: imagebuild, Successfactor: successfactor, Price: price,
            Disposalinvestment: disposalinvestment, Totalamount: totalamount
        }
        this.buildstores.push(builditem)
        this._commit(this.buildstores)
    }

/*
this is the method which clears storage and redirect to index.html page
*/


    clearBuild() {
        localStorage.clear();
        window.location = "index.html";
    }

}
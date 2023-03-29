export class Controller {
    //this is default controller which initialize model and view
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //here, we bind methods made on model and view scripts for displaying all these stuff on front page
        this.model.bindonPageSubmited(this.onPageSubmited)
        this.view.bindAddBuilding(this.handleAddBuilding)
        this.view.bindClearStorage(this.handleClearStorage)
        this.onTodoListChanged(this.model.buildObject, this.model.buildDetails, this.model.BuildStored)
        this.onPageLodad(this.model.buildObject, this.model.buildDetails, this.model.BuildStored)
        this.onPageSubmited(this.model.buildstores)
        //this.onPageLodad(this.model.buildstores)


    }

    //first, we need to bind these methods to this controller
    onTodoListChanged = (buildObject, buildDetails, BuildStored) => {
        this.view.showobject(buildObject, buildDetails, BuildStored)
    }

    onPageLodad = (buildObject, buildDetails, BuildStored) => {
        this.view.filldropdown(buildObject, buildDetails, BuildStored)
    }

    onPageSubmited = (buildstores) => {
        this.view.showBuilds(buildstores)
    }
	
	// onPageLodad = (buildstores) => {
        // this.view.findMaxValue(buildstores)
    // }

    //for example, this metod bind method "addBuild" from model with specific parameters
    handleAddBuilding = (investment, build, construction, imagebuild, successfactor, price, disposalinvestment, totalamount) => {
        this.model.addBuild(investment, build, construction, imagebuild, successfactor, price, disposalinvestment, totalamount)
    }

    handleClearStorage = () => {
        this.model.clearBuild();
    }
}
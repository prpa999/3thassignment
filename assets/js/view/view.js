export class View {
    //this view with constructor build order form for cakes order and present it on index.html
    constructor() {
        //definition of order form and div with specific attributes and classes
        this.app = this.getElement("orderform")
        this.div1 = this.createElement('div')
        this.div1.className += 'col-md-6 '
        this.div1.className += 'marginTop '
        this.div1.className += 'marginBot '
        this.div1.className += 'my-auto'

        this.div2 = this.createElement('div')
        this.div2.className += 'form-group'
        //definition of order form and div with specific attributes and classes
        this.div2label = this.createElement('label')
        this.div2label.for="menuMain"
        this.div2label.className +='formHeaderMarginTop '
        this.div2label.className +='font-weight-bold '
        this.div2label.className +='whatIsOrder '
        this.div2label.className += 'formFont'
        this.div2label.textContent = 'What would You like to invest:'
        this.div2.append(this.div2label)
        //after definition, we need to bind this part to specific div

        //definition of order form and div with specific attributes and classes
        this.form = this.createElement('form')
        this.form.name = 'form2'
        this.form.id = 'form2'

        this.selectCake = this.createElement('select')
        this.selectCake.id = 'investment'
        this.selectCake.name = 'investment'
        this.selectCake.className += 'custom-select '
        this.selectCake.className += 'formMarginTop '
        this.selectCake.className += 'formFont'
        this.optionc = this.createElement('option')
        this.optionc.value = ''
        this.optionc.text = 'Select your investment'
        this.selectCake.value = ''
        this.selectCake.append(this.optionc)
        this.div2.append(this.selectCake)
        //after definition, we need to bind this part to specific div
        //definition of order form and div with specific attributes and classes
        this.selectCakeType = this.createElement('select')
        this.selectCakeType.id = 'build'
        this.selectCakeType.name = 'build'
        this.selectCakeType.className += 'custom-select '
        this.selectCakeType.className += 'formMarginTop '
        this.selectCakeType.className += 'formFont'
        this.optiont = this.createElement('option')
        this.optiont.value = ''
        this.optiont.text = 'Select build type'
        this.selectCakeType.value = ''
        this.selectCakeType.append(this.optiont)
        this.div2.append(this.selectCakeType)
        //after definition, we need to bind this part to specific div
        //definition of order form and div with specific attributes and classes
        this.selectCakePackage = this.createElement('select')
        this.selectCakePackage.id = 'construction'
        this.selectCakePackage.name = 'construction'
        this.selectCakePackage.className += 'custom-select '
        this.selectCakePackage.className += 'formMarginTop '
        this.selectCakePackage.className += 'formFont'
        this.optionp = this.createElement('option')
        this.optionp.value = ''
        this.optionp.text = 'Select construction type'
        this.selectCakePackage.value = ''
        this.selectCakePackage.append(this.optionp)
        this.div2.append(this.selectCakePackage)
        //after definition, we need to bind this part to specific div
        //definition of order form and div with specific attributes and classes
        this.inputq = this.createElement('input')
        this.inputq.type = 'text'
        this.inputq.id = 'successfactor'
        this.inputq.placeholder = 'Enter successfactor %'
        this.inputq.className += 'custom-select '
        this.inputq.className += 'formMarginTop '
        this.inputq.className += 'formFont'
        this.div2.append(this.inputq)
        //after definition, we need to bind this part to specific div
        this.inputp = this.createElement('input')
        this.inputp.type = 'text'
        this.inputp.id = 'price'
        this.inputp.placeholder = 'Total cost price will be filled based on your choice'
        this.inputp.className += 'custom-select '
        this.inputp.className += 'formMarginTop '
        this.inputp.className += 'formFont'
        this.div2.append(this.inputp)
        //definition of order form and div with specific attributes and classes
        this.inputuser = this.createElement('input')
        this.inputuser.type = 'text'
        this.inputuser.id = 'disposalinvestment'
        this.inputuser.placeholder = 'Enter your expected profit'
        this.inputuser.className += 'custom-select '
        this.inputuser.className += 'formMarginTop '
        this.inputuser.className += 'formFont'
        this.div2.append(this.inputuser)
        //definition of order form and div with specific attributes and classes

        this.div3 = this.createElement('div')
        this.div3.id="submitButton"
        this.div3.className += 'text-center '
        this.div3.className += 'formFont '

        this.submitButton = this.createElement('input')
        this.submitButton.type = 'submit'
        this.submitButton.id = 'submit'
        this.submitButton.textContent = 'Calculate'
        this.submitButton.className += 'btn '
        this.submitButton.className += 'btn-primary  '
        this.submitButton.className += 'font-weight-bold '
        this.submitButton.className += 'makeright'
        this.div3.append(this.submitButton)
        //definition of order form and div with specific attributes and classes
        this.clearButton = this.createElement('button')
        this.clearButton.id = 'buttonclear'
        this.clearButton.type = 'button'
        this.clearButton.textContent = 'Clear Storage'
        this.clearButton.className += 'btn '
        this.clearButton.className += 'btn-primary  '
        this.clearButton.className += 'font-weight-bold '
        this.clearButton.className += 'makeright'
        this.div3.append(this.clearButton)

        //first form append div2 and div3, and div1 append form
        //then, whole div (app) append div1 and div4

        this.form.append(this.div2,
            this.div3,
        )
        this.div1.append(this.form)

        this.div4 = this.createElement('div')
        this.div4.className += 'col-md-6 '
        this.div4.className += 'marginTop '
        this.div4.className += 'marginBot '
        this.img = this.createElement('img');
        this.img.src = "assets/images/building.jpg"
        this.img.id = "imagebuild"
        this.img.className += 'img-fluid'
        this.div4.append(this.img)
        this.app.append(this.div1, this.div4)

    }

    /*
     this method adds event listener on submit, and first validates are inputs and selections, then if validation is OK, proceed to 
     handler the inputs for adding the cake order
*/
    bindAddBuilding(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()
            //here we fetch all attributes from form via id of attribute
            var investment = document.getElementById("investment");
            var build = document.getElementById("build");
            var construction = document.getElementById("construction");
            var successfactor = document.getElementById("successfactor");
            var price = document.getElementById("price");
            var image = document.getElementById("imagebuild");
            var disposalinvestment = document.getElementById("disposalinvestment");

            //we need these two variables for collecting and counting erros
            var sumerrors = "";
            var counterrors = 0;
            var writeerros = document.getElementById("errors");
            writeerros.className = "alert alert-danger"

            if (investment.value == "") { //if cake value is empty, then we have an error
                sumerrors += "<br>Investment not chosen!";
                counterrors++; //we count errors
            }

            if (build.value == "") {
                sumerrors += "<br>Build not chosen!";
                counterrors++;
            }

            if (construction.value == "") {
                sumerrors += "<br>Construction not chosen!";
                counterrors++;
            }

            if (successfactor.value == "" || successfactor.value == 0) {
                sumerrors += "<br>Sucessfactor is missing!";
                counterrors++;
            }


            if (price.value == "" || price.value == 0) {
                sumerrors += "<br>Price is missing!";
                counterrors++;
            }

            if (disposalinvestment.value == "") {
                sumerrors += "<br>Profit is missing!";
                counterrors++;
            }
            
            if (counterrors > 0) {
                writeerros.innerHTML = "<h1>Error warnings!</h1>";
                writeerros.innerHTML += "<p><strong>There are " + counterrors + " errors found:</strong>" + sumerrors + "</p>";
                return false;
            }

            //if there is no errors, proceed to hander user inputs and selections
			var totalAmount = (successfactor.value/100*disposalinvestment.value-price.value);
            if (counterrors == 0)
            {
                handler(investment.value, build.value, construction.value, image.src, successfactor.value, price.value, disposalinvestment.value, totalAmount)
                location.reload();
                return true;
            }
            

        })
    }

    //handler clear storage
    bindClearStorage(handler) {

        document.getElementById("buttonclear").addEventListener("click", function () {
            handler()
        });
    }

    //this metod create element with class and tag
    createElement(tag, classname) {
        const element = document.createElement(tag)

        if (classname) element.classList.add(classname)
        return element
    }

    //this metod get element with specific id
    getElement(selector) {
        const element = document.getElementById(selector)
        return element
    }
	
	getMaxId(buildstores){
		var maxid = buildstores[0].Totalamount;
		console.log("maxic: "+maxid)
		for(var a=0;a<buildstores.length; a++){
			if(buildstores[a].Totalamount>maxid){
				maxid=buildstores[a].Totalamount;
			}
		}
		return maxid;
	}

    //this metod shows objects in console
    showobject(buildObject, buildDetails, BuildStored) {

        console.log(buildObject)
        console.log(buildDetails)
        console.log(BuildStored)


    }

    //this metod shows cakeorders from web storage
    showBuilds(buildstores) {

        this.app = this.getElement("buildstores")
        if (buildstores.length === 0) {      //if storage is empty  
            const p2 = this.createElement('p')
            p2.textContent = 'There are no investments';
            p2.className += 'alertc '
            p2.className += 'alert-infoc '
            this.app.append(p2)
        }
        else { //if storage is not empty
            this.app.className += 'alertc alert-infoc'
            const h1 = this.createElement('h1')
            h1.textContent = "List of all saved investments:"
            const p1 = this.createElement('p')
            p1.textContent = 'Number of processed investments: ' + buildstores.length;
            this.app.append(h1, p1)
			console.log("Total first: "+this.getMaxId(buildstores))
			var biggest=this.getMaxId(buildstores);
			
            buildstores.forEach(builditem => { //we are fetching storage values with foreach loop
			var color = "";
			var message="";
			var weight="";

				if(biggest==builditem.Totalamount){
					color="#28a745";
					message=" => Currently the best investment for you!";
					weight="bold";
				}
                const labelcake = this.createElement('label')
                labelcake.textContent = 'Investment: ' + builditem.Investment;
                labelcake.style.fontSize = "20px";
				labelcake.style.color = color;
				labelcake.style.fontWeight = weight;
                const labelcaketype = this.createElement('label')
                labelcaketype.textContent = 'Build: ' + builditem.Build;
                labelcaketype.style.fontSize = "20px";
				labelcaketype.style.color = color;
				labelcaketype.style.fontWeight = weight;
                const labelcakepackage = this.createElement('label')
                labelcakepackage.textContent = 'Construction: ' + builditem.Construction;
                labelcakepackage.style.fontSize = "20px";
				labelcakepackage.style.color = color;
				labelcakepackage.style.fontWeight = weight;
                const labelcakeimage = this.createElement('label')
                labelcakeimage.textContent = 'Image: ';
                labelcakeimage.style.fontSize = "20px";
				labelcakeimage.style.color = color;
				labelcakeimage.style.fontWeight = weight;
                const img = this.createElement('img');
                img.src = builditem.Imagebuild
                img.id = "imagebuild"
                img.width = "320"
                img.height = "240"

                const labelcakesuccessfactor = this.createElement('label')
                labelcakesuccessfactor.textContent = 'Success factor: ' + builditem.Successfactor;
                labelcakesuccessfactor.style.fontSize = "20px";
				labelcakesuccessfactor.style.color = color;
				labelcakesuccessfactor.style.fontWeight = weight;
                const labelcakeprice = this.createElement('label')
                labelcakeprice.textContent = 'Price: ' + builditem.Price;
                labelcakeprice.style.fontSize = "20px";
				labelcakeprice.style.color = color;
				labelcakeprice.style.fontWeight = weight;
                const labeldisposalinvestment = this.createElement('label')
                labeldisposalinvestment.textContent = 'Profit: ' + builditem.Disposalinvestment;
                labeldisposalinvestment.style.fontSize = "20px";
				labeldisposalinvestment.style.color = color;
				labeldisposalinvestment.style.fontWeight = weight;
				//var totalAmount = (builditem.Disposalinvestment - builditem.Price)*builditem.Successfactor/100;
				
				const labeltotalamount = this.createElement('label')
                labeltotalamount.textContent = 'Profit for you: ' + builditem.Totalamount.toLocaleString("hr-HR")+message;
                labeltotalamount.style.fontSize = "20px";
				labeltotalamount.style.color = color;
				labeltotalamount.style.fontWeight = weight;
               

                //after we read all values, we need to append them to main div on index.html called "buildstores"

                this.app.append(
                    labelcake, this.createElement('br'),
                    labelcaketype, this.createElement('br'),
                    labelcakepackage, this.createElement('br'),
                    labelcakeimage, this.createElement('br'),
                    img, this.createElement('br'),
                    labelcakesuccessfactor, this.createElement('br'),
                    labelcakeprice, this.createElement('br'),
                    labeldisposalinvestment, this.createElement('br'),
					labeltotalamount, this.createElement('br'),
                    this.createElement('hr')
                )
            })
        }

    }
	

    //this metod fill dropdown selections with two parameters as objects from model
    filldropdown(buildObject, buildDetails) {

        var totalprice = 0;
        var investSel = this.getElement("investment");
        var buildSel = this.getElement("build");
        var constructionSel = this.getElement("construction");

        //first we fill first level dropdown
        for (var x in buildObject) {
            investSel.options[investSel.options.length] = new Option(x, x);
        }

        //if we change first level, this is happening:
        investSel.onchange = function () {
            buildSel.length = 1;
            constructionSel.length = 1;
            var path = "assets/images/";
            var image = document.getElementById("imagebuild"); 
            var price = document.getElementById("price");
            price.value = parseInt(buildDetails[this.value].price);
            if (this.value == '') {//if current value is empty
                image.src = "assets/images/building.jpg" //first we set default image for first level
                
            }
            else {
                image.src = path + buildDetails[this.value].image;
            }
            
            for (var y in buildObject[this.value]) {
                buildSel.options[buildSel.options.length] = new Option(y, y); //here we fill second dropdown
            }
        }


        //if we change second level, this is happening:
        buildSel.onchange = function () {
            constructionSel.length = 1;
            var path = "assets/images/";
            var price = document.getElementById("price");
            var image = document.getElementById("imagebuild");
            if (this.value == '') {//if current value is empty
                image.src = path + buildDetails[investSel.value].image; //first we set default image from previous level
                price.value = parseInt(buildDetails[investSel.value].price) + 0;
                var t = 1
            }
            else {
                image.src = path + buildDetails[this.value].image;//or we set default image from this level
                price.value = parseInt(buildDetails[investSel.value].price) + parseInt(buildDetails[this.value].price);
                var t = buildObject[investSel.value][this.value]["Type"];
            }
            
            for (var i = 0; i < t.length; i++) {
                constructionSel.options[constructionSel.options.length] = new Option(t[i], t[i]);
            }
			

        }

        //if we third second level, this is happening:
        constructionSel.onchange = function () {
            var path = "assets/images/";
            var image = document.getElementById("imagebuild");
            var price = document.getElementById("price");
            if (this.value == '') {//if current value is empty
                image.src = path + buildDetails[buildSel.value].image;// we set default image from previous level
                price.value = parseInt(buildDetails[buildSel.value].price) + 0;
            }
            else {
                image.src = path + buildDetails[this.value].image//or we set default image from this level
                price.value = parseInt(buildDetails[this.value].price) + parseInt(buildDetails[buildSel.value].price)+parseInt(buildDetails[investSel.value].price);
            }       

        }


    }

}
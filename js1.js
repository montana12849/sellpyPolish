class SomeClass {
    counter = 0;
    number = 0;
    time = null;
    data = null;
  
    register() {
        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "ArrowRight":
                    this.countItems();
                    this.getTime();
                    this.createElem();
                break;
            }
        });
    }
  
    countItems() {
        this.counter += 1;
        if(this.number <= 99) {
            this.number += 1;
        } else {
            this.number = 0;
        }
    }

    getTime() {
        const subbed = new Date();
        const hour = subbed.getHours().toString().length < 2 ? '0' + subbed.getHours() : subbed.getHours();
        const min = subbed.getMinutes().toString().length < 2 ? '0' + subbed.getMinutes() : subbed.getMinutes();
        const sec = subbed.getSeconds().toString().length < 2 ? '0' + subbed.getSeconds() : subbed.getSeconds();
        this.time = `${hour}:${min}:${sec}`;
    }

    fetchData(name) {
        fetch(`./jsonPolish/${name}.json`)
             .then(response => response.json())
             .then(result => {
                this.data = result;
             })
    }

    createElem() {
        if(document.getElementById('absolute')) {
            document.getElementById('absolute').remove();
        }

        let text = `${this.counter} | (${this.time}) | ${this.data[this.number].pl} - ${this.data[this.number].ru}`;
        let elem = document.createElement('div');

        elem.style.cssText = "height: 10px; background: transparent; position: absolute; bottom: 10px; left: 10px; font-size: 12px;"
        elem.innerHTML = text;
        elem.id = 'absolute';
        document.body.append(elem);
    }
  }
  
  const myObject = new SomeClass();
  myObject.fetchData('first');
  myObject.register();
 
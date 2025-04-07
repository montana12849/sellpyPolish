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
        if(this.number < this.data.length - 1) {
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

__________________________________________________________________________
 
 class SomeClass {
    counter = 0;
    number = 0;
    time = null;
    data = [
        { "pl": "Dzień dobry", "ru": "Добрый день" },
        { "pl": "Dobry wieczór", "ru": "Добрый вечер" },
        { "pl": "Do widzenia", "ru": "До свидания" },
        { "pl": "Cześć", "ru": "Привет" },
        { "pl": "Jak się masz?", "ru": "Как дела?" },
        { "pl": "Dobrze", "ru": "Хорошо" },
        { "pl": "Źle", "ru": "Плохо" },
        { "pl": "Dziękuję", "ru": "Спасибо" },
        { "pl": "Proszę", "ru": "Пожалуйста" },
        { "pl": "Przepraszam", "ru": "Извините" },
        { "pl": "Tak", "ru": "Да" },
        { "pl": "Nie", "ru": "Нет" },
        { "pl": "Nie wiem", "ru": "Я не знаю" },
        { "pl": "Rozumiem", "ru": "Понимаю" },
        { "pl": "Nie rozumiem", "ru": "Не понимаю" },
        { "pl": "Mów wolniej", "ru": "Говори медленнее" },
        { "pl": "Gdzie jest toaleta?", "ru": "Где туалет?" },
        { "pl": "Ile to kosztuje?", "ru": "Сколько это стоит?" },
        { "pl": "Pomocy!", "ru": "Помогите!" },
        { "pl": "Zgubiłem się", "ru": "Я заблудился" },
        { "pl": "Jestem z Ukrainy", "ru": "Я из Украины" },
        { "pl": "Mieszkam w Polsce", "ru": "Я живу в Польше" },
        { "pl": "Na zdrowie!", "ru": "Будь здоров!" },
        { "pl": "Smacznego!", "ru": "Приятного аппетита!" },
        { "pl": "Dzień", "ru": "День" },
        { "pl": "Noc", "ru": "Ночь" },
        { "pl": "Rano", "ru": "Утро" },
        { "pl": "Wieczór", "ru": "Вечер" },
        { "pl": "Dzisiaj", "ru": "Сегодня" },
        { "pl": "Jutro", "ru": "Завтра" },
        { "pl": "Wczoraj", "ru": "Вчера" },
        { "pl": "Godzina", "ru": "Час" },
        { "pl": "Minuta", "ru": "Минута" },
        { "pl": "Sekunda", "ru": "Секунда" },
        { "pl": "Pociąg", "ru": "Поезд" },
        { "pl": "Autobus", "ru": "Автобус" },
        { "pl": "Samolot", "ru": "Самолет" },
        { "pl": "Samochód", "ru": "Машина" },
        { "pl": "Droga", "ru": "Дорога" },
        { "pl": "Ulica", "ru": "Улица" },
        { "pl": "Miasto", "ru": "Город" },
        { "pl": "Wieś", "ru": "Деревня" },
        { "pl": "Sklep", "ru": "Магазин" },
        { "pl": "Restauracja", "ru": "Ресторан" },
        { "pl": "Szpital", "ru": "Больница" },
        { "pl": "Apteka", "ru": "Аптека" },
        { "pl": "Szkoła", "ru": "Школа" },
        { "pl": "Uniwersytet", "ru": "Университет" },
        { "pl": "Dom", "ru": "Дом" },
        { "pl": "Pokój", "ru": "Комната" },
        { "pl": "Łóżko", "ru": "Кровать" },
        { "pl": "Stół", "ru": "Стол" },
        { "pl": "Krzesło", "ru": "Стул" },
        { "pl": "Okno", "ru": "Окно" },
        { "pl": "Drzwi", "ru": "Дверь" },
        { "pl": "Lampa", "ru": "Лампа" },
        { "pl": "Telefon", "ru": "Телефон" },
        { "pl": "Komputer", "ru": "Компьютер" },
        { "pl": "Internet", "ru": "Интернет" },
        { "pl": "Książka", "ru": "Книга" },
        { "pl": "Gazeta", "ru": "Газета" },
        { "pl": "Pieniądze", "ru": "Деньги" },
        { "pl": "Bank", "ru": "Банк" },
        { "pl": "Poczta", "ru": "Почта" },
        { "pl": "Policja", "ru": "Полиция" },
        { "pl": "Paszport", "ru": "Паспорт" },
        { "pl": "Bagaż", "ru": "Багаж" },
        { "pl": "Walizka", "ru": "Чемодан" },
        { "pl": "Ręka", "ru": "Рука" },
        { "pl": "Noga", "ru": "Нога" },
        { "pl": "Głowa", "ru": "Голова" },
        { "pl": "Oko", "ru": "Глаз" },
        { "pl": "Ucho", "ru": "Ухо" },
        { "pl": "Nos", "ru": "Нос" },
        { "pl": "Usta", "ru": "Губы" },
        { "pl": "Ząb", "ru": "Зуб" },
        { "pl": "Włosy", "ru": "Волосы" },
        { "pl": "Serce", "ru": "Сердце" },
        { "pl": "Żołądek", "ru": "Желудок" },
        { "pl": "Język", "ru": "Язык" },
        { "pl": "Lekarz", "ru": "Врач" },
        { "pl": "Pielęgniarka", "ru": "Медсестра" },
        { "pl": "Pacjent", "ru": "Пациент" },
        { "pl": "Lekarstwo", "ru": "Лекарство" },
        { "pl": "Temperatura", "ru": "Температура" },
        { "pl": "Kaszel", "ru": "Кашель" },
        { "pl": "Ból", "ru": "Боль" },
        { "pl": "Gorączka", "ru": "Жар" },
        { "pl": "Zimno", "ru": "Холодно" },
        { "pl": "Ciepło", "ru": "Тепло" },
        { "pl": "Gorąco", "ru": "Жарко" },
        { "pl": "Pada deszcz", "ru": "Идёт дождь" },
        { "pl": "Świeci słońce", "ru": "Светит солнце" },
        { "pl": "Jest pochmurno", "ru": "Пасмурно" },
        { "pl": "Wieje wiatr", "ru": "Дует ветер" },
        { "pl": "Śnieg", "ru": "Снег" },
        { "pl": "Burza", "ru": "Гроза" },
        { "pl": "Chmura", "ru": "Облако" },
        { "pl": "Niebo", "ru": "Небо" },
        { "pl": "Pogoda", "ru": "Погода" },
        { "pl": "Lato", "ru": "Лето" }
    ];
  
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
        if(this.number < this.data.length - 1) {
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

    createElem() {
        if(document.getElementById('absolute')) {
            document.getElementById('absolute').remove();
        }

        let text = `${this.counter} | ${this.time} | ${this.data[this.number].pl} - ${this.data[this.number].ru}`;
        let elem = document.createElement('div');

        elem.style.cssText = "height: 10px; background: transparent; position: absolute; bottom: 10px; left: 10px; font-size: 12px; color: #616362"
        elem.innerHTML = text;
        elem.id = 'absolute';
        document.body.append(elem);
    }
  }


const myObject = new SomeClass();
myObject.register();

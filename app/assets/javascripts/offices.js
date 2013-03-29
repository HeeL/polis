ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {center: [60.010909,30.268874], zoom: 12});

	myMap.controls
	.add('zoomControl', { left: 5, top: 5 })

    office5 = new ymaps.Placemark([60.033193, 30.244919], {
	    balloonContentHeader: "Клиника на Королева",
		balloonContent: 'пр. Королева,  д.63, корп.2 <br/> <a href="/offices/5">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });
	
    office6 = new ymaps.Placemark([60.03324813387216, 30.291987992065405], {
	    balloonContentHeader: "Клиника на Малой Десятинной",
		balloonContent: 'ул. Малая Десятинная, д.11, корп.1, литера А  <br/> <a href="/offices/6">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });

    office7 = new ymaps.Placemark([60.018766184271925, 30.271027246032688], {
	    balloonContentHeader: "Клиника на Парашютной",
		balloonContent: 'ул. Парашютная, д.23  <br/> <a href="/offices/7">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });

    office8 = new ymaps.Placemark([59.983423, 30.216173], {
	    balloonContentHeader: "Клиника на Приморском",
		balloonContent: 'Приморский пр., д. 137, корп.1  <br/> <a href="/offices/8">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });
		
    office9 = new ymaps.Placemark([60.001283045856745, 30.203218052917464], {
	    balloonContentHeader: "Клиника на Оптиков",
		balloonContent: 'ул. Оптиков, д.52  <br/> <a href="/offices/9">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });
		
    office10 = new ymaps.Placemark([60.016564, 30.309454], {
	    balloonContentHeader: "Клиника на Фермском",
		balloonContent: 'Фермское шоссе, д.32  <br/> <a href="/offices/10">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });
		
    office11 = new ymaps.Placemark([59.989477, 30.193167], {
	    balloonContentHeader: "Клиника на Савушкина",
		balloonContent: 'ул. Савушкина, д.138  <br/> <a href="/offices/11">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });

    office12 = new ymaps.Placemark([59.998679, 30.298351], {
	    balloonContentHeader: "Клиника на Коломяжском",
		balloonContent: 'Коломяжский пр.,  д.20  <br/> <a href="/offices/12">Подробнее</a>'},
		{ preset: "twirl#lightblueDotIcon" });

    	myMap.geoObjects
			.add(office5)
			.add(office6)
			.add(office7)
			.add(office8)
			.add(office9)
			.add(office10)
			.add(office11)
			.add(office12);
};
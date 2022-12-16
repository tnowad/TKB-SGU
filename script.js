// ==UserScript==
// @name		 Thời khóa biểu SGU
// @namespace	https://github.com/tnowad/TKB-SGU
// @version	  0.1
// @description  Xem thời khóa biểu dạng bảng
// @author	   tnowad
// @match		http://thongtindaotao.sgu.edu.vn/default.aspx?page=thoikhoabieu&sta=1
// @icon		 https://www.google.com/s2/favicons?sz=64&domain=sgu.edu.vn
// @grant		none
// ==/UserScript==
;(function () {
	'use strict'
	const templateTable = () => {
		return `
		<div class="sgu-tkb-table">
			<div class="thu div1">Thứ 2</div>
			<div class="thu div2">Thứ 3</div>
			<div class="thu div3">Thứ 4</div>
			<div class="thu div4">Thứ 5</div>
			<div class="thu div5">Thứ 6</div>
			<div class="thu div6">Thứ 7</div>
			<div class="thu div8">Thứ 2</div>
			<div class="thu div9">Thứ 3</div>
			<div class="thu div10">Thứ 4</div>
			<div class="thu div11">Thứ 5</div>
			<div class="thu div12">Thứ 6</div>
			<div class="thu div13">Thứ 7</div>
			<div class="tiet div15">Tiết 1</div>
			<div class="tiet div16">Tiết 2</div>
			<div class="tiet div17">Tiết 3</div>
			<div class="tiet div18">Tiết 4</div>
			<div class="tiet div19">Tiết 5</div>
			<div class="tiet div20">Tiết 6</div>
			<div class="tiet div21">Tiết 7</div>
			<div class="tiet div22">Tiết 8</div>
			<div class="tiet div23">Tiết 9</div>
			<div class="tiet div24">Tiết 10</div>
			<div class="tiet div25">Tiết 11</div>
			<div class="tiet div26">Tiết 12</div>
			<div class="tiet div27">Tiết 13</div>
			<div class="tiet div30">Tiết 1</div>
			<div class="tiet div31">Tiết 2</div>
			<div class="tiet div32">Tiết 3</div>
			<div class="tiet div33">Tiết 4</div>
			<div class="tiet div34">Tiết 5</div>
			<div class="tiet div35">Tiết 6</div>
			<div class="tiet div36">Tiết 7</div>
			<div class="tiet div37">Tiết 8</div>
			<div class="tiet div38">Tiết 9</div>
			<div class="tiet div39">Tiết 10</div>
			<div class="tiet div40">Tiết 11</div>
			<div class="tiet div41">Tiết 12</div>
			<div class="tiet div42">Tiết 13</div>
		</div>
		<style>
			:root {
				--color-0: #0369a1;
                --color-0-p: #e7f6fd;
                --color-1: #874de0;
                --color-1-p: #f4efff;
                --color-2: #2f9074;
                --color-2-p: #e8f8f3;
                --color-3: #be123c;
                --color-3-p: #ffe4e6;
                --color-4: #b45309;
                --color-4-p: #fef6e7;
                --color-5: #73347f;
                --color-5-p: #fdf3ff;
                --color-6: #ab2f64;
                --color-6-p: #fff3f8;
                --color-7: #9ADCFF;
                --color-7-p: #f1faff;
                --color-8: #65C18C;
                --color-8-p: #c3e9d3;
			}
            .sgu-tkb-table * {
                padding: 0;
                margin: 0;
            }
			.sgu-tkb-table div {
				box-shadow: 0px 0px 2px #e1d4d4;
				display:flex;
				flex-direction: column;
                justify-content: space-evenly;
				align-items: center;
				height: 100%;
			}
			.sgu-tkb-table {
				margin-top: 5vh;
				display: grid;
				grid-template-columns: 5% repeat(6, 1fr) 5%;
				grid-template-rows: repeat(15, 1fr);
				grid-column-gap: 1px;
				grid-row-gap: 1px;
				height: 700px;
			}
			.cell-subject {
				border-left: 1px solid;
			}
			.thu, .tiet {
				background: #34a2db;
				color: white;
			}
			.div1 {
				grid-area: 1 / 2 / 2 / 3;
			}
			.div2 {
				grid-area: 1 / 3 / 2 / 4;
			}
			.div3 {
				grid-area: 1 / 4 / 2 / 5;
			}
			.div4 {
				grid-area: 1 / 5 / 2 / 6;
			}
			.div5 {
				grid-area: 1 / 6 / 2 / 7;
			}
			.div6 {
				grid-area: 1 / 7 / 2 / 8;
			}
			.div7 {
				grid-area: 1 / 8 / 2 / 9;
			}
			.div8 {
				grid-area: 15 / 2 / 16 / 3;
			}
			.div9 {
				grid-area: 15 / 3 / 16 / 4;
			}
			.div10 {
				grid-area: 15 / 4 / 16 / 5;
			}
			.div11 {
				grid-area: 15 / 5 / 16 / 6;
			}
			.div12 {
				grid-area: 15 / 6 / 16 / 7;
			}
			.div13 {
				grid-area: 15 / 7 / 16 / 8;
			}
			.div14 {
				grid-area: 15 / 8 / 16 / 9;
			}
			.div15 {
				grid-area: 2 / 1 / 3 / 2;
			}
			.div16 {
				grid-area: 3 / 1 / 4 / 2;
			}
			.div17 {
				grid-area: 4 / 1 / 5 / 2;
			}
			.div18 {
				grid-area: 5 / 1 / 6 / 2;
			}
			.div19 {
				grid-area: 6 / 1 / 7 / 2;
			}
			.div20 {
				grid-area: 7 / 1 / 8 / 2;
			}
			.div21 {
				grid-area: 8 / 1 / 9 / 2;
			}
			.div22 {
				grid-area: 9 / 1 / 10 / 2;
			}
			.div23 {
				grid-area: 10 / 1 / 11 / 2;
			}
			.div24 {
				grid-area: 11 / 1 / 12 / 2;
			}
			.div25 {
				grid-area: 12 / 1 / 13 / 2;
			}
			.div26 {
				grid-area: 13 / 1 / 14 / 2;
			}
			.div27 {
				grid-area: 14 / 1 / 15 / 2;
			}
			.div28 {
				grid-area: 15 / 1 / 16 / 2;
			}
			.div29 {
				grid-area: 16 / 1 / 17 / 2;
			}
			.div30 {
				grid-area: 2 / 8 / 3 / 9;
			}
			.div31 {
				grid-area: 3 / 8 / 4 / 9;
			}
			.div32 {
				grid-area: 4 / 8 / 5 / 9;
			}
			.div33 {
				grid-area: 5 / 8 / 6 / 9;
			}
			.div34 {
				grid-area: 6 / 8 / 7 / 9;
			}
			.div35 {
				grid-area: 7 / 8 / 8 / 9;
			}
			.div36 {
				grid-area: 8 / 8 / 9 / 9;
			}
			.div37 {
				grid-area: 9 / 8 / 10 / 9;
			}
			.div38 {
				grid-area: 10 / 8 / 11 / 9;
			}
			.div39 {
				grid-area: 11 / 8 / 12 / 9;
			}
			.div40 {
				grid-area: 12 / 8 / 13 / 9;
			}
			.div41 {
				grid-area: 13 / 8 / 14 / 9;
			}
			.div42 {
				grid-area: 14 / 8 / 15 / 9;
			}
			.div43 {
				grid-area: 15 / 8 / 16 / 9;
			}
			.div44 {
				grid-area: 16 / 8 / 17 / 9;
			}
		</style>

	`
	}

	const getData = () => {
		const table = Array.from(document.querySelectorAll('.body-table tr'))
		let data = []
		table.forEach((element) => {
			let subject = Array.from(element.querySelectorAll('td'))
				.reduce((previous, current) => {
					return previous + current.innerText + '|'
				}, '')
				.split('|')
			subject = {
				MaMH: subject[0],
				TenMH: subject[1],
				NhomMH: subject[2],
				STC: subject[3],
				MaLop: subject[4],
				STCHP: subject[5],
				KDK: subject[6],
				TH: subject[7],
				Thu: subject[8],
				TietBD: subject[9],
				ST: subject[10],
				Phong: subject[11],
				CBGV: subject[12],
				color: '',
			}
			data.push(subject)
		})
		return data
	}

	const renderHTML = (dataSubject) => {
		let data = dataSubject
		const table = document.querySelector('.sgu-tkb-table')
		const Thu = {
			Hai: 2,
			Ba: 3,
			Tư: 4,
			Năm: 5,
			Sáu: 6,
			Bảy: 7,
		}

		data = data.map((value) => {
			value.Thu = Thu[value.Thu]
			return value
		})

		let index = 0
		for (let i = 0; i < data.length; i++) {
			let currentColor = data.find(
				(value) => value.MaMH == data[i].MaMH && value.color != '',
			)
			data[i] = {
				...data[i],
				color: currentColor ? currentColor.color : `--color-${index++}`,
			}
		}

		data.forEach((element) => {
			let subject = document.createElement('div')
			subject.innerHTML = `
				<h3>${element.TenMH}</h3>
				<span>Phòng: ${element.Phong}</span>
                ${element.TH ? `<span>Thực hành: ${element.TH}</span>` : ''}
			`
			subject.style = `
			grid-area: ${parseInt(element.TietBD) + 1} /
			${element.Thu}/
			${parseInt(element.TietBD) + parseInt(element.ST) + 1}/
			${element.Thu + 1};
			`
			subject.style.setProperty('color', `var(${element.color})`)
			subject.style.setProperty('background', `var(${element.color}-p)`)
			subject.classList.add('cell-subject')
			table.appendChild(subject)
		})
		let total = data.reduce(
			(previous, current) => previous + parseInt(current.ST),
			0,
		)
		for (let i = 0; i < 12 * 8 - total - 1; i++) {
			let temp = document.createElement('div')
			temp.classList.add('cell-empty')
			table.appendChild(temp)
		}
	}

	const render = async () => {
		const data = getData()
		const table = document.createElement('div')
		table.innerHTML = templateTable()
		await document.querySelector('.navigate-base').appendChild(table)
		renderHTML(data)
	}

	const autoStart = () => {
		const button = document.querySelector(
			'#ctl00_ContentPlaceHolder1_ctl00_rad_ThuTiet',
		)
		if (button.checked) {
			render()
		}
	}

	autoStart()
})()

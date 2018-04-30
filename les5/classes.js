'use strict';

class Route {
    constructor(startTime, wayPoints, timings) {
        this.startHour = +startTime.split(':')[0];
        this.startMinutes = +startTime.split(':')[1];
        this.calcHour = +startTime.split(':')[0];
        this.calcMinutes = +startTime.split(':')[1];
        this.wayPoints = wayPoints;
        this.timings = timings;
        this.calculateTime = function(tAdd){
            let tMinutes = +this.calcMinutes + +tAdd;
            while(tMinutes > 60){
                tMinutes -= 60;
                this.calcHour += 1;
            }
            this.calcMinutes = tMinutes;
        };
        this.changeTime = function(){
            this.calcHour = this.startHour;
            this.calcMinutes = this.startMinutes;
        };
    }

    printWayPoints() {
      let text = "";
      let returnHTML = "";
      let lenPoints = this.wayPoints.length;
      for (let i = 0; i < lenPoints; i++) {
        this.calculateTime(this.timings[i])
        text += ` <tr>
                    <td>${(i + 1)}</td>
                    <td>${this.wayPoints[i]}</td>
                    <td>${(this.calcHour< 10)?"0"+this.calcHour:this.calcHour}:${(this.calcMinutes< 10)?"0"+this.calcMinutes:this.calcMinutes}</td>
                </tr `;
        }
        if(lenPoints > 0){
            returnHTML = `<div class="panel panel-primary">
                            <div class="panel-heading">
                            <h3 class="panel-title">Расписание автобуса 965</h3>
                            </div>
                            <div class="panel-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Название остановки</th>
                                        <th>Время прибытия на остановку</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${text}
                                    </tbody>
                                </table>
                            </div>
                        </div>`;
        }
        this.changeTime();
        document.getElementById("schedule").innerHTML = returnHTML;
    }
    calculateNextBus(time, point){
        let text = "";
        let indexPoint = this.wayPoints.indexOf(point);
        if(indexPoint == -1){
            text = "Данный маршрут не имеет такой остановки.";
        } else {
            let timeOfArrival = 0;
            for(let i = 0; i <= indexPoint; i++){
                timeOfArrival += +this.timings[i];
            }
            this.calcTime = this.startTime;
            this.calculateTime(timeOfArrival)
            let diffHour = this.calcHour - time.split(':')[0];
            let diffMinutes = this.calcMinutes - time.split(':')[1];

            if ((diffHour < 0 ) || (diffMinutes < 0 && diffHour <= 0)){
                text = "Твой автобус уже ушел :(";
            } else if (diffMinutes == 0 && diffHour == 0){
                text = "Твой автобус перед тобой!";
            } else {
                text = "Твой автобус прибудет через " + (diffHour * 60 + diffMinutes) + " минут.";
            }
        }
        this.changeTime();
        
        document.getElementById("calculation").innerHTML = `<div class="panel panel-success">
                                                                <div class="panel-heading">
                                                                <h3 class="panel-title">Результат поиска</h3>
                                                                </div>
                                                                <div class="panel-body">
                                                                ${text}
                                                                </div>
                                                            </div>`;
    }
  }
  //https://tfl.gov.uk/bus/route/965/
  let routeOne = new Route("12:00", ["Tolworth Station", "King Charles Road", "Maple Road", "Mountcombe Close", "Brook Street"], [3, 2, 4, 1, 6]);

  WayPoints.onclick = function(){
    routeOne.printWayPoints();
  }
  NextBus.onclick = function(){
    routeOne.calculateNextBus(inputTime.value , inputPoint.value);
  }
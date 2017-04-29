import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles: [`
        .online {
            color: white;
        }
        .offline {
            color: rgb(0, 0, 0);
        }
        .para {
            padding: 5px;
            border-radius: 5px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }
    `]
})
export class ServerComponent {
    serverId: number = 0;
    serverStatus: string = 'offline';

    constructor(){
        this.serverId = this.randomIntFromInterval(1, 10);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'rgb(76, 217, 100)' : 'rgb(255, 59, 48)';
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}

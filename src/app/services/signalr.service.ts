// import { Injectable } from '@angular/core';
// import * as signalR from '@microsoft/signalr';
// import { Observable, Subject, Subscription, timer } from 'rxjs';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class SignalrService {
//   TimerSource?: Observable<number>;
//   TimerSubscription: Subscription = new Subscription();
//   TimerPaused: boolean = false;
//   reconnectWaitTime = 5000;

//   private message: Subject<IDailyNode[]>;
//   private connection: signalR.HubConnection;

//   constructor() {
//     this.message = new Subject<IDailyNode[]>();
//     this.connection = new signalR.HubConnectionBuilder()
//       .withUrl(environment.apiBaseUrl + '/notify')
//       .withAutomaticReconnect([0, 1000, 5000])
//       .build();
//     this.connection
//       .start()
//       .then(() => console.log('SignalR started'))
//       .catch((err: any) => console.log('Error while starting connection: ' + err));

//     this.connection.onreconnected(() => {
//       console.log('Reconnected');
//     });

//     this.connection.on('BroadcastMessage', (command: string, object: IDailyNode[]) => {
//       this.message.next(object);
//     });

//     this.connection.onclose(() => {
//       //Start subscript to timer
//       console.log('Disconnected');
//       this.TimerSource = timer(5000, 5000);
//       this.TimerSubscription = this.TimerSource.subscribe(() => {
//         this.connection.start().then(
//           () => {
//             console.log('Reconnected');
//             this.TimerSubscription.unsubscribe();
//           },
//           () => {
//             //Reject code here
//             console.log('Reconnect Error');
//           }
//         );
//       });
//     });
//   }

//   public getMessage(): Observable<IDailyNode[]> {
//     return this.message.asObservable();
//   }
//   public getState(): signalR.HubConnectionState {
//     return this.connection.state;
//   }

//   public Reconnect() {
//     this.connection.start().then(function () {
//       console.log('ReConnected!');
//     });
//   }
//   public disconnect() {
//     this.connection.stop();
//   }
//   ngOnDestroy(): void {
//     this.TimerSubscription.unsubscribe();
//   }
// }

export interface IMap {
	status: string;
	seat: string;
	name: string;
	id: string;
	enterTime: string;
}

export interface ILogIn {
	id: string;
	pw: string;
}

export interface IMe {
	userid: string;
	nickname: string;
	organization: string;
	reserved: boolean;
	about: string;
	adminlevel: string;
	worktype: string;
	seat?: ISeat;
}

export interface ISeat {
	seatName: string;
	floor: string;
	enterTime: string;
	reserved: boolean;
	seatType: string;
}

export interface IReserveSeat {
	floor: string;
	seat: string;
}

export interface IRoom {
	floor: string;
	roomId: string;
	capacity: number;
	date: string;
	startTime: string;
	endTime: string;
	hostId: string;
}

export interface IReserveRoom {
	floor: string;
	room: string;
	capacity: number;
	date: string;
	startTime: string;
	endTime: string;
}

export interface IDate {
	date: string;
}

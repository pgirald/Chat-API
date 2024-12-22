export type Privileges = {
	defaults: boolean;
	broadcast: boolean;
	userDeletionBan: boolean;
	userPrivileges: boolean;
};

export type User = {
	id: number;
	username: string;
	email: string;
	phoneNumber?: string;
	firstName: string;
	lastName: string;
	//get fullName(): string;
	aboutMe?: string;
	permissions?: Privileges;
	img?: string;
};

export type Contact = User & {
	muted: boolean;
	blocked: boolean;
};

export type Message = {
	id: number;
	sender: Contact;
	content: string;
	receptionTime: Date;
	attachments: Attachment[];
};

export type Chat = {
	id: number;
	subs: Contact[];
	owner: Contact;
	messages: Message[];
	name?: string;
	img?: string;
	ringtone?: Ringtone;
};

export type Ringtone = {
	id: number;
	name: string;
	url: string;
};

export type Attachment = {
	name: string;
	url: string;
};

export type Settings = {
	enableNotifications: boolean;
	seenStatus: boolean;
	showOnlineStatus: boolean;
	discoverability: boolean;
	chatApproval: boolean;
	notificationTone?: Ringtone;
	groupsTone?: Ringtone;
};

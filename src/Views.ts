export type Role = {
	name: string;
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
	role?: Role;
	img?: string;
};

export type Contact = User & {
	muted: boolean;
	blocked: boolean;
};

export type Message = {
	id: number;
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
	name: string;
	url: string;
};

export type Attachment = {
	name: string;
	url: string;
};

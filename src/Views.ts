export type Role = {
	name: string;
	defaults: boolean;
	broadcast: boolean;
	userDeletionBan: boolean;
	userPrivileges: boolean;
};

export type Contact = {
	username: string;
	email: string;
	phoneNumber: string;
	firstName: string;
	lastName: string;
	//get fullName(): string;
	aboutMe?: string;
	muted: boolean;
	blocked: boolean;
	picture?: string;
	role?: Role;
	img?: string;
};

export type Message = {
	content: string;
	receptionTime: Date;
	attachments: Attachment[];
};

export type Chat = {
	subs: Contact[];
	owner: Contact;
	messages: Message[];
	name: string;
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

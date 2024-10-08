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
	countryCode: string;
	phone: string;
	firstName: string;
	lastName: string;
	get fullName(): string;
	aboutMe?: string;
	muted: boolean;
	blocked: boolean;
	picture?: string;
	role: Role;
};

export type Message = {
	content: string;
	receptionTime: Date;
	attachments: string[];
};

export type Chat = {
	subs: Contact[];
	messages: Message[];
};

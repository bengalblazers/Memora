// app/types.ts

export type RootStackParamList = {
    Auth: undefined;
    Profile: { updatedContacts?: Contact[] } | undefined;
    EditProfile: undefined;
    EditContacts: { currentContacts?: Contact[] } | undefined;
  };
  
  export type Contact = {
    role: string;
    name: string;
    phone: string;
  };
  
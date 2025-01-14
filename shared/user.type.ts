export type User = {
  _id:  string;
  name: string;
  email: string;
  password: string;
  lastLogin: Date;
  isVerified: boolean;
  resetPasswordToken?: string;
  resetPasswordExpiredAt?: Date;
  verificationToken?: string;
  verificationTokenExpiredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

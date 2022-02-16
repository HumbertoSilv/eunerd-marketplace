import * as yup from "yup";

const date = new Date();

export const loanSchema = yup.object().shape({
    totalRequestedAmountCents: yup.number().positive().required(),
	category: yup.mixed().oneOf(["X", "Y", "Z"]).required(),
	expiresAt: yup.date().min(date).required()
});

export const investmentSchema = yup.object().shape({
    totalInvestedAmountCents: yup.number().positive().required(),
    loan_id: yup.string().required()
});

export const marketPlaceSchema = yup.object().shape({
    loanList: yup.array().required(),
    investmentList: yup.array().required()
});
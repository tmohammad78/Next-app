import { string, number, boolean, object } from 'yup';
const nameRegex = /^[a-zA-Z]+$/;
const numberRegex = /(0)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
export const validation = object().shape({
	name: string()
		.required('اجباری')
		.matches(nameRegex, 'اسم نادرست هست'),
	email: string()
		.email('.ایمیل درست نمی باشد')
		.required('اجباری'),
	password: string()
	.min(4,'باید حداقل ۴ کاراکتر باشد')
	.max(10,'باید حداکثر ۱۰ کاراکتر باشد')
	.required('اجباری'),
	phonenumber: string().matches(numberRegex,'شماره درست را وارد کنید')
	.min(11,'شماره درست را وارد کنید')
	.max(11,'شماره درست را وارد کنید'),
});

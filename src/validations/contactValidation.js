import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("نام و نام خوانوادگی الزامیست"),
    photo: Yup.string().url("آدرس معتبر نیست").required("تصویر مخاطب الزامی میباشد"),
    mobile: Yup.number().required("شماره موبایل الزامیست"),
    email: Yup.string().email("آدرس ایمیل معتبر نیت").required("آدرس ایمیل الزامیست"),
    job: Yup.string().nullable(),
    group: Yup.string().required("انتخاب گروه الزامیست"),
})
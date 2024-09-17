import { useRouter } from 'next/router'
import React from 'react'
import db from "@/data/db.json";


export default function SingleHomeDetailsPage() {
  const router = useRouter()
  const {id: homeID } = router.query
  const home = db.homes.find(home => home.id === Number(homeID))

  return (
    <>
      <div class="home-details">
                <div class="home-details-top">
                    <div class="home-img">
                        <img src={home?.img}alt="" />
                    </div>
                    <div class="home-interduce">
                        <div class="home-title">
                            <h1>
                                <span>{home?.title}</span>
                                <span>{home?.price} تومان</span>
                            </h1>
                            <div class="tags">
                                <span class="tag green-tag">ویژه</span>
                                <span class="tag brown-tag">برای اجاره</span>
                            </div>
                            <div class="adrress">آدرس : شیراز، میدان ارم</div>
                        </div>
                        <div class="home-review">
                            <div class="home-review-top">
                                <h2>مرور کلی</h2>
                                <p class="">
                                    <span>کد ملک : </span>
                                    <span>hz-HZ15</span>
                                </p>
                            </div>
                            <ul class="home-review-bottom">
                                <li>
                                    <span>نوع ملک: </span>
                                    <span>مغازه</span>
                                </li>
                                <li>
                                    <span>اتاق: </span>
                                    <span>1</span>
                                </li>
                                <li>
                                    <span>متراژ</span>
                                    <span>2360</span>
                                </li>
                                <li>
                                    <span>سال ساخت</span>
                                    <span>1402</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="home-details-bottom">
                    <div class="home-details-description">
                        <p class="">توضیحات</p>
                        <p class="">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                            آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد. در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد. مشاوران دوطرفه به
                            خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک
                            وظیفه دارد که با صداقت به هر دو طرف معامله مشاوره و
                            راهنمایی درستی بدهد. مشاوران دوطرفه باید از هر دو
                            طرف چه فروشنده و چه خریدار بخواهند که یک قرارداد
                            نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی
                            برای مشاوران دوطرفه وجود دارد، این دست از مشاوران
                            نسبت به دو دسته قبل کارشان سخت‌تر و پیچیده‌تر
                            است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است.
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}

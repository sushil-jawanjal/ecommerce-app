import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />

        <div
          className="flex flex-col justify-center gap-6 md:w-2/4
         text-gray-600"
        >
          <p>
            At ZyrahWear, we believe fashion is for everyone, and it should
            never go out of style. Whether you're dressing up your little ones,
            refreshing your wardrobe, or looking for timeless classics, we've
            got you covered. Our collections are carefully curated to blend
            quality, comfort, and trend, making sure you and your family always
            look and feel your best.
          </p>
          <p>
            From playful outfits for kids, elegant and confident styles for
            women, to smart and casual options for men — ZyrahWear brings
            fashion for every age, every mood, and every moment. We’re more than
            just a clothing brand — we’re a part of your everyday moments,
            celebrations, and memories. Join the Forever family and discover
            fashion that stays with you… well, forever.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At ZyrahWear, our mission is simple — to make fashion accessible,
            comfortable, and timeless for everyone in the family. We’re here to
            inspire confidence through clothing that fits well, feels good, and
            reflects your personality — whether you’re shopping for your kids,
            updating your own wardrobe, or finding the perfect outfit for
            someone you love.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            At ZyrahWear, quality isn't just a promise it's our foundation. We
            understand that clothing is more than just fabric it’s comfort,
            confidence, and expression. That’s why every piece in our collection
            goes through a strict quality check process to ensure it meets our
            high standards for:
            <br />
            <br />
            ✔️ Fabric Excellence We choose only soft, durable, and skin-friendly
            materials that feel as good as they look perfect for kids, women,
            and men alike.
            <br />
            <br />
            ✔️ Perfect Fit & Finish From stitching to sizing, every item is
            expertly crafted to ensure comfort, long-lasting wear, and style
            that holds up — wash after wash.
            <br />
            <br />
            ✔️ Style with Substance We combine modern trends with lasting
            quality, so you can enjoy fashion that stays fresh and wearable.
            <br />
            <br />
            ✔️Customer Feedback Driven We continuously improve based on your
            experience and reviews, making sure we always deliver better — every
            time.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

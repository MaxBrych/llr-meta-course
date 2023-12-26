import React from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://s3-alpha-sig.figma.com/img/950e/c9e8/16cd32ede00dca02702378b313939065?Expires=1704672000&Signature=Ee9PPFNOHlQ~Sh3DYWm4ETfBMbjG99wYvtp~us5DwYzmxv09slmnWfqXO1w51Msrsy6tVV5RUUofU8FuACctwQOEnsYqak-JFl7Maiv48qvWCFBF2Skf~uFEjLvMxJUDkDRn0Cxg9z0lLP28AZeVGg97hLbv-oqlT7X2wNesQBtjQ4SP~4Hsn1E0ju~JImdRjnqzQUk8lk~rZymbaG1fRJmi66TT870baIytRUK~hMJKUyUTTYy32lcE3bB3oeqA8CAbXTZSuq-OE3aZyuZutqVoiQbeL57oxthGAP3zJILEhdGmkYthntl97rejBlbcTmjzTEUY18Cp9PWcqMHlgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image:
      "https://s3-alpha-sig.figma.com/img/55ec/ff3e/87794138634dcf7d86503b235b3b347c?Expires=1704672000&Signature=IJ~bzOBDgd0cMH9EQCayTBELq22B~vE4VpXC9-CwdTTAc9oFRSgyM3kUOtlDaNnyMVD51VwAAeYlu~UWvQ-hC-s3wEPKQkWgpKauWjz63DM7TqrWGMeikQKazlRvYvXtWDBlDzFstl4ZzTPMpuNfDvJQY~z097OE804yjzSID-IX8~~S8z7wdz4OPYstOilA-PxSg3dXJbMhKrwJRmqZdmYHmeMeNRSTGqYQhsTWeFxo4-6-RKv4jW41YS0L9rtQHcSgUjbYj6ttbfA70v0k1r0kg~8eqk1joPa8fnFuRRKJj3N5yV4tC1dmvG8XXivN0Zdpg3jY~DGQd55zFBN5JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Smith",
    title: "COO",
    image:
      "https://s3-alpha-sig.figma.com/img/17fd/b990/0c61ca5840224255d8ac65607d86bbd3?Expires=1704672000&Signature=WBWoejQ-WkIDNq6SPu89NRraOdbegpKdq6CyGmSdKO-wFxCN-dsuVNg2hal7cEcwkZYszbYW3qdwAp2ae37MEDRcKA26syMoFEbbg3q22wL2cnEyiLy7kiGnpI8nP5B~igYpmZTR1mkKHJZ2gOqRk1pys7tqy2YJWxpGM8oz4BvJfan7wYMFTDVVns4JDeAnypTcl4cUxaK0d~6jJ3E333XigAQS-Vhemgyt6QYdZxgId7nf01b6pPErGt9LDs1f5Nj6O7GqE1Z0xayXdvUljxHK7Duj5N6P34P-DMYFryQxvSyTRQu9AhXx7Mc-sjrH2xpjugspeEr-gdxrv3pCHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export default function Testimonials() {
  return (
    <div class="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div class="testimonial">
            <div>stars</div>
            <div class="testimonial-quote">{testimonial.quote}</div>
            <div className="flex">
              <img class="testimonial-image" src={testimonial.image} />
              <div class="text-col">
                <div class="testimonial-name">{testimonial.name}</div>
                <div class="testimonial-title">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

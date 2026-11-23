export type Review = {
  quote: string;
  name: string;
};

export const reviews: Review[] = [
  {
    quote: "We're thrilled with the finished result and so I'd highly recommend Encompass. I wouldn't hesitate to use them again.",
    name: "Rebecca Northey",
  },
  {
    quote: "The professionalism, enthusiasm and commitment shown by the Encompass team is the same, regardless to the budget.",
    name: "David James",
  },
  {
    quote:
      "I have worked with Encompass on various projects over the last 8 or so years and have always found them to be very professional and understanding of the client's needs and wishes.",
    name: "James L Burford",
  },
  {
    quote:
      "Leon and Jason's friendly and knowledgeable service shone through in our first few meetings and their advice left the other building firms that came to look and quote for the job, in the shade.",
    name: "Loris Vezzu",
  },
  {
    quote:
      "They were quick to answer any concerns, ensure the work was carried out to a high standard and have been excellent in keeping in touch post the works. We're thrilled with the job they have done for us.",
    name: "Charlie Minter",
  },
  {
    quote:
      "Professional and extremely knowledgeable, Encompass team is reliable and approachable. Great upholstery and carpenter work, solid building and painting work, overall a good experience.",
    name: "Elsygne Road client",
  },
  {
    quote: "Encompass delivered, designed and transformed our ideas into reality, on time and on budget.",
    name: "Mark Worrall",
  },
  {
    quote:
      "The quality of the building and structural work was good, and because of challenging dimensions in the loft space, Felix was adaptable to any new ideas/suggestions I made, and introduced some clever design ideas himself.",
    name: "Sandip",
  },
];

export function reviewsFor(index: number, count = 2) {
  return Array.from({ length: count }, (_, offset) => reviews[(index + offset * 3) % reviews.length]);
}

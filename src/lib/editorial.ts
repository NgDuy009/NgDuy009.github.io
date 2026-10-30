export interface EditorialImage {
	src: string;
	alt: string;
	caption: string;
	orientation: "portrait" | "landscape" | "square";
	source: string;
}

export const editorialImages: EditorialImage[] = [
	{
		src: "/images/editorial-milan.webp",
		alt: "A person in a pale blue coat and scarf in a European city square.",
		caption: "Form in motion",
		orientation: "portrait",
		source: "photo-1539109136881-3be0616acf4b",
	},
	{
		src: "/images/editorial-campaign.webp",
		alt: "Two fashion models wearing detailed red evening looks outdoors.",
		caption: "Texture & gesture",
		orientation: "portrait",
		source: "photo-1550614000-4895a10e1bfd",
	},
	{
		src: "/images/editorial-portrait.webp",
		alt: "Editorial studio portrait of a model in a black sheer blouse.",
		caption: "A study in shadow",
		orientation: "portrait",
		source: "photo-1524504388940-b1c1722653e1",
	},
	{
		src: "/images/editorial-street.webp",
		alt: "Street-style portrait of a person in a dark layered look.",
		caption: "Personal uniform",
		orientation: "portrait",
		source: "photo-1523398002811-999ca8dec234",
	},
	{
		src: "/images/editorial-wardrobe.webp",
		alt: "A considered wardrobe of jackets, knitwear, and accessories on a rail.",
		caption: "The quiet edit",
		orientation: "portrait",
		source: "photo-1551232864-3f0890e580d9",
	},
];

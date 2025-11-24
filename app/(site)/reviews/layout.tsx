import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FineTech-Reviews",
  description: "Reviews for most recent tech ",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }){
return(
<>{children}</>
)
}
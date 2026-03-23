import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrueTech-BLOG",
  description: "Recent NEWS and Articles about the technologies ",
};

export default function BlogLayout({ children }: { children: React.ReactNode }){
return(
<>{children}</>
)
}
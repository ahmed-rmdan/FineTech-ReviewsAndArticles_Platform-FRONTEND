'use client'


import { motion } from "framer-motion";



export default function Terms(){
    return(
      
     <div className="container flex flex-col w-full mx-auto  gap-[10px] text-[5.5px] md:text-[8px] xl:text-[10px] md:gap-[25px] p-6">
      <motion.h1 initial={{x:-250,opacity:0}} transition={{duration:1}} animate={{x:0,opacity:100}} className="w-full font-bold text-main underline text-[5em] text-center   "> 
        Term&Conditions</motion.h1>
      <motion.p initial={{x:-500,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className=" mx-auto w-[97%] sm:w-[90%] text-[2.2em] text-center 
      text leading-loose">By accessing or using the Finetech application you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms you must not use the application.

Finetech is a fintech content platform that provides articles reviews and user generated content for informational purposes only. The content published on Finetech does not constitute financial legal or investment advice and should not be relied upon as such.

Users are responsible for the accuracy legality and appropriateness of the content they publish including reviews comments ratings and replies. You agree not to post any content that is misleading offensive harmful illegal or violates the rights of others.

Finetech reserves the right to review moderate edit or remove any content that violates these terms or is deemed inappropriate without prior notice.

Users may interact with content by liking commenting replying and saving articles or reviews. Any misuse of these features including spam manipulation or abusive behavior may result in account suspension or termination.

All intellectual property rights related to the Finetech platform including design logos text and software are owned by Finetech or its licensors. You may not copy reproduce or distribute any part of the platform without prior permission.

Finetech does not guarantee the accuracy completeness or reliability of any user generated content. You acknowledge that interactions and decisions based on content found on the platform are made at your own risk.

Finetech may update or modify these Terms and Conditions at any time. Continued use of the application after changes are made constitutes acceptance of the updated terms.

Finetech shall not be held liable for any direct indirect or consequential damages arising from the use or inability to use the platform.

If you have any questions regarding these Terms and Conditions you should stop using the application until the issue is resolved.

</motion.p>


     </div>
                      
                      
    )
          
}
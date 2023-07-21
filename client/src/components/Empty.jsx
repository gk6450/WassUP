import Image from "next/image";
import React from "react";

function Empty() {
  return(
    <div className="border-l w-full border-conversation-border bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
      <Image src="/whatsapp.gif" alt="WassUP" height={300} width={300}/>
    </div>
  );
}

export default Empty;

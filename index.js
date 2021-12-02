const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter Input`, name => {
    var masks = 100;
    var ukMaskPrice = 65;
    var GerMaskPrice = 100;
    var ukGloves = 100;
    var GerGloves = 50;
    var ukGlPrice = 100;
    var GerGlPrice = 150;
    var total=0;
    var reUKGloves=ukGloves;
    var reGerGloves=GerGloves;
    var reUKMasks=masks;
    var reGlMaks=masks;
    var glovesRemain=0;
    var maskRemain=0;
    var trans=0;
    var sumGloves=0;
    var sumMask=0;
    var disc=0;
    var t=name.split(":");
    var IsUK=t[1].startsWith('B');
    if((t[3]>(GerGloves+ukGloves))&&(t[5]>(2*masks)))
    {
         console.log('Out Of Stock');
    }
    else
    {
      if(t[0]== "UK")
      {
          if(t[3]<=ukGloves)
          {
             sumGloves = t[3]* ukGlPrice;
             reUKGloves = ukGloves - t[3];
          }
          else
          {
            sumGloves = ukGloves * ukGlPrice;
            reUKGloves = 0;
            glovesRemain=(t[3]-ukGloves);
            reGerGloves = GerGloves-glovesRemain;
            trans=Math.round(glovesRemain/10);
            console.log(trans);
            disc = (trans*400);
            if(!IsUK)
            {
              disc = (trans*400)*0.8;
            }
            sumGloves=disc+sumGloves+ (glovesRemain*GerGlPrice);
          
          }
          if(t[5]<=masks)
          {
            sumMask = t[5] * ukMaskPrice;
            reUKMasks = masks-t[5];
          }
          else
          {
            sumMask = masks * ukMaskPrice;
            reUKMasks = 0;
            maskRemain=(t[5]-masks);
            reGlMaks = masks-maskRemain;
            trans=Math.round(maskRemain/10);
            disc = (trans*400);
            if(!IsUK)
            {
              disc = (trans*400)*0.8;
            }
            sumMask=disc+sumMask + (maskRemain*GerMaskPrice);
          
          }
      }
      else
      {
        if(t[3]<=GerGloves)
        {
          sumGloves = t[3]* GerGlPrice;
          reGerGloves = GerGloves - t[3];
        }
        else
        {
          sumGloves = GerGloves * GerGlPrice;
          reGerGloves = 0;
          glovesRemain=(t[3]-GerGloves);
          reUKGloves = GerGloves-glovesRemain;
          trans=Math.round(glovesRemain/10);
          console.log(trans);
          disc = (trans*400);
          if(IsUK)
          {
            disc = (trans*400)*0.8;
          }
          sumGloves=disc+sumGloves+ (glovesRemain*ukGlPrice);
        }
        if(t[5]<=masks)
        {
            sumMask = t[5] * GerMaskPrice;
            reGlMaks = masks-t[5];
        }
        else
        {
          sumMask = masks * GerMaskPrice;
          reGlMaks = 0;
          maskRemain=(t[5]-masks);
          reUKMasks = masks-maskRemain;
          trans=Math.round(maskRemain/10);
          disc = (trans*400);
          if(IsUK)
          {
            disc = (trans*400)*0.8;
          }
          sumMask=disc+sumMask + (maskRemain*ukMaskPrice);
        }
      }
    }
    total=sumGloves + sumMask;
    console.log(total+':'+reUKMasks+":"+reGlMaks+" "+reUKGloves+":"+reGerGloves);
    readline.close()
  })
  
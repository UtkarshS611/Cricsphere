import React from 'react'

const Origins = () => {
  return (
    <main class="container mx-auto my-8 px-4">
    
    <section class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Introduction</h2>
      <p class="text-lg leading-relaxed">
        Cricket, one of the world's most popular sports today, has a rich history that dates back several centuries. It evolved from medieval ball-and-stick games and has grown to become an international sport beloved by millions. Let’s explore the fascinating origins of cricket!
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">Timeline of Cricket's Development</h2>

      <div class="mb-6">
        <h3 class="text-2xl font-semibold">12th–16th Century: Early Theories</h3>
        <p class="text-lg mt-2">
          Early references suggest that cricket might have evolved from ball-and-stick games played in medieval Europe. The earliest known form of the game was likely played by children in southeast England.
        </p>
      </div>

      
      <div class="mb-6">
        <h3 class="text-2xl font-semibold">16th Century: The First Records</h3>
        <p class="text-lg mt-2">
          The first known definite reference to cricket comes from legal records in the 1550s in Guildford, Surrey. By the end of the century, adults began adopting the game as a popular pastime.
        </p>
      </div>
      <div class="mb-6">
        <h3 class="text-2xl font-semibold">17th–18th Century: Growth and Formalization</h3>
        <p class="text-lg mt-2">
          Cricket grew in popularity, attracting wagers and spectators. By the mid-1600s, professional players were emerging, and the first formal county matches were recorded in 1709. The first cricket rules were written in 1744.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold">18th Century: Rise of the MCC</h3>
        <p class="text-lg mt-2">
          The Marylebone Cricket Club (MCC) was founded in 1787 at Lord's Cricket Ground. The MCC became the sport's governing body and helped formalize the game with standardized rules.
        </p>
      </div>
    </section>

    <section class="mb-12 text-center">
      <h2 class="text-3xl font-semibold mb-4">Cricket in the Early Days</h2>
      <div class="relative">
        <img src="../public/history.jpg" alt="Early Cricket" class="mx-auto w-3/4 object-cover"/>
        <div class="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p class="text-lg">This is an early representation of cricket played by the English gentry.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Conclusion</h2>
      <p class="text-lg leading-relaxed">
        From its humble beginnings as a rural children’s game to a professional sport governed by the MCC, cricket's evolution is a reflection of England’s societal changes. Today, it has become a global phenomenon, deeply rooted in the culture of many nations.
      </p>
    </section>
  </main>
  )
}

export default Origins

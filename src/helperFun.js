export function justifyText(input) {
    const words = input.split(' ');
    const averageWordLength = Math.floor(
      words.reduce((sum, word) => sum + word.length, 0) / words.length
    );
    const lineLength = Math.max(averageWordLength * 10, 40); // Dynamic length based on text content
  
    let justifiedText = '';
    let currentLine = [];
  
    words.forEach((word) => {
      const testLine = [...currentLine, word].join(' ');
  
      if (testLine.length > lineLength) {
        // Distribute spaces evenly
        const spaceSlots = currentLine.length - 1;
        const totalSpaces = lineLength - currentLine.join('').length;
  
        let justifiedLine;
        if (spaceSlots > 0) {
          const spaceWidth = Math.floor(totalSpaces / spaceSlots);
          const extraSpaces = totalSpaces % spaceSlots;
  
          justifiedLine = currentLine
            .map((w, i) => {
              if (i < spaceSlots) {
                return w + ' '.repeat(spaceWidth + (i < extraSpaces ? 1 : 0));
              }
              return w;
            })
            .join('');
        } else {
          // If there's only one word, pad spaces to the right
          justifiedLine = currentLine[0] + ' '.repeat(totalSpaces);
        }
  
        justifiedText += justifiedLine + '\n';
        currentLine = [word];
      } else {
        currentLine.push(word);
      }
    });
  
    // Add the last line (not justified, left-aligned)
    justifiedText += currentLine.join(' ');
  
    return justifiedText;
  }
  
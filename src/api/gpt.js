import { GPTInstance } from '../axios';

export const CallGPT = async ({ prompt, thumbnail }) => {
  const messages = [
    {
      role: 'system',
      content: `## INFO ## You can add images to the reply by URL. Write the image in JSON format. ## DO NOT RESPOND TO INFO BLOCK ##`,
    },
    {
      role: 'system',
      content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    },
    {
      role: 'user',
      content: `1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
      2. [summarize] : summarize events in order with one line sentence.
      3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
      4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
      6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed anduse a famous quote.
      7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
      8. [image] : Create an image by making the contents so far into one keyword.
      
      Translate into Korean and Use the output in the following JSON format:
      {
          title: here is [title],
          thumbnail: here is [image],
          summary: here is [summarize]
          emotional_content: here is [emotional diary],
          emotional_result: here is [evaluates],
          analysis: here is [Psychological analysis],
          action_list: here is [3 action tips],
      }
      
      
      [events]:`,
    },
    {
      role: 'user',
      content: `"""
      ${prompt}
      """`,
    },
  ];

  if (thumbnail) {
    messages.push({
      role: 'system',
      content: `Thumbnail URL: ${thumbnail}`,
    });
  }

  try {
    const response = await GPTInstance.post('', {
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 1_000,
    });

    const message = response.data.choices[0].message.content;
    return message;
  } catch (error) {
    const errorMessage = error.response?.data?.error?.message || error.message || 'GPT 응답 실패';
    console.error('GPT API 에러 발생:', error.response?.data || error.message);
    throw new Error(errorMessage);
  }
};


const recordingButton = document.getElementById("recording-button");
const speechBar = document.getElementById("speech-bar");
const liveText = document.getElementById("live-text");


const caseStudy = {
    "case_id" : "3",
    "title" : "Food Bank",
    "difficulty" : "Medium",
    "steps" : [
      {
        "step_id" : 1,
        "type" : "PROMPT",
        "content" : "Our client is a food bank in a major metropolitan area. The food bank has seen a decrease in donations recently and is worried about having enough food to meet their commitments to food pantries and other hunger-relief organizations in the area. They have hired your firm to help them with this problem.\n\nQuestion 1: What factors would you consider when diagnosing this problem?",
        "next_action" : "ask_for_framework",
        "conditional_guidance" : {
          "clarifying_info" : [
            {
              "description" : "Definition of a Food Bank",
              "answer" : "A nonprofit that collects and distributes food to different charities that deal with relieving hunger. They often give their food to food pantries where people can go to get food for free.",
              "contextual_cues" : ["What is a food bank?", "role of food bank", "purpose of food bank"]
            },
            {
              "description" : "Sources of Donations",
              "answer" : "Mainly companies in the food industry (Restaurants & Grocery stores). It also receives money from individuals and non-food companies and can use those funds to buy food.",
              "contextual_cues" : ["Where does the food bank get its donations?", "donation sources", "sources of food"]
            },
            {
              "description" : "Types of Donations from Individuals and Non-food Companies",
              "answer" : "Companies outside the food industry and individuals only give money. Companies in the food industry only give food.",
              "contextual_cues" : ["Do individuals and non-food companies also donate food?", "types of donations", "non-food donations"]
            }
          ],
          "guidance_prompt" : "Provide clarifying information if the interviewee asks questions that are reasonably related to the nature of food banks, sources of donations, or types of donations from individuals and companies."
        },
        "guidance" : {
          "expected_answer" : "The interviewee should consider multiple factors, including Food Bank-specific factors, Industry trends, and Macro factors, to diagnose the decrease in donations.",
          "sample_framework" : {
            "Food Bank Factors" : [
              "Breakdown of where the donations come from in terms of food donations and money.",
              "Has there been a decrease in perception of the food bank?",
              "Decrease in advertising?",
              "Decrease in outreach to food companies?"
            ],
            "Industry Factors" : [
              "Are local food banks in the region or across the country experiencing a similar problem?",
              "Is this 'industry' no longer top of mind for charitable giving?",
              "Has perception of the industry decreased?",
              "Have food companies had an increase in demand from their customers?",
              "Have food companies seen a decrease in production?"
            ],
            "Macro Factors" : [
              "Are donations across nonprofits down?",
              "Is the economy in a recession?",
              "Are people not donating as much generally?",
              "Are people spending more money on themselves or saving it more?",
              "Are there political policy changes that have made charitable giving less desirable?"
            ]
          },
          "feedback" : "Encourage the interviewee to explore the Food Bank-specific factors, trends within the food donation industry, and broader economic and societal factors that may be influencing donation levels."
        }
      },
      {
        "step_id" : 2,
        "type" : "Q1",
        "content" : "The food bank receives donations of food and money. Food typically comes from companies in the food industry who donate it for free. Money comes from companies outside the industry or from individuals, and the food bank can use it to purchase food at a discounted price from food companies.\n\nWe have a chart of the value of the donations the food bank has received over the past few years from several sources. What can you tell us from this information?",
        "image_url" : "https://gateway.pinata.cloud/ipfs/QmZRMBaNDoywgTNCQ8yJc8rp3P5wHEXpA7QEZjpNkFFXJU",
        "next_action" : "analyze_data",
        "guidance" : {
          "sample_answer" : [
            "Donations have been decreasing over time as was stated before.",
            "Individual gifts have been staying constant.",
            "Corporate gifts have been increasing slightly.",
            "Donations from restaurants have been decreasing slightly.",
            "Donations from grocery stores have been decreasing the most.",
            "Overall, donations have been decreasing. While donations from individuals have been increasing, it is not enough to make up for the decrease in food donations from grocery stores and food distributors."
          ],
          "feedback" : "Encourage the interviewee to observe trends in donations from various sources and highlight any key patterns or declines that contribute to the overall decrease."
        }
      },
      {
        "step_id" : 3,
        "type" : "Q2",
        "content" : "As you have identified, the decrease in donations appears to come from the donations from companies in the food industry. What do you think could be some causes for this?",
        "next_action" : "prompt_for_causes",
        "guidance" : {
          "sample_answer" : [
            "It is too expensive for the food companies to donate. Perhaps it is much cheaper for them to throw the food away than to give it to the food bank.",
            "Food companies are giving their excess food to someone else.",
            "Management does not see the importance of donating to food banks anymore.",
            "Food companies have seen an increase in demand for their food. They no longer are able to give as much of their surplus since it is being bought.",
            "Food companies have developed much better systems over the years so they can better estimate their demand. They do not have as much food to give away since they purchase more accurate quantities to what they sell.",
            "Food companies have not been able to get as much food from their suppliers as a result of macro trends in the agriculture or food production industry.",
            "Food companies usually donate damaged food and there have been innovations in shipping and manufacturing over the years so that less food is damaged."
          ],
          "feedback" : "Encourage the interviewee to consider operational, demand-related, and industry-wide factors that could be causing a decrease in food donations from companies in the food industry."
        }
      },
      {
        "step_id" : 4,
        "type" : "Q3",
        "content" : "The team would like to investigate some recent trends in the food industry. What can you tell from the information in the chart below?",
        "image_url" : "https://gateway.pinata.cloud/ipfs/QmQ58DQpjvhMsBs3ksNjebgPqxvt94FvrhqwxmYyGqsqqE",
        "next_action" : "analyze_trends",
        "guidance" : {
          "sample_answer" : [
            "A relatively constant amount of products are damaged on the store shelf.",
            "There is a slight decrease in mislabeling of products.",
            "There is a substantial decrease in damages in food for shipping and packaging.",
            "Key insight: If grocery stores and food companies are only giving from food that is damaged in some way, then a decrease in the amount of food that has been damaged, especially in the shipping process, could be the primary reason behind the decrease in donations. Perhaps by getting grocery stores to give some of their non-damaged food, we could increase donations."
          ],
          "feedback" : "Encourage the interviewee to identify key trends in food damage and mislabeling, especially in shipping and packaging, and to relate these trends to the decline in food donations."
        }
      },
      {
        "step_id" : 5,
        "type" : "Q4",
        "content" : "Switching focuses a little bit, the team also wanted to explore what increase in monetary donations they might need to see to make up for the decrease in food donations from grocery stores. Based on the value of the food by stores (the cost of the food to the grocery stores), grocery stores will donate $10,000 less of food next year. How much money would the food bank need to raise to buy an equivalent amount of food at their discounted price?",
        "next_action" : "perform_calculation",
        "conditional_guidance" : {
          "info_available" : [
            {
              "description" : "Food Bank Purchasing Price",
              "answer" : "When a food bank buys food, it is not at the same cost to the store (so they will need more than $10,000 to buy an equivalent amount of food since the $10,000 given in the problem is the cost of food to the grocery store).",
              "contextual_cues" : ["purchasing price", "cost to food bank", "food bank buy cost"]
            },
            {
              "description" : "Average Cost to Grocery Store",
              "answer" : "The average item costs $1.25 for a grocery store to buy.",
              "contextual_cues" : ["average item cost", "cost to grocery store", "grocery store item cost"]
            },
            {
              "description" : "Grocery Store Markup",
              "answer" : "Grocery stores typically have a 6% markup on the cost of their products.",
              "contextual_cues" : ["markup", "product markup", "store markup"]
            },
            {
              "description" : "Food Bank Discounted Price",
              "answer" : "The average discounted price for an item of food (i.e., the price the food bank pays) is $1.30.",
              "contextual_cues" : ["discounted price", "food bank price", "purchase cost"]
            }
          ],
          "guidance_prompt" : "Encourage the interviewee to ask questions about the cost for the food bank to buy food and details on average item costs, as this information is essential for calculating the needed increase in monetary donations."
        },
        "guidance" : {
          "sample_answer" : [
            "$10,000 at cost for grocery stores / $1.25 average cost of food item for grocery stores = 8,000 units less of food will be donated",
            "8,000 fewer units x $1.30 cost of food bank to buy = $10,400 needed to make up for the loss",
            "The strongest candidates will compare this information to what they were previously given. If donations must increase by $10,400 to make up for the decrease in food, this is more than the increase in donations historically, which has been about $5,000 per year based on the chart."
          ],
          "feedback" : "Guide the interviewee to calculate the number of units needed to replace the $10,000 loss, then multiply by the discounted price to estimate the necessary monetary increase. Encourage them to consider the historical donation trends as context."
        }
      },
      {
        "step_id" : 6,
        "type" : "Q5",
        "content" : "What are some ideas for how the food bank could raise this money from donors?",
        "next_action" : "prompt_for_fundraising_ideas",
        "guidance" : {
          "sample_answer" : [
            "Go to existing corporate donors and ask them to increase their donations.",
            "Try to solicit new corporate donors to see if they will donate.",
            "Target wealthy donors to try to increase individual donations.",
            "Target new individual donors. If you can get lots of donors to give very small amounts, you could increase individual donations.",
            "Host an event to try to raise the money.",
            "Offer to add sponsors to a website or in a newsletter.",
            "Sell ad space in a newsletter or on the website.",
            "Try to negotiate with grocery stores to get a lower cost of food so you don’t have to raise as much money."
          ],
          "feedback" : "Encourage the interviewee to think broadly about ways to increase donations, including reaching out to corporate and individual donors, hosting events, and exploring sponsorships or advertising."
        }
      },
      {
        "step_id" : 7,
        "type" : "REC",
        "content" : "You need to deliver a report to the CEO of the food bank. What will you tell them about the work you’ve done?",
        "next_action" : "prompt_final_recommendation",
        "sample_summary" : [
          "Donations from the food industry have decreased significantly over the past few years. While monetary donations have increased, they are not enough to make up for the decrease from food donations.",
          "Some of the decrease in donations appears to come from the fact that there have been fewer shipping damages with products over the past few years.",
          "To make up for the decrease in food donations, we would need to substantially increase the amount of corporate and individual monetary gifts we receive. This would require significant changes in marketing or fundraising.",
          "As next steps, we might want to look into other ways to get food companies and grocery stores to donate non-damaged products.",
          "Another next step could be to further explore the best ways to raise money from donors to close the gap."
        ]
      }
    ]
};


   
   
   // OpenAI API Configuration
   const OPENAI_API_KEY = "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"; // Replace with your OpenAI API Key
   const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"; // Use the chat completions endpoint for GPT-4
   
   
   
   
   // Chatbot state
   let currentStep = 0;
   
   
   // DOM elements
   const chatOutput = document.getElementById("chat-output");
   const userInput = document.getElementById("user-input");
   const sendButton = document.getElementById("send-button");
   
   
   // Function to render chatbot messages
   function renderMessage(sender, message, imageUrl = null) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    messageDiv.style.marginBottom = "10px";
    messageDiv.style.color = sender === "Bot" ? "#007BFF" : "#000";
    chatOutput.appendChild(messageDiv);


    // If there is an image URL, create an img element and append it
    if (imageUrl) {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Chart Image";
        image.style.maxWidth = "100%";
        image.style.marginTop = "10px";
        chatOutput.appendChild(image);
    }


    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}
   
   
   // Function to handle the next step
   function handleStep(step) {
    console.log("Handling step:", step); // Debugging log
    renderMessage("Bot", step.content, step.image_url || null);
}


   
   
   // Function to analyze user input with OpenAI API using feedback
   async function analyzeInputWithOpenAI(userResponse, feedback) {
    try {
      console.log("Sending request to OpenAI with the following data:");
      console.log("User Response:", userResponse);
      console.log("Feedback:", feedback);
   
   
      const response = await axios.post(
        OPENAI_API_URL,
        {
          model: "gpt-4-turbo", // Specify GPT-4 model
          messages: [
            {
              role: "system",
              content:
                "You are the person interviewing the user. Prod the user towards the answer that you are looking for so that we can progress with the case. You have to go about it in the correct way though. the way you are currently doing it is providing the information directly from the json file. instead, conceptulaize the information in the json file into an idea that can be explored. with that being siad, you have access to the internet aswell as every resource in the book, so the answer provided in the JSON file is by no means the only right answer. you should use your undertanding to determine the validity of the answer given by the user, and then decide to move on or to not move on depending on that validity. You should not continue to move on through the case until the answer provided by the user is a valid answer. if they are not providing a valid answer, then you need to spend time time trying to give them different prompts and hints to show them how to get to an acceptable answer. In your responses, you should never say things like, 'an example of good feedback would be' because you are the one giving the feedback so just say the good feedback. also if in your feedback you ask the interviewee to respond to something like asking them to expand on an idea or explore a new idea, you cannot move on in the case until you have let them respond to that new prompt you gave them. ",
            },
            {
              role: "user",
              content: `Analyze the user's response: "${userResponse}" based on the feedback: "${feedback}". Provide specific constructive guidance to lead the user toward a correct and thoughtful answer. Do not move to the next content point until the user's input is as valid or strong as the feedback suggests. If through the feedback, the user is asked to explore something or answer a question. do not move`,
            },
          ],
          max_tokens: 200, // Adjust tokens based on your needs
          temperature: 0.7, // Control the creativity level
        },
        {
          headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
   
   
      console.log("Received response from OpenAI:");
      console.log(response.data);
      return response.data.choices[0].message.content.trim(); // GPT-4 Turbo responses are in `message.content`
    } catch (error) {
      console.error("Error with OpenAI API:", error.response ? error.response.data : error.message);
      return "I'm sorry, I couldn't analyze your input. Please try again.";
    }
   }
   
   
   
   
   // Event listener for sending user input
   sendButton.addEventListener("click", async () => {
    const userResponse = userInput.value.trim();
    if (!userResponse) return;
   
   
    // Render user message
    renderMessage("You", userResponse);
   
   
    // Fetch the current step
    const step = caseStudy.steps[currentStep];
   
   
    // Analyze user response using OpenAI API
    if (step.guidance && step.guidance.feedback) {
      const feedback = step.guidance.feedback;
      const openAIResponse = await analyzeInputWithOpenAI(userResponse, feedback);
      renderMessage("Bot", openAIResponse);
    }
   
   
    // Only move to the next step if feedback is provided to guide the user
    const openAIResponse = await analyzeInputWithOpenAI(userResponse, step.guidance.feedback);
    if (openAIResponse.toLowerCase().includes("good point") || openAIResponse.toLowerCase().includes("consider")) {
      currentStep++;
      if (currentStep < caseStudy.steps.length) {
        handleStep(caseStudy.steps[currentStep]);
      } else {
        renderMessage("Bot", "Great work! You’ve completed the case study.");
      }
    } else {
      renderMessage("Bot", "Let's try approaching this from another angle. Think about the feedback I provided!");
    }
   
   
    // Clear input
    userInput.value = "";
   });
   
   
   // Start chatbot with the first step
   handleStep(caseStudy.steps[currentStep]);

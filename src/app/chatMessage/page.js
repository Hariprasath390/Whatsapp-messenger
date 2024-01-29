"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

function page() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const urlParams = new URLSearchParams(window.location.search);
  const chatId = urlParams.get("chatId");
  const chatData = [
    {
      id: 1,
      name: "Vijay",
      imageUrl: "/images/vijay.jpg",
      message: "How are you?",
      time: "11:49",
      unreadCount: 1,
    },
    {
      id: 2,
      name: "Rogers",
      imageUrl: "/images/rogers.jpg",
      message: "I’ll be there.",
      time: "10:49",
      unreadCount: 4,
    },
    {
      id: 3,
      name: "Roshna",
      imageUrl: "/images/roshna.jpg",
      message: "Make somebody’s day.",
      time: "09:49",
      unreadCount: 2,
    },
    {
      id: 4,
      name: "Zendaya",
      imageUrl: "/images/zendaya.jpg",
      message: "Dreams come true.",
      time: "08:49",
      unreadCount: 0,
    },
    {
      id: 5,
      name: "Thor",
      imageUrl: "/images/thor.jpg",
      message: "Awesome! I'll start a vid..",
      time: "07:49",
      unreadCount: 0,
    },
    {
      id: 6,
      name: "Alia Bhat",
      imageUrl: "/images/alia.jpg",
      message: "i Love you",
      time: "6:59",
      unreadCount: 1,
    },
    {
      id: 7,
      name: "Natasha",
      imageUrl: "/images/natasha.jpg",
      message: "Love, light, laughter.",
      time: "06:49",
      unreadCount: 0,
    },
    {
      id: 8,
      name: "Virat",
      imageUrl: "/images/virat.jpg",
      message: "Appreciate the mome..",
      time: "Yesterday",
      unreadCount: 2,
    },
    {
      id: 9,
      name: "Jeslin",
      imageUrl: "/images/jeslin.jpg",
      message: "Now or never.",
      time: "Yesterday",
      unreadCount: 0,
    },
  ];
  const chatMessageData = [
    {
      userName: "Thor",
      status: "Online",
      profileImage: "/images/thor.jpg",
      messages: [
        { day: "Wednesday!" },
        {
          receiver: "I've been waiting to see that show asap!",
          timestamp: "07:45",
        },
        { sender: "Ahh, I can't believe you do too!", timestamp: "07:45" },
        { sender: "The trailer looks good", timestamp: "07:45" },
        { sender: "I've been waiting to watch it!!", timestamp: "07:45" },
        { receiver: "😐😐😐", timestamp: "07:46" },
        { receiver: "Mee too! 😊", timestamp: "07:46" },
        {
          sender: "We should video chat to discuss, if you're up for it!",
          timestamp: "07:48",
        },
        { receiver: "Sure", timestamp: "07:48" },
        { receiver: "I'm free now!", timestamp: "07:48" },
        {
          sender: "Awesome! I'll start a video chat with you in a few.",
          timestamp: "07:49",
        },
      ],
    },
    {
      userName: "Vijay",
      status: "Offline",
      profileImage: "/images/vijay.jpg", // Replace with the actual image path for Vijay
      messages: [
        { day: "Thursday!" },
        {
          receiver: "Hey, have you watched the latest movie?",
          timestamp: "09:30",
        },
        { sender: "Not yet, is it good?", timestamp: "09:30" },
        {
          receiver: "Absolutely! You should check it out.",
          timestamp: "09:31",
        },
        { sender: "I'll add it to my watchlist", timestamp: "09:31" },
        {
          receiver: "Great choice! Let me know your thoughts after watching.",
          timestamp: "09:32",
        },
      ],
    },
    {
      userName: "Roshna",
      status: "Away",
      profileImage: "/images/roshna.jpg", // Replace with the actual image path for Roshna
      messages: [
        { day: "Friday!" },
        {
          receiver: "Hey, how's it going?",
          timestamp: "11:15",
        },
        {
          sender: "Hi Roshna! Not bad, just chilling. How about you?",
          timestamp: "11:15",
        },
        { receiver: "I'm good too, just busy with work.", timestamp: "11:16" },
        { sender: "Take a break when you can! 😊", timestamp: "11:16" },
        { receiver: "I will, thanks! 😊", timestamp: "11:17" },
      ],
    },
    {
      userName: "Zendaya",
      status: "Online",
      profileImage: "/images/zendaya.jpg", // Replace with the actual image path for Zendaya
      messages: [
        { day: "Saturday!" },
        {
          receiver: "Hey, have you seen the latest fashion trends?",
          timestamp: "14:00",
        },
        { sender: "Not yet! What's trending?", timestamp: "14:00" },
        {
          receiver: "Lots of vibrant colors and bold patterns.",
          timestamp: "14:01",
        },
        {
          sender: "Sounds exciting! Any specific recommendations?",
          timestamp: "14:01",
        },
        {
          receiver:
            "You should try incorporating neon colors, they're in right now.",
          timestamp: "14:02",
        },
        {
          sender: "Thanks for the tip! I'll give it a shot.",
          timestamp: "14:02",
        },
        { sender: "By the way, how's your day going?", timestamp: "14:03" },
        {
          receiver:
            "It's been good, just catching up on some projects. How about yours?",
          timestamp: "14:03",
        },
        {
          sender: "Pretty relaxed, just enjoying the weekend vibes.",
          timestamp: "14:04",
        },
      ],
    },
    {
      userName: "Alia Bhat",
      status: "Online",
      profileImage: "/images/alia.jpg", // Replace with the actual image path for Alia Bhatt
      messages: [
        { day: "Sunday!" },
        {
          receiver: "Hey, have you heard about the new movie coming out?",
          timestamp: "15:30",
        },
        { sender: "No, what's the movie about?", timestamp: "15:30" },
        {
          receiver:
            "It's a romantic comedy with a twist of suspense. Looks promising!",
          timestamp: "15:31",
        },
        {
          sender: "Sounds interesting! When is it releasing?",
          timestamp: "15:31",
        },
        {
          receiver: "Next Friday. Would you be up for watching it together?",
          timestamp: "15:32",
        },
        { sender: "Absolutely! Count me in.", timestamp: "15:32" },
        { sender: "By the way, how was your day?", timestamp: "15:33" },
        {
          receiver: "It was good, just finished a photoshoot. How about yours?",
          timestamp: "15:33",
        },
        {
          sender: "Pretty relaxing, just enjoying the weekend vibes.",
          timestamp: "15:34",
        },
      ],
    },
    {
      userName: "Natasha",
      status: "Online",
      profileImage: "/images/natasha.jpg", // Replace with the actual image path for Natasha
      messages: [
        { day: "Monday!" },
        {
          receiver:
            "Hey, did you check out the new exhibition at the art gallery?",
          timestamp: "16:00",
        },
        { sender: "Not yet, is it worth a visit?", timestamp: "16:00" },
        {
          receiver: "Absolutely! There are some amazing pieces on display.",
          timestamp: "16:01",
        },
        {
          sender:
            "I'll definitely go check it out this weekend. Thanks for the recommendation!",
          timestamp: "16:01",
        },
        {
          receiver: "You're welcome! Let me know what you think of it.",
          timestamp: "16:02",
        },
        { sender: "By the way, how's your day going?", timestamp: "16:02" },
        {
          receiver:
            "Pretty good, just working on a new project. How about yours?",
          timestamp: "16:03",
        },
        {
          sender:
            "Just a usual Monday, but looking forward to the weekend already!",
          timestamp: "16:03",
        },
      ],
    },
    {
      userName: "Virat",
      status: "Online",
      profileImage: "/images/virat.jpg", // Replace with the actual image path for Virat
      messages: [
        { day: "Tuesday!" },
        {
          receiver: "Hey, did you catch the cricket match yesterday?",
          timestamp: "18:30",
        },
        {
          sender: "Yes, it was an intense game! What did you think?",
          timestamp: "18:30",
        },
        {
          receiver:
            "Absolutely thrilling! That last over had me on the edge of my seat.",
          timestamp: "18:31",
        },
        {
          sender: "I know, right? Incredible performance by both teams.",
          timestamp: "18:31",
        },
        {
          receiver:
            "Do you think they'll maintain this momentum in the upcoming series?",
          timestamp: "18:32",
        },
        {
          sender:
            "Hard to say, but it's going to be an exciting series for sure.",
          timestamp: "18:32",
        },
        {
          receiver:
            "Can't wait for the next match! Are you planning to watch it live?",
          timestamp: "18:33",
        },
        {
          sender: "Definitely! It's going to be a must-watch. Want to join?",
          timestamp: "18:33",
        },
        { receiver: "Absolutely, count me in!", timestamp: "18:34" },
      ],
    },
    {
      userName: "Jeslin",
      status: "Online",
      profileImage: "/images/jeslin.jpg", // Replace with the actual image path for Jeslin
      messages: [
        { day: "Thursday!" },
        {
          receiver: "Hey, how's it going?",
          timestamp: "10:15",
        },
        {
          sender:
            "Hi Jeslin! Not bad, just working on some projects. How about you?",
          timestamp: "10:15",
        },
        {
          receiver: "I'm doing well, thanks! Just finished a workout session.",
          timestamp: "10:16",
        },
        {
          sender:
            "That's awesome! Staying active is important. Any exciting plans for the day?",
          timestamp: "10:16",
        },
        {
          receiver:
            "Not much, just a chill day. Maybe catch up on some reading later.",
          timestamp: "10:17",
        },
        {
          sender: "Sounds relaxing! What are you currently reading?",
          timestamp: "10:17",
        },
        {
          receiver: "I'm into mystery novels lately. Any recommendations?",
          timestamp: "10:18",
        },
        {
          sender:
            "If you haven't read it yet, 'The Girl with the Dragon Tattoo' is a must-read.",
          timestamp: "10:18",
        },
      ],
    },
    {
      userName: "Rogers",
      status: "Online",
      profileImage: "/images/rogers.jpg", // Replace with the actual image path for Captain America
      messages: [
        { day: "Friday!" },
        {
          receiver: "Hey, Cap! How's the day treating you?",
          timestamp: "12:00",
        },
        {
          sender: "Hey there! Just finished a training session. What's up?",
          timestamp: "12:00",
        },
        {
          receiver:
            "Not much, just checking in. Anything exciting happening at the Avengers HQ?",
          timestamp: "12:01",
        },
        {
          sender:
            "Just the usual. Planning for the next mission. How about you? Any plans for the weekend?",
          timestamp: "12:01",
        },
        {
          receiver:
            "Thinking of catching up on some movies. Any recommendations?",
          timestamp: "12:02",
        },
        {
          sender:
            "How about a classic like 'Casablanca' or 'Gone with the Wind'? Always a good choice.",
          timestamp: "12:02",
        },
        {
          receiver: "Great picks! I'll add them to my list. Thanks, Cap!",
          timestamp: "12:03",
        },
        {
          sender:
            "Anytime, soldier! Let me know if you need backup with the movie marathon.",
          timestamp: "12:03",
        },
      ],
    },
  ];
  
  const selectedChatData = chatData.find((chat) => chat.id == chatId);
  const selectedChatMessageData = chatMessageData.find(
    (chatMessage) => chatMessage.userName === selectedChatData?.name
  );
  const day = selectedChatMessageData?.messages[0]?.day;
  const [showEmojiDiv, setShowEmojiDiv] = useState(false);
  const toggleEmojiDiv = () => {
    setShowEmojiDiv(!showEmojiDiv);
  };
  useEffect(() => {
    const defaultChatUser = "Vijay";

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const defaultChat = chatMessageData.find(
          (user) => user.userName === defaultChatUser
        );

        setSelectedChat(defaultChat);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className=" w-[100%] h-[100%] flex-[70%] bg-[#e5ddd5] dark:bg-gradient-to-r from-slate-500  ">
        <div className="bg-image"> </div>

        {isLoading ? (
          <p className="text-center justify-center flex items-center h-screen text-black ">
            Loading...
          </p>
        ) : (
          <>
            <div className="sticky top-0 z-50 ">
              <div className="relative flex items-center w-[100%] h-[60px] bg-[#ededed] dark:bg-gradient-to-r from-slate-500  px-[15px] justify-between">
                {selectedChatData && selectedChatMessageData && (
                  <div className=" flex gap-3 sticky top-0 ">
                    <div className="relative w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                      <Image
                        className="object-cover w-full h-full"
                        src={selectedChatData.imageUrl}
                        alt=""
                        width={1000}
                        height={800}
                      />
                    </div>
                    <h4 className="font-bold text-black/70 font-sans sm:text-[14px] text-[12px] dark:text-white sm:w-64 w-14">
                      {selectedChatData.name}
                      <br />
                      <span className="font-sans text-gray-500 text-xs dark:text-white">
                        {selectedChatMessageData.status}
                      </span>
                    </h4>
                  </div>
                )}

                <div className="flex justify-end pl-[110px]">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 hover:bg-gray-200 rounded-full">
                        <span className="text-gray-600">
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            preserveAspectRatio="xMidYMid meet"
                            className=""
                            version="1.1"
                            x="0px"
                            y="0px"
                            enableBackground="new 0 0 24 24"
                          >
                            <title>search-alt</title>
                            <path
                              fill="currentColor"
                              d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="p-2 hover:bg-gray-200 rounded-full">
                        <span className="text-gray-600">
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            preserveAspectRatio="xMidYMid meet"
                            className=""
                            version="1.1"
                            x="0px"
                            y="0px"
                            enableBackground="new 0 0 24 24"
                          >
                            <title>menu</title>
                            <path
                              fill="currentColor"
                              d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative w-[100%] sm:p-[50px] p-[10px] overflow-y-auto no-scrollbar "
              style={{ height: "calc(100% - 120px)" }}
            >
              {day && (
                <div className="relative flex w-full my-5 justify-center">
                  <p className="relative right-0 text-right max-w-2/3 p-2 rounded-lg text-xs bg-[#ffffff] dark:bg-[#b1b6a7] dark:text-black">
                    {day}
                  </p>
                </div>
              )}

              {/* {showEmojiDiv && (
        <div className="emojianimationn">
          <div className="flex bg-white  w-[308px] h-[56px] p-3 shadow-2xl gap-2 rounded-full ">
            <div className=" left-4 bg-white">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button like-button"
              >
                <h2
                  className="text-2xl"
                  role="img"
                  aria-label="Thumbs Up"
                >
                  👍
                </h2>
              </div>
            </div>

            <div className="">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button love-button"
              >
                <h2 className="text-2xl" role="img" aria-label="Heart">
                  ❤️
                </h2>
              </div>
            </div>

            <div className="">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button laugh-button"
              >
                <h2
                  className="text-2xl"
                  role="img"
                  aria-label="Laughing"
                >
                  😂
                </h2>
              </div>
            </div>

            <div className=" ">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button wow-button"
              >
                <h2 className="text-2xl" role="img" aria-label="Wow">
                  😮
                </h2>
              </div>
            </div>

            <div className=" ">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button sad-button"
              >
                <h2 className="text-2xl" role="img" aria-label="Sad">
                  😢
                </h2>
              </div>
            </div>

            <div className=" ">
              <div
                role="button"
                tabIndex="0"
                className="emoji-button pray-button"
              >
                <h2
                  className="text-2xl"
                  role="img"
                  aria-label="Praying"
                >
                  🙏
                </h2>
              </div>
            </div>

            <div
              role="button"
              aria-label="More reactions"
              className="border rounded-full bg-gray-100 text-gray-600 flex items-center justify-center p-2"
            >
              <span data-icon="add-alt-2" className="flex items-center">
                <svg
                  viewBox="0 0 18 18"
                  width="14"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  className="text-gray-600"
                >
                  <title>add more reactions</title>
                  <path
                    d="M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      )} */}

              {selectedChatMessageData?.messages.map((message, index) => (
                <div
                  key={index}
                  className={`group relative flex w-full my-5 ${
                    message.receiver
                      ? "justify-end items-center"
                      : "items-center"
                  }`}
                >
                  {message.receiver && (
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                      <div
                        className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1"
                        onClick={toggleEmojiDiv}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-white fill-current"
                        >
                          <title>smiley</title>
                          <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                        </svg>
                      </div>
                    </div>
                  )}

                  {!message.day && (
                    <p
                      className={`relative right-0 text-right max-w-2/3 p-3 rounded-lg text-sm ${
                        message.receiver
                          ? "bg-[#dcf8c6] dark:text-black dark:bg-[#f5f2c0]"
                          : "bg-[#ffffff] dark:text-white dark:bg-[#838f96]"
                      }`}
                    >
                      {message.sender ? message.sender : message.receiver}
                      <span className="block mt-2 text-xs opacity-50">
                        {message.timestamp}
                      </span>
                    </p>
                  )}

                  {message.sender && (
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                      <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-white fill-current"
                        >
                          <title>smiley</title>
                          <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className=" w-[100%] h-[60px] bg-[#f0f0f0] dark:bg-gradient-to-r from-slate-500  flex justify-between items-center sticky bottom-0">
              <div className="relative">
                <button className="p-2 rounded-full focus:outline-none ">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700 fill-current dark:text-black"
                  >
                    <title>attach-menu-plus</title>
                    <path
                      d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>

              <svg
                viewBox="0 0 24 24"
                className="w-10 h-[36.5px] p-2 text-gray-700 fill-current bg-white rounded-l-md -mx-2.5 ml-2 dark:bg-white dark:text-black"
              >
                <title>smiley</title>
                <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
              </svg>
              <input
                type="text"
                placeholder="Type a message"
                className="relative w-[90%]   mx-[4px] p-[6px] rounded-lg text-base border-none outline-none dark:bg-white dark:text-black dark:placeholder:text-black"
              />

              <div className="relative">
                <button className="p-2  rounded-full focus:outline-none">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700 fill-current dark:text-black"
                  >
                    <title>ptt</title>
                    <path d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885L18.237,11.412z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default page;

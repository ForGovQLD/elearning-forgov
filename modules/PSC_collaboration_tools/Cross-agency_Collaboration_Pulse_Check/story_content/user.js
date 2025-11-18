window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script2 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script3 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script4 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script5 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script6 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script7 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script8 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script9 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script10 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script11 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script12 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script13 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script14 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script15 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script16 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script17 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script18 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script19 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script20 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script21 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script22 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script23 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script24 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script25 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script26 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script27 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script28 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script29 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script30 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script31 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script32 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script33 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script34 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script35 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script36 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script37 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script38 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script39 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script40 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script41 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script42 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script43 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script44 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script45 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script46 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script47 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script48 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script49 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script50 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script51 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script52 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script53 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script54 = function()
{
  function smoothScrollUpBy200px(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = Math.max(startPosition - 200, 0); // Scroll up by 200px, but not below 0
  const distance = targetPosition - startPosition; // Distance to scroll (negative for scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 500ms (0.5 seconds)
smoothScrollUpBy200px(1000);
}

window.Script55 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script56 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script57 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script58 = function()
{
  function smoothScrollToTop(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = 0; // Top of the page
  const distance = targetPosition - startPosition; // Distance to scroll (negative if scrolling up)
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToTop(1500);
}

window.Script59 = function()
{
  (function () {
    // Get the Storyline player
    var player = GetPlayer();

    // Retrieve the user ID from a Storyline variable (replace "userId" with your actual variable name)
    var userId = player.GetVar("userId"); // Ensure you have a Storyline variable named "userId"

    // Add date and time
    const now = new Date();
    const data = {
        date: now.toLocaleDateString(), // Local date (e.g. 26/09/2025)
        time: now.toLocaleTimeString(), // Local time (e.g. 1:42:00 PM)
        userInfoQ1: player.GetVar("userInfoQ1"), // Replace with your Storyline variable name
        userInfoQ2: player.GetVar("userInfoQ2"), // Replace with your Storyline variable name
        userInfoQ3: player.GetVar("userInfoQ3"), // Replace with your Storyline variable name
        govDepartmentQld: player.GetVar("govDepartmentQld"), // Replace with your Storyline variable name
        overallResult: player.GetVar("overallResult"), // Replace with your Storyline variable name
        Trust1c: player.GetVar("Trust1c"), // Replace with your Storyline variable name
        SharedPurpose2c: player.GetVar("SharedPurpose2c"), // Replace with your Storyline variable name
        EmbedPerspectives3c: player.GetVar("EmbedPerspectives3c"), // Replace with your Storyline variable name
        Power4c: player.GetVar("Power4c"), // Replace with your Storyline variable name
        NavigateConflict5c: player.GetVar("NavigateConflict5c"), // Replace with your Storyline variable name
        LearnInAction6c: player.GetVar("LearnInAction6c"), // Replace with your Storyline variable name
        ShareInfo7c: player.GetVar("ShareInfo7c"), // Replace with your Storyline variable name
        ClarifyRoles8c: player.GetVar("ClarifyRoles8c"), // Replace with your Storyline variable name
        Resourcing9c: player.GetVar("Resourcing9c"), // Replace with your Storyline variable name
        Flexibility10c: player.GetVar("Flexibility10c") // Replace with your Storyline variable name
    };

    // Define the API endpoint URL
    var apiUrl = "https://default51778d2aa6ab4c7697dc782782d650.46.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/f38369269dbd4298acae76e41e157ea4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9wqIKbwPnSsCQf6MK_3HLdDn5bG045il43dZwn5x6sM"; // Replace with your actual API endpoint

    // Send the data via an HTTP POST request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Handle the response (optional)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Data sent successfully:", xhr.responseText);
            } else {
                console.error("Error sending data:", xhr.status, xhr.statusText);
            }
        }
    };

    // Convert the data object to JSON and send it
    xhr.send(JSON.stringify(data));

    // Optionally, log the data object to the console for debugging
    console.log("Data being sent:", data);
})();
}

window.Script60 = function()
{
  var player = GetPlayer();
overallResult = player.GetVar("overallResult");
Trust1c = player.GetVar("Trust1c");
SharedPurpose2c = player.GetVar("SharedPurpose2c");
EmbedPerspectives3c = player.GetVar("EmbedPerspectives3c");
Power4c = player.GetVar("Power4c");
NavigateConflict5c = player.GetVar("NavigateConflict5c");
LearnInAction6c = player.GetVar("LearnInAction6c");
ShareInfo7c = player.GetVar("ShareInfo7c");
ClarifyRoles8c = player.GetVar("ClarifyRoles8c");
Resourcing9c = player.GetVar("Resourcing9c");
Flexibility10c = player.GetVar("Flexibility10c");
P1_Q1selection = player.GetVar("P1_Q1selection"); P1_Q2selection = player.GetVar("P1_Q2selection"); P1_Q3selection = player.GetVar("P1_Q3selection"); P1_Q4selection = player.GetVar("P1_Q4selection"); P1_Q5selection = player.GetVar("P1_Q5selection"); P2_Q1selection = player.GetVar("P2_Q1selection"); P2_Q2selection = player.GetVar("P2_Q2selection"); P2_Q3selection = player.GetVar("P2_Q3selection"); P2_Q4selection = player.GetVar("P2_Q4selection"); P2_Q5selection = player.GetVar("P2_Q5selection"); P3_Q1selection = player.GetVar("P3_Q1selection"); P3_Q2selection = player.GetVar("P3_Q2selection"); P3_Q3selection = player.GetVar("P3_Q3selection"); P3_Q4selection = player.GetVar("P3_Q4selection"); P3_Q5selection = player.GetVar("P3_Q5selection"); P4_Q1selection = player.GetVar("P4_Q1selection"); P4_Q2selection = player.GetVar("P4_Q2selection"); P4_Q3selection = player.GetVar("P4_Q3selection"); P4_Q4selection = player.GetVar("P4_Q4selection"); P4_Q5selection = player.GetVar("P4_Q5selection"); P5_Q1selection = player.GetVar("P5_Q1selection"); P5_Q2selection = player.GetVar("P5_Q2selection"); P5_Q3selection = player.GetVar("P5_Q3selection"); P5_Q4selection = player.GetVar("P5_Q4selection"); P5_Q5selection = player.GetVar("P5_Q5selection"); P6_Q1selection = player.GetVar("P6_Q1selection"); P6_Q2selection = player.GetVar("P6_Q2selection"); P6_Q3selection = player.GetVar("P6_Q3selection"); P6_Q4selection = player.GetVar("P6_Q4selection"); P6_Q5selection = player.GetVar("P6_Q5selection"); P7_Q1selection = player.GetVar("P7_Q1selection"); P7_Q2selection = player.GetVar("P7_Q2selection"); P7_Q3selection = player.GetVar("P7_Q3selection"); P7_Q4selection = player.GetVar("P7_Q4selection"); P7_Q5selection = player.GetVar("P7_Q5selection"); P8_Q1selection = player.GetVar("P8_Q1selection"); P8_Q2selection = player.GetVar("P8_Q2selection"); P8_Q3selection = player.GetVar("P8_Q3selection"); P8_Q4selection = player.GetVar("P8_Q4selection"); P8_Q5selection = player.GetVar("P8_Q5selection");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
 try {
   const { PDFDocument } = PDFLib;
   // Choose PDF based on overallResult value
   let formUrl;
   switch (overallResult) {
     case 'Developing: building the essentials':
       formUrl = 'Pulse check result-Developing.pdf';
       break;
     case 'Emerging: laying the groundwork':
       formUrl = 'Pulse check result-Emerging.pdf';
       break;
     case 'Established: maintaining momentum':
       formUrl = 'Pulse check result-Established.pdf';
       break;
     default:
       console.error("Unknown overallResult:", overallResult);
       formUrl = 'Pulse check result-Developing.pdf'; // Fallback PDF
   }
   const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
   const pdfDoc = await PDFDocument.load(formPdfBytes);
   const form = pdfDoc.getForm();

    // Get field names
    const Trust1cField = form.getTextField('Trust1cField');
    const SharedPurpose2cField = form.getTextField('SharedPurpose2cField');
    const EmbedPerspectives3cField = form.getTextField('EmbedPerspectives3cField');
    const Power4cField = form.getTextField('Power4cField');
    const NavigateConflict5cField = form.getTextField('NavigateConflict5cField');
    const LearnInAction6cField = form.getTextField('LearnInAction6cField');
    const ShareInfo7cField = form.getTextField('ShareInfo7cField');
    const ClarifyRoles8cField = form.getTextField('ClarifyRoles8cField');
    const Resourcing9cField = form.getTextField('Resourcing9cField');
    const Flexibility10cField = form.getTextField('Flexibility10cField');
    const P1_1 = form.getTextField('P1_1');
    const P1_2 = form.getTextField('P1_2');
    const P1_3 = form.getTextField('P1_3');
    const P1_4 = form.getTextField('P1_4');
    const P1_5 = form.getTextField('P1_5');
    const P2_1 = form.getTextField('P2_1');
	const P2_2 = form.getTextField('P2_2');
	const P2_3 = form.getTextField('P2_3');
	const P2_4 = form.getTextField('P2_4');
	const P2_5 = form.getTextField('P2_5');
	const P3_1 = form.getTextField('P3_1');
	const P3_2 = form.getTextField('P3_2');
	const P3_3 = form.getTextField('P3_3');
	const P3_4 = form.getTextField('P3_4');
	const P3_5 = form.getTextField('P3_5');
	const P4_1 = form.getTextField('P4_1');
	const P4_2 = form.getTextField('P4_2');
	const P4_3 = form.getTextField('P4_3');
	const P4_4 = form.getTextField('P4_4');
	const P4_5 = form.getTextField('P4_5');
	const P5_1 = form.getTextField('P5_1');
	const P5_2 = form.getTextField('P5_2');
	const P5_3 = form.getTextField('P5_3');
	const P5_4 = form.getTextField('P5_4');
	const P5_5 = form.getTextField('P5_5');
	const P6_1 = form.getTextField('P6_1');
	const P6_2 = form.getTextField('P6_2');
	const P6_3 = form.getTextField('P6_3');
	const P6_4 = form.getTextField('P6_4');
	const P6_5 = form.getTextField('P6_5');
	const P7_1 = form.getTextField('P7_1');
	const P7_2 = form.getTextField('P7_2');
	const P7_3 = form.getTextField('P7_3');
	const P7_4 = form.getTextField('P7_4');
	const P7_5 = form.getTextField('P7_5');
	const P8_1 = form.getTextField('P8_1');
	const P8_2 = form.getTextField('P8_2');
	const P8_3 = form.getTextField('P8_3');
	const P8_4 = form.getTextField('P8_4');
	const P8_5 = form.getTextField('P8_5');

    // Fill in form
    Trust1cField.setText(Trust1c);
    SharedPurpose2cField.setText(SharedPurpose2c);
    EmbedPerspectives3cField.setText(EmbedPerspectives3c);
    Power4cField.setText(Power4c);
    NavigateConflict5cField.setText(NavigateConflict5c);
    LearnInAction6cField.setText(LearnInAction6c);
    ShareInfo7cField.setText(ShareInfo7c);
    ClarifyRoles8cField.setText(ClarifyRoles8c);
    Resourcing9cField.setText(Resourcing9c);
    Flexibility10cField.setText(Flexibility10c);
    P1_1.setText(P1_Q1selection);
	P1_2.setText(P1_Q2selection);
	P1_3.setText(P1_Q3selection);
	P1_4.setText(P1_Q4selection);
	P1_5.setText(P1_Q5selection);
	P2_1.setText(P2_Q1selection);
	P2_2.setText(P2_Q2selection);
	P2_3.setText(P2_Q3selection);
	P2_4.setText(P2_Q4selection);
	P2_5.setText(P2_Q5selection);
	P3_1.setText(P3_Q1selection);
	P3_2.setText(P3_Q2selection);
	P3_3.setText(P3_Q3selection);
	P3_4.setText(P3_Q4selection);
	P3_5.setText(P3_Q5selection);
	P4_1.setText(P4_Q1selection);
	P4_2.setText(P4_Q2selection);
	P4_3.setText(P4_Q3selection);
	P4_4.setText(P4_Q4selection);
	P4_5.setText(P4_Q5selection);
	P5_1.setText(P5_Q1selection);
	P5_2.setText(P5_Q2selection);
	P5_3.setText(P5_Q3selection);
	P5_4.setText(P5_Q4selection);
	P5_5.setText(P5_Q5selection);
	P6_1.setText(P6_Q1selection);
	P6_2.setText(P6_Q2selection);
	P6_3.setText(P6_Q3selection);
	P6_4.setText(P6_Q4selection);
	P6_5.setText(P6_Q5selection);
	P7_1.setText(P7_Q1selection);
	P7_2.setText(P7_Q2selection);
	P7_3.setText(P7_Q3selection);
	P7_4.setText(P7_Q4selection);
	P7_5.setText(P7_Q5selection);
	P8_1.setText(P8_Q1selection);
	P8_2.setText(P8_Q2selection);
	P8_3.setText(P8_Q3selection);
	P8_4.setText(P8_Q4selection);
	P8_5.setText(P8_Q5selection);
    
    // Flatten the form fields
    form.flatten();

    // Save and download the form
   const pdfBytes = await pdfDoc.save();
   const filename = formUrl.split('/').pop();
   await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
     .then(({ default: saveAs }) => {
       const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
       saveAs(blob, filename);
     })
     .catch((err) => {
       console.error("Error saving the file:", err);
     });
 } catch (err) {
   console.error("Error in fillForm:", err);
 }
}
}

window.Script61 = function()
{
  var player = GetPlayer();
overallResult = player.GetVar("overallResult");
Trust1c = player.GetVar("Trust1c");
SharedPurpose2c = player.GetVar("SharedPurpose2c");
EmbedPerspectives3c = player.GetVar("EmbedPerspectives3c");
Power4c = player.GetVar("Power4c");
NavigateConflict5c = player.GetVar("NavigateConflict5c");
LearnInAction6c = player.GetVar("LearnInAction6c");
ShareInfo7c = player.GetVar("ShareInfo7c");
ClarifyRoles8c = player.GetVar("ClarifyRoles8c");
Resourcing9c = player.GetVar("Resourcing9c");
Flexibility10c = player.GetVar("Flexibility10c");
P1_Q1selection = player.GetVar("P1_Q1selection"); P1_Q2selection = player.GetVar("P1_Q2selection"); P1_Q3selection = player.GetVar("P1_Q3selection"); P1_Q4selection = player.GetVar("P1_Q4selection"); P1_Q5selection = player.GetVar("P1_Q5selection"); P2_Q1selection = player.GetVar("P2_Q1selection"); P2_Q2selection = player.GetVar("P2_Q2selection"); P2_Q3selection = player.GetVar("P2_Q3selection"); P2_Q4selection = player.GetVar("P2_Q4selection"); P2_Q5selection = player.GetVar("P2_Q5selection"); P3_Q1selection = player.GetVar("P3_Q1selection"); P3_Q2selection = player.GetVar("P3_Q2selection"); P3_Q3selection = player.GetVar("P3_Q3selection"); P3_Q4selection = player.GetVar("P3_Q4selection"); P3_Q5selection = player.GetVar("P3_Q5selection"); P4_Q1selection = player.GetVar("P4_Q1selection"); P4_Q2selection = player.GetVar("P4_Q2selection"); P4_Q3selection = player.GetVar("P4_Q3selection"); P4_Q4selection = player.GetVar("P4_Q4selection"); P4_Q5selection = player.GetVar("P4_Q5selection"); P5_Q1selection = player.GetVar("P5_Q1selection"); P5_Q2selection = player.GetVar("P5_Q2selection"); P5_Q3selection = player.GetVar("P5_Q3selection"); P5_Q4selection = player.GetVar("P5_Q4selection"); P5_Q5selection = player.GetVar("P5_Q5selection"); P6_Q1selection = player.GetVar("P6_Q1selection"); P6_Q2selection = player.GetVar("P6_Q2selection"); P6_Q3selection = player.GetVar("P6_Q3selection"); P6_Q4selection = player.GetVar("P6_Q4selection"); P6_Q5selection = player.GetVar("P6_Q5selection"); P7_Q1selection = player.GetVar("P7_Q1selection"); P7_Q2selection = player.GetVar("P7_Q2selection"); P7_Q3selection = player.GetVar("P7_Q3selection"); P7_Q4selection = player.GetVar("P7_Q4selection"); P7_Q5selection = player.GetVar("P7_Q5selection"); P8_Q1selection = player.GetVar("P8_Q1selection"); P8_Q2selection = player.GetVar("P8_Q2selection"); P8_Q3selection = player.GetVar("P8_Q3selection"); P8_Q4selection = player.GetVar("P8_Q4selection"); P8_Q5selection = player.GetVar("P8_Q5selection");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
 try {
   const { PDFDocument } = PDFLib;
   // Choose PDF based on overallResult value
   let formUrl;
   switch (overallResult) {
     case 'Developing: building the essentials':
       formUrl = 'Pulse check result-Developing.pdf';
       break;
     case 'Emerging: laying the groundwork':
       formUrl = 'Pulse check result-Emerging.pdf';
       break;
     case 'Well established: maintaining momentum':
       formUrl = 'Pulse check result-Established.pdf';
       break;
     default:
       console.error("Unknown overallResult:", overallResult);
       formUrl = 'Pulse check result-Developing.pdf'; // Fallback PDF
   }
   const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
   const pdfDoc = await PDFDocument.load(formPdfBytes);
   const form = pdfDoc.getForm();

    // Get field names
    const Trust1cField = form.getTextField('Trust1cField');
    const SharedPurpose2cField = form.getTextField('SharedPurpose2cField');
    const EmbedPerspectives3cField = form.getTextField('EmbedPerspectives3cField');
    const Power4cField = form.getTextField('Power4cField');
    const NavigateConflict5cField = form.getTextField('NavigateConflict5cField');
    const LearnInAction6cField = form.getTextField('LearnInAction6cField');
    const ShareInfo7cField = form.getTextField('ShareInfo7cField');
    const ClarifyRoles8cField = form.getTextField('ClarifyRoles8cField');
    const Resourcing9cField = form.getTextField('Resourcing9cField');
    const Flexibility10cField = form.getTextField('Flexibility10cField');
    const P1_1 = form.getTextField('P1_1');
    const P1_2 = form.getTextField('P1_2');
    const P1_3 = form.getTextField('P1_3');
    const P1_4 = form.getTextField('P1_4');
    const P1_5 = form.getTextField('P1_5');
    const P2_1 = form.getTextField('P2_1');
	const P2_2 = form.getTextField('P2_2');
	const P2_3 = form.getTextField('P2_3');
	const P2_4 = form.getTextField('P2_4');
	const P2_5 = form.getTextField('P2_5');
	const P3_1 = form.getTextField('P3_1');
	const P3_2 = form.getTextField('P3_2');
	const P3_3 = form.getTextField('P3_3');
	const P3_4 = form.getTextField('P3_4');
	const P3_5 = form.getTextField('P3_5');
	const P4_1 = form.getTextField('P4_1');
	const P4_2 = form.getTextField('P4_2');
	const P4_3 = form.getTextField('P4_3');
	const P4_4 = form.getTextField('P4_4');
	const P4_5 = form.getTextField('P4_5');
	const P5_1 = form.getTextField('P5_1');
	const P5_2 = form.getTextField('P5_2');
	const P5_3 = form.getTextField('P5_3');
	const P5_4 = form.getTextField('P5_4');
	const P5_5 = form.getTextField('P5_5');
	const P6_1 = form.getTextField('P6_1');
	const P6_2 = form.getTextField('P6_2');
	const P6_3 = form.getTextField('P6_3');
	const P6_4 = form.getTextField('P6_4');
	const P6_5 = form.getTextField('P6_5');
	const P7_1 = form.getTextField('P7_1');
	const P7_2 = form.getTextField('P7_2');
	const P7_3 = form.getTextField('P7_3');
	const P7_4 = form.getTextField('P7_4');
	const P7_5 = form.getTextField('P7_5');
	const P8_1 = form.getTextField('P8_1');
	const P8_2 = form.getTextField('P8_2');
	const P8_3 = form.getTextField('P8_3');
	const P8_4 = form.getTextField('P8_4');
	const P8_5 = form.getTextField('P8_5');

    // Fill in form
    Trust1cField.setText(Trust1c);
    SharedPurpose2cField.setText(SharedPurpose2c);
    EmbedPerspectives3cField.setText(EmbedPerspectives3c);
    Power4cField.setText(Power4c);
    NavigateConflict5cField.setText(NavigateConflict5c);
    LearnInAction6cField.setText(LearnInAction6c);
    ShareInfo7cField.setText(ShareInfo7c);
    ClarifyRoles8cField.setText(ClarifyRoles8c);
    Resourcing9cField.setText(Resourcing9c);
    Flexibility10cField.setText(Flexibility10c);
    P1_1.setText(P1_Q1selection);
	P1_2.setText(P1_Q2selection);
	P1_3.setText(P1_Q3selection);
	P1_4.setText(P1_Q4selection);
	P1_5.setText(P1_Q5selection);
	P2_1.setText(P2_Q1selection);
	P2_2.setText(P2_Q2selection);
	P2_3.setText(P2_Q3selection);
	P2_4.setText(P2_Q4selection);
	P2_5.setText(P2_Q5selection);
	P3_1.setText(P3_Q1selection);
	P3_2.setText(P3_Q2selection);
	P3_3.setText(P3_Q3selection);
	P3_4.setText(P3_Q4selection);
	P3_5.setText(P3_Q5selection);
	P4_1.setText(P4_Q1selection);
	P4_2.setText(P4_Q2selection);
	P4_3.setText(P4_Q3selection);
	P4_4.setText(P4_Q4selection);
	P4_5.setText(P4_Q5selection);
	P5_1.setText(P5_Q1selection);
	P5_2.setText(P5_Q2selection);
	P5_3.setText(P5_Q3selection);
	P5_4.setText(P5_Q4selection);
	P5_5.setText(P5_Q5selection);
	P6_1.setText(P6_Q1selection);
	P6_2.setText(P6_Q2selection);
	P6_3.setText(P6_Q3selection);
	P6_4.setText(P6_Q4selection);
	P6_5.setText(P6_Q5selection);
	P7_1.setText(P7_Q1selection);
	P7_2.setText(P7_Q2selection);
	P7_3.setText(P7_Q3selection);
	P7_4.setText(P7_Q4selection);
	P7_5.setText(P7_Q5selection);
	P8_1.setText(P8_Q1selection);
	P8_2.setText(P8_Q2selection);
	P8_3.setText(P8_Q3selection);
	P8_4.setText(P8_Q4selection);
	P8_5.setText(P8_Q5selection);
    
    // Flatten the form fields
    form.flatten();

    // Save and download the form
   const pdfBytes = await pdfDoc.save();
   const filename = formUrl.split('/').pop();
   await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
     .then(({ default: saveAs }) => {
       const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
       saveAs(blob, filename);
     })
     .catch((err) => {
       console.error("Error saving the file:", err);
     });
 } catch (err) {
   console.error("Error in fillForm:", err);
 }
}
}

window.Script62 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script63 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

window.Script64 = function()
{
  function smoothScrollToBottom(duration) {
  const startPosition = window.scrollY; // Current scroll position
  const targetPosition = document.body.scrollHeight; // Bottom of the page
  const distance = targetPosition - startPosition; // Distance to scroll
  const startTime = performance.now(); // Start time

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Time elapsed
    const progress = Math.min(elapsedTime / duration, 1); // Progress (0 to 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress; // Ease-in-out function

    window.scrollTo(0, startPosition + distance * ease); // Scroll to position

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue animation
    }
  }

  requestAnimationFrame(scrollStep); // Start animation
}

// Call the function with a duration of 3000ms (3 seconds)
smoothScrollToBottom(3000);
}

};

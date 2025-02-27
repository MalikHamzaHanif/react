# Important Points About React Fiber Architecture

1. **React Fiber is a new version of React's core algorithm**  
   - It improves how React updates the user interface.

2. **Main goal: Incremental rendering**  
   - React can break work into small chunks and process them over multiple frames for better performance.

3. **Fiber allows React to pause, resume, or cancel rendering**  
   - This helps make animations, layouts, and gestures smoother.

4. **Reconciliation optimizes updates**  
   - React compares changes in the app and updates only what’s necessary instead of re-rendering everything.

5. **Separation of reconciliation and rendering**  
   - React finds changes (reconciliation) and applies updates (rendering), making it work efficiently on web (React DOM) and mobile (React Native).

6. **A "fiber" is a unit of work in React Fiber**  
   - Helps React manage updates efficiently by scheduling and prioritizing tasks.

7. **Fiber allows React to reuse previous work**  
   - If an update gets interrupted, React doesn’t have to start over completely.

8. **Keys in lists optimize updates**  
   - They help React match list items correctly when lists change.

9. **React Fiber is still evolving**  
   - Continuous improvements are being made to optimize how React processes updates.

10. **Understanding Fiber helps developers follow and contribute to React’s development**  
    - However, it's a lower-level concept that most developers don’t need to deal with directly.

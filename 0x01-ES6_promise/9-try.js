export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result, 'Guardrail was processed');
  } catch (error) {
    queue.push(error.message, 'Guardrail was processed');
  }

  return queue;
}

// const result = mathFunction();
//     queue.push(result);
//   } catch (error) {
//     queue.push(error.message);
//   } finally {
//     queue.push("Guardrail was processed");
//   }

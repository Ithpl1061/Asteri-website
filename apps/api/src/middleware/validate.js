// Validates req.body against a zod schema. On success the parsed data is in req.validated.
function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body ?? {});
    if (!parsed.success) {
      return res.status(400).json({
        error: 'Invalid input',
        fields: parsed.error.flatten().fieldErrors
      });
    }
    req.validated = parsed.data;
    next();
  };
}

module.exports = validate;

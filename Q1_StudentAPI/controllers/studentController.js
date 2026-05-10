const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Roll number or email already exists",
      });
    }
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const { department, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (department) filter.department = department;

    const skip = (page - 1) * limit;
    const students = await Student.find(filter).skip(skip).limit(Number(limit));
    const total = await Student.countDocuments(filter);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: students,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.searchStudents = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name query parameter is required",
      });
    }
    const students = await Student.find({
      name: { $regex: name, $options: "i" },
    });
    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.partialUpdateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deactivateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deactivated successfully",
      data: student,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const mongoose = require('mongoose');

// Define the database model
const PositionSchema = new mongoose.Schema({
  x: {
    type: Number
  },
  y: {
    type: Number
  }
});

const EdgeStyleSchema = new mongoose.Schema({
  stroke: {
    type: String
  },
  strokeWidth: {
    type: String
  }
});

const DataSchema = new mongoose.Schema({
  label: {
    type: String
  }
});

const NodeStyleSchema = new mongoose.Schema({
  background: {
    type: String
  },
  color: {
    type: String
  },
  border: {
    type: String
  },
  width: {
    type: Number
  }
});

const NodesSchema = new mongoose.Schema({
  id: {
    type: String
  },
  type: {
    type: String
  },
  position: { PositionSchema },
  targetPosition: {
    type: String
  },
  data: [DataSchema],
  style: [NodeStyleSchema]
});

const EdgesSchema = new mongoose.Schema({
  source: {
    type: String
  },
  target: {
    type: String
  },
  sourceHandle: {
    type: String
  },
  style: { EdgeStyleSchema }
})

const MindMapSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  nodes: [NodesSchema],
  edges: [EdgesSchema]
});

const User = module.exports = mongoose.model('mindmap', MindMapSchema);

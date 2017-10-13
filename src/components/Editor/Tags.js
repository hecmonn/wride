import { List } from 'immutable'
import React, { Component } from 'react'
import { TagBox } from 'react-tag-box'

const sampleTags = List(
  ['wride', 'bar', 'baz', 'blitz', 'quux', 'barf', 'balderdash'].map(t => ({
    label: t,
    value: t
  }))
)

export default class BackspaceDeletion extends Component {
    constructor(props){
        super(props);
        this.state={
          tags: [],
          selected: sampleTags.take(1)
        }
    }

  render() {
    const { tags, selected } = this.state
    const onSelect = tag => {
      const newTag = {
        label: tag.label,
        value: tag.value || tag.label
      }

      this.setState({
        selected: selected.push(newTag)
      })
      let tagsSent=[];
      selected._tail.array.map(r=>{
          tagsSent.push(r.label);
      });
      console.log(selected);
      this.props.handleTag(tagsSent);
    }

    const remove = tag => {
      this.setState({
        selected: selected.filter(t => t.value !== tag.value)
      })
      let tagsSent=[];
      selected._tail.array.map(r=>{
          tagsSent.push(r.label);
      });
      console.log(selected);
      this.props.handleTag(tagsSent);
    }

    const placeholder = selected.isEmpty() ? '' :
      "Add a tag"

    return (
      <TagBox
        tags={tags}
        selected={selected.toJS()}
        onSelect={onSelect}
        removeTag={remove}
        backspaceDelete={true}
        placeholder={placeholder}
      />
    )
  }
}

/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// @flow
import React from 'react';
import { translate } from '../../../helpers/l10n';
import BubblePopup from '../../../components/common/BubblePopup';
import type { IssueComment } from '../types';

type Props = {
  comment: IssueComment,
  onDelete: () => void,
  popupPosition?: {}
};

export default function CommentDeletePopup(props: Props) {
  return (
    <BubblePopup position={props.popupPosition} customClass="bubble-popup-bottom-right">
      <div className="text-right">
        <div className="spacer-bottom">{translate('issue.comment.delete_confirm_message')}</div>
        <button className="button-red" onClick={props.onDelete}>{translate('delete')}</button>
      </div>
    </BubblePopup>
  );
}
